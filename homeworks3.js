// xndir1
// Given a number round it to the nearest 50 without using “if” operator (conditions).


let num = +prompt()
num%50
for(let i = 25; i >= num%50 ; i--){
        for(let j = 25 ; j <= num%50 ; j++){
        console.log(num - (num%50)+50)
    }
}  console.log(num - (num%50) )




// xndir 2
//  Find the sign of product of three numbers without multiplication operator. Display the s	pecified sign.


let num1 = +prompt('Entr number')
let num2 = +prompt('Entr number')
let num3 = +prompt('Entr number')

if ( num1 > 0 &&  num2 > 0 &&  num3 > 0)
{
          console.log("The sign is +");
}
else if ( num1 < 0 &&  num2 < 0 &&  num3 < 0)
        {
          console.log("The sign is -");
        }
        else if ( num1 > 0 &&  num2 < 0 &&  num3 < 0)
        {
          console.log("The sign is +");
        }
        else if ( num1 < 0 &&  num2 > 0 &&  num3 < 0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The unsigned is -");
        }


// xndir 3
// Insert a digit and a number. Check whether the digits contains in the number or not.

let number = [+prompt('Entr number'),+prompt('Entr number'),+prompt('Entr number'),+prompt('Entr number')]
let digith = 8
for(let i = 0; i < number.length; i++){
if(number [i] === digith ) {
    console.log('yes')
} else{
         console.log('No')
    }
}
    


// xndir 4
//  Enter a number. Find the difference between its biggest and smallest digits.


let num1 = +prompt('Entr number')
let num2 = +prompt('Entr number')
let num3 = +prompt('Entr number')

let max = Math.max(num1 , num2, num3 )
let min = Math.min(num1 , num2, num3 )
let result = max - min
console.log(result)


// xndir 5
// Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

let number = +prompt("Enter a positive number: ")
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
} 
 else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }

    } if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

      else {
    console.log("The number is not a prime number.");
}