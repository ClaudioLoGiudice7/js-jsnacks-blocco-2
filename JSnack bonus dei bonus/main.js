let risultati = ["W", "W", "L", "X", "X", "W", "L", "X"];

let wins = 0;
let losses = 0;
let draws = 0;

for (let i = 0; i < risultati.length; i++) {
    if (risultati[i] === "W") {
        wins++;
    }
    else if (risultati[i] === "L") {
        losses++;
    }
    else if (risultati[i] === "X") {
        draws++
    }
}

console.log("Vittorie: " + wins);
console.log("Sconfitte: " + losses);
console.log("Pareggi: " + draws);