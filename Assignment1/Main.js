const readline = require("readline");
const MathOperations = require('./MathOperations');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=========================")
console.log("-----Mari Berhitung!-----")
console.log("Taman Kanak-Kanak Amonali")
console.log("=========================")

rl.question("Nama lu siapa kocakkk??? ", function (nama) {
    console.log(nama)
    MathOperations.displayMenu(rl, MathOperations);
});

rl.on("close", function(){
    console.log("\nGOOD BYE KIMI NO UNMEI NO HITO WA BOKU JANAI")
    process.exit(0);
});
