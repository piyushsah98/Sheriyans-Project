let str = 'Hello How are you';
let vowels = 'aeiou'

function reverseString(str) {
    let newRevStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newRevStr += str[i];
    }

    console.log(newRevStr)
}

let sum = (...numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(`The total sum of the given numbers is: ${sum}`)
}

let countVowel = (str) => {
    let count = 0

    for (let char of str) {
        if (vowels.includes(char))
            count++;
    }

    console.log(count)
}

let palindrome = (str) => { // madam
    let currStr = str.toLowerCase();
    let reverseStr = '';
    for (let i = currStr.length - 1; i >= 0; i--) {
        reverseStr += currStr[i];
    }

    if (currStr === reverseStr) {
        console.log('It is a palindrome')
    }
    else {
        console.log('It is not a palindrome')
    }
}
countVowel(str)


// Create a higher-order function that executes another function twice.

let hof2 = () => {
    console.log('welcome')
}

let hof = (cb) => {
    console.log('Welome to the High order function');

    cb();
    cb();
}

hof(hof2)

// Write a function that returns another function.

function returnAnotherFun(name) {
    return (day) => {
        console.log(`${day}, ${name}. How are you ?`)
    }
}

let greet = returnAnotherFun('piyush');
greet('Good Morining');


// Create an impure function using global variable modification.

function changeStr(str) {
    str += 'a';
    console.log(str)
}

// IIFE - instantly invoked function expression

(function () {
    console.log('Kya haal hai bhai')
})();


let arr = [];

for (let a = 2; a <= 1000; a += 2) {
    arr.push(a)
}





