const fs = require('fs');

const Haiku = () =>{
    const arr = fs.readFileSync("words.txt", "utf8").split("\n");
    const result = [];

    // console.log(arr)
}

Haiku()

function syllablesCounter(word) {
    let Word = word;
    if (word.length == 0){
        return 0;
    }
    if (Word.length <= 3) {
        return 1
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
}

console.log(syllablesCounter("organized"))

// check amount of syllables
// create haiku  5 7 5 
// avoid repeating words
