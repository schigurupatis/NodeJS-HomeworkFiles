const fs = require('fs').promises;

console.log("Starts");

const a = 100;

setImmediate(()=> console.log("setImmediate"))

Promise.resolve(()=> console.log("Promise"))

fs.readFile("./file.txt", "utf8", ()=> {
    console.log("File Reading CB")
})

setTimeout(()=> console.log("Timer Expored"), 0)

process.nextTick(()=> console.log("Process.netTick"))

function printA() {
    console.log("a=", a)
}

printA();
console.log("Ends")


/*
Starts
a=5
Ends
Process.nextTick
Promise
Timer Expored
setImmediate
File Reading CB
*/