const numbers = [0]

let ask = 0;

while(ask < 10){

    let input = prompt("inserisci un numero")

    numbers.push(input);
    ask++
};

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    sum += (Number(number));

}

console.log(sum);