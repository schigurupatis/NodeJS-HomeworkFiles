const fs = require('fs').promises;

console.log("Starts");

const a = 100;

setImmediate(()=> console.log("setImmediate"))

setTimeout(()=> console.log("Timer Expired"), 0)

Promise.resolve("Promise").then(console.log)

// fs.readFile("./file.txt", "utf8", () => {
//     setTimeout(()=> console.log("2nd Timer Expired"), 0)
//     process.nextTick(()=> console.log("Process.netTick 2"))
//     setImmediate(()=> console.log("2nd setImmediate"))
//     console.log("File Reading CB")
// })

fs.readFile("./file.txt", "utf8")
  .then((data) => {
    // Simulating your callback behavior
    setTimeout(() => console.log("2nd Timer Expired"), 0);
    process.nextTick(() => console.log("Process.netTick 2"));
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File Reading CB");
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });

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
Timer Expired
setImmediate
    File Reading CB
    Process.netTick 2
    2nd setImmediate
    2nd Timer Expired
*/