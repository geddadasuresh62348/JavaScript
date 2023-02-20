const arr = [1, 2, 3, 4, 5, 6];

// On this array we cannot apply array methods
const arr1 = new Array([1, 2, 3, 4, 5, 6]);
const arr1Map = arr1.map(num => num + 10);
console.log(arr1Map);

const a = new Array(10); //This creates empty array of 4 values
console.log(a); //[empty × 4]

console.log(a.map(() => 30)); //[empty × 4]

//----1.fill Method
// fill(value,startIndex,endIndex)
// a.fill(1);
a.fill(1, 3, 5);
arr.fill(34, 3, 4);

console.log(a);
console.log(arr);

// ----2.Array.from
const x = Array.from({ length: 7 }, () => 10);
console.log(x); //[10, 10, 10, 10, 10, 10, 10]

const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y); //[1, 2, 3, 4, 5, 6, 7]

const diceRoll = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(diceRoll);
