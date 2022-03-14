// console check
console.log("JS OK!");

// consegna:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari
const inputScelta = prompt("scegli Pari o Dispari?");
console.log(`Hai scelto ${inputScelta}`);

// chideo un numero da 1 a 5
const inputNumero = prompt("inserisci un numero da 1 a 5");
console.log(`Hai scelto il numero ${inputNumero}`);

// genero numero random da 1 a 5 per il computer usando la funzione
const numeroCom = generaNumeroRandom(1, 5);
console.log(`il Computer ha scelto il numero ${numeroCom}`);

// sommo i numeri dell'utente e del computer
const sommaNumUserCom = inputNumero + numeroCom;

console.log(`la somma del numero User e del numero Com è ${sommaNumUserCom}`);
// verifico che il risultato sia pari o dispari
const pariODispari = evenOrOdd(inputNumero, numeroCom);

// se il valore del risultato della funzione sarà uguale all'inputScelta l'utente vince,
// altrimenti vince il computer
if (pariODispari === inputScelta) {
  console.log("Hai Vinto!");
} else {
  console.log("Hai Perso!");
}

// richiamo la funzione per generare numeri random
function generaNumeroRandom(min, max) {
  const range = max - min + 1;
  const numGenerated = Math.floor(Math.random() * range) + min;
  return numGenerated;
}

// richiamo la funzione per verificare se la somma dei numeri è pari o dispari
function evenOrOdd(numUser, numCom) {
  let somma = numUser + numCom;
  if (somma % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
