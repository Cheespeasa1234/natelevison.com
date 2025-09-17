// glossarizeParagraph.test.ts
import { glossarizeParagraph } from "../../src/lib/glossarizer";

describe("glossarizeParagraph", () => {
  let p: HTMLParagraphElement;

  beforeEach(() => {
    p = document.createElement("p");
  });

  it("wraps a single glossary term (API)", () => {
    p.innerHTML = "The API is useful.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toContain(
      `<span class="gloss" data-tippy-content="Short for Application Programming Interface- a method for two aspects of a complex program, or even separate programs, to communicate.">API</span>`
    );
  });

  it("wraps CSS glossary term", () => {
    p.innerHTML = "We use CSS for styling.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toContain("class=\"gloss\"");
    expect(p.innerHTML).toContain("Cascading Style Sheets");
  });

  it("wraps JS alias correctly", () => {
    p.innerHTML = "JS is widely used.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toContain("JavaScript is a programming language");
    expect(p.innerHTML).toContain(">JS<");
  });

  it("wraps JavaScript alias correctly", () => {
    p.innerHTML = "JavaScript powers the web.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toContain(">JavaScript<");
  });

  it("wraps HTML glossary term", () => {
    p.innerHTML = "HTML is the structure of web pages.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toContain(">HTML<");
  });

  it("does not change text without glossary terms", () => {
    p.innerHTML = "No glossary terms here.";
    glossarizeParagraph(p);
    expect(p.innerHTML).toBe("No glossary terms here.");
  });
});
