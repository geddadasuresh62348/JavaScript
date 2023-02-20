// Sorting arrays :-
// sort method works based on alphabetical order
// It mutates the original array

// Strings
const owners = ['abbas', 'charan', 'srikanth', 'zaheer'];
const sortedArray = owners.sort();
console.log('original array', owners);
console.log('sorted array', sortedArray);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.sort());
// Here sort method converts numbers into strings an sort the array
// return <0,a,b(keep order)
// return >0,b,a(switch order)

// Ascending order
// Ascending order
movements.sort((a, b) => {
  //   if (a > b) {
  //     console.log(a, b);
  //     return 1;
  //   }
  //   if (a < b) {
  //     console.log(a, b);
  //     return -1;
  //   }
  return a - b;
});
console.log('Ascending order', movements);
// Descending order
movements.sort((a, b) => {
  //   if (a > b) {
  //     console.log(a, b);
  //     return -1;
  //   }
  //   if (a < b) {
  //     console.log(a, b);
  //     return 1;
  //   }
  return b - a;
});
console.log('Descending order', movements);
