/*
Consegna:

1) Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

2) Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Consigli del giorno
- Scriviamo sempre in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

 */

/*

Tools:
- const / let
- prompt
- function
- if else
- for / while
- Math.random / Math.ceil / Math.floor 

*/

//creare un array dove inserire le singole lettere della parola inserita dall'utente
const userWordArray = [];

//creare un array dove inserire le singole lettere della parola inserita dall'utente ma al contrario
const userWordArrayReverse = [];

//chiedere all'utente di inserire una parola e salvarla in una variabile
const userWord = prompt('Scrivi una parola');
//console.log(userWord);


for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    console.log(letter);
    userWordArray.push(userWord[i]);
    userWordArrayReverse.unshift(userWord[i]);
}

console.log(userWordArray);
console.log(userWordArrayReverse);


//creare una funzione per capire se la parola è palindroma










/*
//chiedere all'utente di scegliere tra pari e dispari e salviamo la sua scelta
let userChoice = prompt('pari o dispari?');

if (userChoice !== 'pari' && userChoice !== 'dispari') {
    alert('Devi scegliere tra pari e dispari');

} else {
    console.log(userChoice);
}

//chiedere all'utente di scegliere un numero da 1 a 5 e salviamo la sua scelta
const userNumber = parseInt(prompt('Scegli un numero da una a 5'));
console.log(userNumber);

//generare un numero random da 1 a 5 per il computer usando una funzione

function generateRandomNumber(max) {
    return Math.ceil(Math.random() * max);

}

const computerNumber = generateRandomNumber(5);
console.log(computerNumber);

//sommiamo i due numeri e salviamoli in una variabile
let sum = userNumber + computerNumber;
console.log(sum);

//creare una funzione per controllare se un numero è pari
function isEven(numb) {

    if (numb % 2 === 0) {
        console.log('pari');
        return true;

    } else {
        console.log('dispari');
        return false;
    }
}

//se la scelta tra pari e dispari dell'utente è uguale al valore del risultato ottenuto

let result = 'dispari';

if (isEven(sum)) {
    result = 'pari';
}


if (userChoice == result) {
    console.log('HAI VINTO');
} else {
    console.log('HAI PERSO');
}
*/