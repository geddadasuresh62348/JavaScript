'use strict';
// Array Methods
let arr = ['a', 'e', 'i', 'o', 'u'];

//1.slice
console.log(arr.slice(1));
console.log(arr.slice(1, 2));
console.log(arr.slice(-1));
console.log(arr.slice(0, -3));
console.log(arr.slice());
console.log([...arr]);

//2.splice :- It entirely separates the elements from array
console.log(arr.splice(4));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

//3.reverse
arr = ['a', 'e', 'i', 'o', 'u'];
const arr1 = ['z', 'y', 'x', 'w', 'v'];
console.log(arr1.reverse()); // It will mutate the array
console.log(arr1);

//4. Concate
const arr2 = arr.concat(arr1);
console.log(arr2);
// or
console.log([...arr, ...arr1]);

//5.join
const str = arr2.join('+');
console.log(str);
console.log(typeof str);

//6.at
const arrr = [23, 54, 29];
console.log(arrr.at(0));

// to get last element of an array
console.log(arrr[arrr.length - 1]);
console.log(arrr.slice(-1)[0]);
console.log(arrr.at(-1));

// at method on strings
const str1 = 'harinarayana';
console.log(str1.at(-2));

////////////////////////////////////
// Loop over arrays
// for of loop :-
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const i of movements)
// to get index num we use below syntax
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`movement ${i + 1} You deposited ${move}`);
  } else {
    console.log(`movement ${i + 1} You withdrew ${Math.abs(move)}`);
  }
}
console.log('-------forEach--------');
// forEach
// movements.forEach(function (move)
// to get index num we use below syntax
movements.forEach(function (move, i, arr) {
  if (move > 0) {
    console.log(`movement ${i + 1} You deposited ${move}`);
  } else {
    console.log(`movement ${i + 1} You withdrew ${Math.abs(move)}`);
  }
});

// forEach on maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} -->$s{value}`);
});

//forEach on sets
const currenciesUnique = new Set(['USD', 'GBP', 'INR', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// In Sets there are no key values
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} -->${value}`);
});
