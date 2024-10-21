function penjumlahan (a, b){
    return a + b;
}

function pengurangan (a, b) {
    return a - b;
}

function pembagian (a, b) {
    return a / b;
}

function perkalian (a, b) {
    return a * b;
}

function biodata (nama){
    return nama;
}

function displayMenu(rl, MathOperations){
    console.log("\nPilih yang mana nih?")
    console.log("1. Penjumlahan")
    console.log("2. Pengurangan")
    console.log("3. Pembagian")
    console.log("4. Perkalian")
    console.log("5. Keluar")
    rl.question("> ", async function(choice) {
        if (choice === '1'){
            rl.question("\nMasukan angka pertama: ", async function (a) {
                rl.question("Masukan angka kedua: ", async function (b) {
                    const hasil = MathOperations.penjumlahan(parseInt(a), parseInt(b))
                    console.log("Hasilnya: " + hasil)
                    displayMenu(rl, MathOperations)
                });
            });
        } else if (choice === '2') {
            rl.question("\nMasukan angka pertama: ", async function (a) {
                rl.question("Masukan angka kedua: ", async function (b) {
                    const hasil = MathOperations.pengurangan(parseInt(a), parseInt(b))
                    console.log("Hasilnya: " + hasil)
                    displayMenu(rl, MathOperations)
                });
            });
        } else if (choice === '3') {
            rl.question("\nMasukan angka pertama: ", async function (a) {
                rl.question("Masukan angka kedua: ", async function (b) {
                    const hasil = MathOperations.pembagian(parseFloat(a), parseFloat(b))
                    console.log("Hasilnya: " + hasil)
                    displayMenu(rl, MathOperations)
                });
            });
        } else if (choice === '4') {
            rl.question("\nMasukan angka pertama: ", async function (a) {
                rl.question("Masukan angka kedua: ", async function (b) {
                    const hasil = MathOperations.perkalian(parseFloat(a), parseFloat(b))
                    console.log("Hasilnya: " + hasil)
                    displayMenu(rl, MathOperations)
                });
            });
        } else if (choice === '5'){
            rl.close()
        } else {
            console.log("Nomornya ga ada kocak!!")
            displayMenu(rl, MathOperations)
        }
    });
}

module.exports = {
    penjumlahan, pengurangan, pembagian, perkalian, biodata, displayMenu
};