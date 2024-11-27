const fs = require('fs').promises;

console.log("Starts")

const a = 100;

setImmediate(()=> console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", ()=> {
    console.log("File Reading CB")
});

setTimeout(()=> console.log("Timer Expired"), 0);

function printA() {
    console.log("a=", a);
}

printA();

console.log("Ends")


/* 
* Start
* End
* Timer Expired
* File Reading CB
* setImmediate
* a=100
*/