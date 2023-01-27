// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// ARRAY DI NUMERI
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let redDiv = document.getElementById("red");
let greenDiv = document.getElementById("green");

// CICLO FOR
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        greenDiv.innerHTML += "<p>" + numbers[i] + "</p>";
    } else {
        redDiv.innerHTML += "<p>" + numbers[i] + "</p>";
    }
}