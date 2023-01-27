// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// CHIEDERE ALL'UTENTE DI SCEGLIERE UN NUMERO
let number = parseInt(prompt("Scrivi un numero"));

// SE È PARI, STAMPA IL NUMERO
if (number % 2 == 0) {
    console.log(number);
}

// SE È DISPARI, STAMPA IL NUMERO SUCCESSIVO
else {
    console.log(number + 1);
}
