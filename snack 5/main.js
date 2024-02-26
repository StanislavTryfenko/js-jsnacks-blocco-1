const numbers = [];

//using while
let ask = 0;
while(ask < 6){
    let input = Number(prompt("inserisci un numero"))
    if (input % 2 !== 0) {
        numbers.push(input);  
    }
    ask++
};

//using for (imo best)
/* for (let i = 0; i < 6; i++) {
    let input = Number(prompt("inserisci un numero"))
    if (input % 2 !== 0) {
    numbers.push(input);   
    }
}; */

/*  check
console.log(numbers); */


//advanced step
//const dispari = numbers.filter(number => number % 2 !== 0 )
