const { describe } = require("node:test");
const fs = require("fs");

const file = fs.readFileSync("words.txt", "utf8").split("\n");

const { Haiku, syllablesCounter } = require("./solution");

describe("Syllables counter", () => {
  test("should correctly count syllables in a word", () => {
    expect(syllablesCounter("swole")).toBe(2);
    expect(syllablesCounter("fit")).toBe(1);
    expect(syllablesCounter("fitness")).toBe(2);
    expect(syllablesCounter("gains")).toBe(1);
  });

  test("should return 0 for an empty string", () => {
    expect(syllablesCounter("")).toBe(0);
  });

  test("should return 1 for a word with 3 or fewer characters", () => {
    expect(syllablesCounter("cat")).toBe(1);
  });
});

describe("Haiku", () => {
  test("Follows the 5 7 5 rule for Haiku", () => {
    const result = Haiku(file);
    const syllablesTotal = (str) => {
      const arr = str.split(" ");
      return arr.reduce((acc, val) => {
        return acc + syllablesCounter(val);
      }, 0);
    };
    expect(syllablesTotal(result[0])).toBe(5);
    expect(syllablesTotal(result[1])).toBe(7);
    expect(syllablesTotal(result[2])).toBe(5);
  });

  test("no word can be duplicated", () => {
    const result = Haiku(file);
    const separatedWords = result.join(" ").split(" ");
    expect(new Set(separatedWords).size).toBe(separatedWords.length);
  });

  test("returns only words with letters, not numbers.", () => {
    const listWNumbers = addNumberToWords(file);
    const result = Haiku(listWNumbers);
    const words = result.join(" ").split(" ");
    const containsNumbers = words.some((word) => /\d/.test(word));
    expect(containsNumbers).toBe(false);
  });

  // this is just in case a file comes with a page number we ignore it.
  test("returns empty array when passed invalid input", () => {
    const result = Haiku("not an array");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});

function addNumberToWords(arr) {
  return arr.map((word, index) => `${word}${index + 1}`);
}
