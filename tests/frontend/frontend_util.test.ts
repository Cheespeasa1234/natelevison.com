// since.test.ts
import { since } from "../../src/lib/frontend_util";

describe("since", () => {
  beforeAll(() => {
    // Freeze Date so tests are stable
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-09-17T00:00:00Z")); // current date fixed
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("calculates exact years difference when month matches", () => {
    expect(since(2020, "September")).toBe("5 years");
  });

  it("rounds to nearest 0.25 years", () => {
    // Feb 2023 → Sep 2025 = 2 years 7 months ≈ 2.58 years → rounds to 2.5
    expect(since(2023, "February")).toBe("2.5 years");
  });

  it("handles when month is after current month", () => {
    // December 2024 → Sep 2025 = 9 months ≈ 0.75 years
    expect(since(2024, "December")).toBe("0.75 years");
  });

  it("handles same year and same month", () => {
    expect(since(2025, "September")).toBe("0 years");
  });

  it("handles very old date", () => {
    expect(since(2000, "January")).toMatch(/^\d+(\.\d+)? years$/);
  });
});
