import fs from "fs";
import path from "path";
import * as blog from "../src/lib/blog";
import { type BlogArticle } from "../src/lib/blog";

// Mock fs and path
jest.mock("fs");
jest.mock("path");

const mockedFs = fs as jest.Mocked<typeof fs>;
const mockedPath = path as jest.Mocked<typeof path>;

describe("Sorting functions", () => {
    const baseArticles: BlogArticle[] = [
        { info: { id: 3, created: 1000, tags: [], name: "c", title: "C", enableGlossary: false, starred: false, unlisted: false }, content: { type: "html", file: "", url: "" }, data: { similarity: 0.1 } },
        { info: { id: 1, created: 3000, tags: [], name: "a", title: "A", enableGlossary: false, starred: true, unlisted: false }, content: { type: "html", file: "", url: "" }, data: { similarity: 0.9 } },
        { info: { id: 2, created: 2000, tags: [], name: "b", title: "B", enableGlossary: false, starred: false, unlisted: false }, content: { type: "html", file: "", url: "" }, data: { similarity: 0.5 } },
    ];

    test("sortBySimilarity", () => {
        const articles = [...baseArticles];
        blog.sortBySimilarity(articles);
        expect(articles.map(a => a.info.id)).toEqual([1, 2, 3]);
    });

    test("sortByCreated", () => {
        const articles = [...baseArticles];
        blog.sortByCreated(articles);
        expect(articles.map(a => a.info.created)).toEqual([3000, 2000, 1000]);
    });

    test("sortById", () => {
        const articles = [...baseArticles];
        blog.sortById(articles);
        expect(articles.map(a => a.info.id)).toEqual([3, 2, 1]);
    });

    test("sortByStarred", () => {
        const articles = [...baseArticles];
        blog.sortByStarred(articles);
        expect(articles[0].info.starred).toBe(true);
    });
});

describe("isNameRealArticle", () => {
    beforeEach(() => {
        mockedPath.join.mockImplementation((...args: string[]) => args.join("/"));
    });

    test("returns true for safe and existing article", () => {
        mockedFs.existsSync.mockReturnValue(true);
        expect(blog.isNameRealArticle("valid-name")).toBe(true);
    });

    test("returns false for unsafe name", () => {
        expect(blog.isNameRealArticle("invalid/name")).toBe(false);
    });

    test("returns false if file does not exist", () => {
        mockedFs.existsSync.mockReturnValue(false);
        expect(blog.isNameRealArticle("nonexistent")).toBe(false);
    });
});

describe("getAllBlogNames", () => {
    beforeEach(() => {
        mockedPath.join.mockImplementation((...args: string[]) => args.join("/"));
    });

    test("returns filenames without extension", () => {
        mockedFs.readdirSync.mockReturnValue(["a.xml", "b.xml"] as unknown as fs.Dirent<Buffer>[]);
        const names = blog.getAllBlogNames();
        expect(names).toEqual(["a", "b"]);
    });
});

describe("getBlogArticle", () => {
    beforeEach(() => {
        mockedPath.join.mockImplementation((...args: string[]) => args.join("/"));
    });

    const xml = `
    <article>
      <info>
        <id>1</id>
        <created>1630000000</created>
        <tag>tag1</tag>
        <title>Sample Article</title>
        <name>sample-article</name>
        <enableGlossary/>
        <starred/>
        <unlisted/>
      </info>
      <content>
        <html>test-content.html</html>
      </content>
    </article>
  `;

    test("returns parsed article from valid xml", () => {
        // Mock safe name and file exists
        mockedFs.existsSync.mockReturnValue(true);
        mockedFs.readFileSync.mockImplementation((file) => {
            if (typeof file === "string" && file.endsWith(".xml")) {
                return xml;
            }
            return "HTML content";
        });

        const result = blog.getBlogArticle("sample-article");

        expect(result).toBeDefined();
        expect(result?.info.title).toBe("Sample Article");
        expect(result?.info.enableGlossary).toBe(true);
        expect(result?.info.starred).toBe(true);
        expect(result?.info.unlisted).toBe(true);
        expect(result?.content.type).toBe("html");
        expect(result?.content.text).toBe("HTML content");
    });

    test("returns undefined if article doesn't exist", () => {
        mockedFs.existsSync.mockReturnValue(false);
        const result = blog.getBlogArticle("bad-name");
        expect(result).toBeUndefined();
    });
});
