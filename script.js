//--------------------(1)odd numbers in array(anonymous function)-----------------------
const arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumber = function () {
  let output = [];
  for (let i = 0; i < arrayValues.length; i++) {
    if (arrayValues[i] % 2 === 1) {
      output.push(arrayValues[i]);
    }
  }
  return output;
};
console.log(oddNumber());

//--------------------(1)odd numbers in array(IIFE)-----------------------
(function () {
  let output = [];
  for (let i = 0; i < arrayValues.length; i++) {
    if (arrayValues[i] % 2 === 1) {
      output.push(arrayValues[i]);
    }
  }
  console.log(output);
})();
//--------------------(2)title caps in array(annonymous function)---------------------------
const arrayString = ["azis", "karthi", "sam", "vasu"];

let stringFunc = function () {
  let titleCapName = [];
  for (i = 0; i < arrayString.length; i++) {
    let outpuString =
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].substring(1);
    titleCapName.push(outpuString);
  }

  console.log(titleCapName);
};
stringFunc();
//--------------------(2)title caps in array(IIFE)---------------------------
(function () {
  let titleCapName = [];
  for (i = 0; i < arrayString.length; i++) {
    let outpuString =
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].substring(1);
    titleCapName.push(outpuString);
  }

  console.log(titleCapName);
})();
//-----------------(3)Sum of number (anonymous)--------------------------------
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumber = function () {
  let sum = 0;
  let pushdata = [];
  for (i = 0; i < arrayNum.length; i++) {
    sum = sum + arrayNum[i];
    pushdata.push(sum);
  }
  console.log(pushdata);
};
arrayNumber();

//-----------------(3)Sum of number (IFEE)--------------------------------
(function () {
  let sum = 0;
  let pushdata = [];
  for (i = 0; i < arrayNum.length; i++) {
    sum = sum + arrayNum[i];
    pushdata.push(sum);
  }
  console.log(pushdata);
})();
//-----------------(4)prime number(anonymous)------------------------------
let findThePrimes = function (num) {
  let nonPrimes = [];
  let primes = [];
  for (let i = 2; i <= num; ++i) {
    if (!nonPrimes[i]) {
      primes.push(i);
      for (let j = i << 1; j <= num; j += i) {
        nonPrimes[j] = true;
      }
    }
  }
  console.log(primes);
};
findThePrimes(50);
//-------------------------------IFEE------------------------------
(function () {
  let num = 50;
  let nonPrimes = [];
  let primes = [];
  for (let i = 2; i <= num; ++i) {
    if (!nonPrimes[i]) {
      primes.push(i);
      for (let j = i << 1; j <= num; j += i) {
        nonPrimes[j] = true;
      }
    }
  }
  console.log(primes);
})();
//----------------------------------meadian numbers(anounymous)------------------------
let findMedians = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);

  const medianIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return [sortedArray[medianIndex - 1], sortedArray[medianIndex]];
  } else {
    return [sortedArray[medianIndex]];
  }
};
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const medians = findMedians(arr1, arr2);
console.log("Medians:", medians);
//-------------------------(ifee)-----------------------------------------
(function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);

  const medianIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return [sortedArray[medianIndex - 1], sortedArray[medianIndex]];
  } else {
    return [sortedArray[medianIndex]];
  }
})();
//-------------------------palindromes(anonymous)-------------------------------------
let getPalindromes = function (arr) {
  const palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].toString();
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
};
//-------------------------palindromes(ifee)-----------------------------------------------
(function (arr) {
  const palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].toString();
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
})();
//--------------------------Programs using the arrow functions------------------------------------------
//---------------------------------odd numbers in an array---------------------------------------
const arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumberArrow = () => {
  let output = [];
  for (let i = 0; i < arrayValue.length; i++) {
    if (arrayValues[i] % 2 === 1) {
      output.push(arrayValues[i]);
    }
  }
  return output;
};
console.log(oddNumberArrow());
//----------------------------------

const arrayString = ["azis", "karthi", "sam", "vasu"];

let stringFun = () => {
  let titleCapName = [];
  for (i = 0; i < arrayString.length; i++) {
    let outpuString =
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].substring(1);
    titleCapName.push(outpuString);
  }

  console.log(titleCapName);
};
stringFun();

//-----------------(3)Sum of number (arrow fuc)--------------------------------
const arrayNu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumbe = () => {
  let sum = 0;
  let pushdata = [];
  for (i = 0; i < arrayNu.length; i++) {
    sum = sum + arrayNum[i];
    pushdata.push(sum);
  }
  console.log(pushdata);
};
arrayNumbe();
//-----------------(4)prime number(arrow func)------------------------------
let findThePrime = (num) => {
  let nonPrimes = [];
  let primes = [];
  for (let i = 2; i <= num; ++i) {
    if (!nonPrimes[i]) {
      primes.push(i);
      for (let j = i << 1; j <= num; j += i) {
        nonPrimes[j] = true;
      }
    }
  }
  console.log(primes);
};
findThePrime(50);

//-------------------------------------(5)palindomes(arrow functions)------------------------------
let getPalindrome = (arr) => {
  const palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].toString();
    const reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      palindrome.push(word);
    }
  }

  return palindrome;
};
