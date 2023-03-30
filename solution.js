const fs = require('fs');

const Haiku = () =>{
    const arr = fs.readFileSync("words.txt", "utf8").split("\n");

    const result = ["","",""];

    result.forEach((_, index)=> {
        let amount = index === 1 ? 7 : 5;
        const words = [];
        while (amount > 0){
            
            const currentWord = arr[Math.floor(Math.random() * arr.length)];
            const currentWordSyllables = syllablesCounter(currentWord);
            if(currentWordSyllables <= amount){
                words.push(currentWord);
                amount = amount - currentWordSyllables;
            }
        }
        result[index] = words.join(" ");
    })

    console.log(result)
}

Haiku()

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

console.log(syllablesCounter("organized"))


// create haiku  5 7 5 
// avoid repeating words
