const fs = require('fs');

const Haiku = () =>{
    const arr = fs.readFileSync("words.txt", "utf8");
    console.log(arr)
}

Haiku()