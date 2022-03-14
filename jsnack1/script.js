// console check
console.log("JS OK!");

// consegna:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const inputParola = prompt("inserisci parola");

// valorizzo palindroma con il valore di ritorno di wordPalindrome
const palindroma = wordPalindrome(inputParola);

// se il valore restituito dalla funzione corrisponde alla parola inserita,
// la parola risulterà palindroma,altrimenti No

if (inputParola == palindroma) {
  console.log(`la parola ${palindroma} è palindroma`);
} else {
  console.log(`la parola ${palindroma} non è palindroma`);
}
// richiamo la funzione
function wordPalindrome(word) {
  let wordInverse = word.split("").reverse().join("");
  return wordInverse;
}
