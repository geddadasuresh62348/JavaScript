/*
filter :- returns a new array containing the array elements that passed a specified test condition. 
[3,1,2,4,5];
Filter :-current>2;
[3,4,5]
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// Normal way -> Another way of doing it
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

// For negative numbers
const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);
