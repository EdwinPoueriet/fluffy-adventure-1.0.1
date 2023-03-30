const fs = require('fs');

const Haiku = (arr) =>{

    const result = ["","",""];
    let copy = new Set();

    result.forEach((_, index)=> {
        let amount = index === 1 ? 7 : 5;
        const words = [];
        while (amount > 0){
            
            const currentWord = arr[Math.floor(Math.random() * arr.length)];
            const currentWordSyllables = syllablesCounter(currentWord);
            if(currentWordSyllables <= amount && !copy.has(currentWord)){
                copy.add(currentWord);
                words.push(currentWord);
                amount = amount - currentWordSyllables;
            }
        }

        result[index] = words.join(" ");
    })

    return result;
}

const arr = fs.readFileSync("words.txt", "utf8").split("\n");
console.log(Haiku(arr))

function syllablesCounter(word) {

    let Word = word;

    if (Word.length == 0){
        return 0;
    }

    if (Word.length <= 3) {
        return 1
    }

    Word = Word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    Word = Word.replace(/^y/, '');

    return Word.match(/[aeiouy]{1,2}/g).length;
}

module.exports = {Haiku, syllablesCounter}

