// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
const arr1 = [
  [1, [2, 3]],
  [4, [5, 6]],
];
// -------flat method :-It only goes one level deep while flattening the array

const flattenedArr = arr.flat();
console.log(flattenedArr);

console.log(arr1.flat());
console.log(arr1.flat(1));
console.log(arr1.flat(2));

// Using flat Method on accounts array
const accountMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(accountMovements);

// --------flatMap :-
// It combines both flat and map methods
// It can only goes 1 step deeper
const accountMovements2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(accountMovements2);
