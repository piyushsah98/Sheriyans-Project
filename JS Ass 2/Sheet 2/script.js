let arr = ['Leo', 'Spiderman', 'Iron man', 'Thor', 'Captain america'];
// arr.forEach(element => {
//     console.log(element)
// });

// let arr2 = [23, 'hello', {}, true, [1, 2, 3, 4, 'Bokachoda']];

// console.log(arr2[4][0])
// console.log(arr2[4][1])
// console.log(arr2[4][2])
// console.log(arr2[4][3])
// console.log(arr2[4][4])

// console.log(arr2[0], arr2[arr2.length - 1])

// // Swap the second and second-last element using index
// let temp = arr[1]
// arr[1] = arr[arr.length - 2]
// arr[arr.length - 2] = temp

// let mulArr = [
//     [1, 2, 3,],
//     [4, 5, 6,],
//     [7, 8, 9,]
// ]

// for (let i = 0; i < mulArr.length; i++) {
//     console.log(mulArr[i][0])
// }

// let diagonalSum = 0;
// let n = mulArr.length;

// for (let i = 0; i < n; i++) {
//     diagonalSum += mulArr[i][i];

//     if (i != n - 1 - i) {
//         diagonalSum += mulArr[i][n - 1 - i];
//     }
// }

// function EvenOrOdd(arr) {
//     if (arr.length % 2 == 0) return 'even'
//     else return 'odd'
// }


// let newArray = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
// }

// console.log(newArray);

// console.log(newArray.pop());

// while(newArray.length != 0){
//     newArray.pop();
// }

// newArray.unshift('piyush98')

// function AddFront(...arr) {
//     let idx = 0;
//     for (let i = 0; i < arr.length; i++) {
//         newArray.unshift(arr[idx]);
//         idx++;
//     }

//     return newArray;
// }

// function AddFront(arr, ...values){
//     arr.unshift(...values);
//     return arr
// }

// AddFront(10, 20, 30, 50, 60);

// function removeElemFromStart(arr) {
//     while (arr.length != 2) {
//         arr.shift();
//     }

//     return arr;
// }


// function removeTwoElem(arr) {
//     let mid = arr.length / 2;
//     arr.splice(mid, 2)

//     return arr;
// }

// function addFiveValues(arr, ...elem) {
//     let mid = arr.length / 2;
//     arr.splice(mid, 3, ...elem)

//     return arr;
// }

// let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25];

// function reverseFirstHalf(arr) {
//     let half = Math.floor((arr.length / 2) - 1);
//     for (let i = 0; i < half; i++) {
//         let temp = arr[i];
//         arr[i] = arr[half]
//         arr[half] = temp;
//         half--;
//     }

//     return arr;
// }

// console.log(reverseFirstHalf(numbers))


// let unsorted = [5, 2, 9, 1, 6, 43, 12, 31, 11];

// // console.log(unsorted.sort((a, b) => a - b))

// let newArr = unsorted.slice(1, unsorted.length - 1)


let fruit = ['mango', 'leechi', 'apple', 'banana'];
let fruit2 = ['banana', 'papaya', 'orange', 'custurd-apple', 'apple'];
let fruit3 = ['orange', 'mango', 'dragon-fruit', 'avacado'];

let allFruits = [...fruit, ...fruit2, ...fruit3];
let uniqueFruits = [];
for (let i = 0; i < allFruits.length; i++) {
    if (uniqueFruits.includes(allFruits[i])) {
        continue;
    }
    else {
        uniqueFruits.push(allFruits[i]);
    }
}

console.log(uniqueFruits)



let size = ['small', 'medium', 'large', 'xlarge']
let size2 = ['medium', 'small', 'xlarge', 'large']

// size.forEach(e => {
//     console.log(size2.includes(e));
// })


function checkAllElement(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr2.includes(arr[i]))) {
            return false;
        }
    }
    return true
}

console.log(checkAllElement(size, size2))


let name = ['my', 'name', 'is', 'rahul'];
let number5 = [10, 5, 12, 5, 76, 12, 5]

console.log(name.indexOf('rahul'))

function repeatedNo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            console.log(i)
        }
    }
}

repeatedNo(number5);


console.log(name.join(' '))

for(let i = 0; i<number5.length; i += 2){
    console.log(number5[i])
}

let char = ['a', 'c', 'w', 'q', 'u', 'a', 'x', 'i'];
let vowel = 'aeiou'
let count =0;
for(let c of char){
    if(vowel.includes(c)){
        count++;
    }
}

console.log('The no of vowel present in the char array is',count);


let dogs = [1, 2, 4, 6, 7];

let cats = [...dogs];

cats.push(10)
console.log(dogs, cats)
