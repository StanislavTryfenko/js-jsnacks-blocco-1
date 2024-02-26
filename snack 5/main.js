const numbers = []

let ask = 0;

while(ask < 6){

    let input = Number(prompt("inserisci un numero"))

    if (input % 2 !== 0) {
        numbers.push(input);
        
    }

    ask++
};

/* for (let i = 0; i < 6; i++) {

    let input = Number(prompt("inserisci un numero"))

        if (input % 2 !== 0) {
        numbers.push(input);
        
    }


    
} */




/* const dispari = numbers.filter(number => number % 2 !== 0 ) */

console.log(numbers);