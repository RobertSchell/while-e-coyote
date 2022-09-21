const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("Enter a value for x: "));
let y = Number(prompt("Enter a value for y: "));

while(x % y !== 0){
    x++;
    console.log(x)
    
}
console.log(`${x} is divisible by ${y}`)