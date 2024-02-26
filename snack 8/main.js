/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const n = (prompt('add a number from 1000 to 9999'));

const numbers = Array.from(n, Number)

console.log(numbers);


let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);