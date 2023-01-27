const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let risultatoFinale = 0;

for (let i = 0; i < numeriInteri.length; i++) {
    if (i % 2 !== 0) {
        risultatoFinale += numeriInteri[i];
    }
}
console.log("Il risultato finale è: " + risultatoFinale);