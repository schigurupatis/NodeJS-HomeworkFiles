const fs = require('fs').promises;

console.log("Starts");

const a = 100;

setImmediate(()=> console.log("setImmediate"))

Promise.resolve("Promise").then(console.log)

// fs.readFile("./file.txt", "utf8", () => {
//     console.log("File Reading CB")
// })

fs.readFile("./file.txt", "utf8")
.then((data)=> {
    console.log("File Reading CB")
}).catch((err) => {
    console.error("Error reading file:", err.message);
});


setTimeout(()=> console.log("Timer Expired"), 0)

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