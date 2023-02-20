/*
Reduce :- reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
[3,1,2,4,5];
Reduce : acc+current;
acc=15;
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator =>SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return (acc += cur);
}, 100);
console.log(balance);

// or (using arrow function)

const balanceAbsSum = movements.reduce(
  (acc, cur) => (acc += Math.abs(cur)),
  100 //accumulator
);
console.log(balanceAbsSum);

// MAXIMUM VALUE
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maxValue);
