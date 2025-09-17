import { onlyHasGivenChars, removeAllInvalidCharacters, alphanum, stringHasContent, similarity, wordSimilarity } from "../src/lib/util";

describe("string operation testing suite", () => {
    test("checks if string only has given chars", () => {
        expect(onlyHasGivenChars("abc", "abcdef")).toBe(true);
        expect(onlyHasGivenChars("a", "abcdef")).toBe(true);
        expect(onlyHasGivenChars("abcdefg", "abcdef")).toBe(false);
        expect(onlyHasGivenChars("129su82j8", "abcdef")).toBe(false);
        expect(onlyHasGivenChars("129su82j8", "1289suj")).toBe(true);
    });
    
    test("properly removes chars from string", () => {
        expect(removeAllInvalidCharacters("abcdef", alphanum, '')).toBe("abcdef");
        expect(removeAllInvalidCharacters("abcef 1358", alphanum + " ", '')).toBe("abcef 1358");
        expect(removeAllInvalidCharacters("abce!!!f1358", alphanum, '')).toBe("abcef1358");
        expect(removeAllInvalidCharacters("#(*@$&(!@&$(*!@%&", alphanum, '')).toBe("");
        expect(removeAllInvalidCharacters("he!!o", alphanum, 'l')).toBe("hello");
    });

    test("detects non existent strings", () => {
        expect(stringHasContent("hello")).toBe(true);
        expect(stringHasContent(undefined)).toBe(false);
        expect(stringHasContent(null)).toBe(false);
        expect(stringHasContent({} as string)).toBe(true);
    });

    test("correct string similarities", () => {
        expect(similarity("hello", "hewwo")).toBeGreaterThan(similarity("hello", "fartshitting"));
        expect(similarity("hello", "hello")).toEqual(similarity("bye", "bye"));
        expect(similarity("word1", "thing2")).toEqual(similarity("thing2", "word1"));
        expect(similarity("hello", "hello")).toEqual(1.0);
        expect(similarity("hello", "1ello")).toEqual(0.8);
        expect(similarity("hello", "12llo")).toEqual(0.6);
        expect(similarity("hello", "123lo")).toEqual(0.4);
        expect(similarity("hello", "1234o")).toEqual(0.2);
        expect(similarity("hello", "12345")).toEqual(0.0);
    });

    test("correct sentence similarities", () => {
        expect(wordSimilarity("hello world", "world hello")).toEqual(1.0);
        expect(wordSimilarity("a b c d", "a b c e")).toEqual(0.75);
        expect(wordSimilarity("a b c d", "a b e e")).toEqual(0.50);
        expect(wordSimilarity("", "a")).toEqual(0);
        expect(wordSimilarity("!$%$", "!$%$")).toEqual(1);
        expect(wordSimilarity("abe !$%$", "!$%$ abc")).toBeCloseTo(5/6, 5);
        expect(wordSimilarity("abc", "edau")).toEqual(similarity("abc", "edau"));
        expect(wordSimilarity("a432983fh4bc", "edau")).toEqual(similarity("a432983fh4bc", "edau"));
        expect(wordSimilarity("a4329 83fh4bc", "edau")).toEqual(similarity("a43 29 83fh4 bc", "edau"));
    });
});

describe("blog api testing suite", () => {

    

});