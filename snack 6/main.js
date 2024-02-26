// ask how many numbers do u want to insert
const numberOfNumbers = Number(prompt('quanti numeri vuoi inserire?'))

//cycling numbers u want to cube
for (let i = 0; i < numberOfNumbers; i++) {
    
    const number = Number(prompt('inserisci un numero'))

    console.log(number * number * number);
}


