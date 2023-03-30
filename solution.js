const fs = require("fs");

const Haiku = (arr) => {

  if (!isArrOfStrings(arr)) {
    return [];
  }

  const result = ["", "", ""];
  let copy = new Set();

  result.forEach((_, index) => {
    let amount = index === 1 ? 7 : 5;
    const words = [];
    while (amount > 0) {

      const currentWord = removeNonLetterCharacters(arr[Math.floor(Math.random() * arr.length)]);
      const currentWordSyllables = syllablesCounter(currentWord);

      if (currentWordSyllables <= amount && !copy.has(currentWord)) {
        copy.add(currentWord);
        words.push(currentWord);
        amount = amount - currentWordSyllables;
      };
    };

    result[index] = words.join(" ");
  });

  return result;
};

const file = fs.readFileSync("words.txt", "utf8").split("\n");
console.log(Haiku(file));

function syllablesCounter(word) {

  let Word = word;

  if (typeof Word !== "string" || Word.length == 0) {
    return 0;
  };

  if (Word.length <= 3) {
    return 1;
  };

  Word = Word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  Word = Word.replace(/^y/, "");

  return Word.match(/[aeiouy]{1,2}/g).length;
};

function isArrOfStrings(arr) {
    
  if (!Array.isArray(arr)) {
    return false;
  };

  return arr.every((word) => {
    return typeof word === "string";
  });
}

function removeNonLetterCharacters(word) {
  return word.toLowerCase().replace(/[^a-zA-Z ]/g, "");
}

module.exports = { Haiku, syllablesCounter };
