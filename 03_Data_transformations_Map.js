/*Map :-returns a new array containing the results of applying an operation on all original array elements 
[3,1,2,4,5];
Map :current *2;
[6,2,4,8,10]

filter :- returns a new array containing the array elements that passed a specified test condition. 
[3,1,2,4,5];
Filter :-current>2;
[3,4,5]

Reduce :- reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
[3,1,2,4,5];
Reduce : acc+current;
acc=15;
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementUsd);

// or
// Another way of doing the same
const movementsUsedFor = [];
for (const mov of movements) movementsUsedFor.push(mov * eurToUsd);
console.log(movementsUsedFor);

// some more uses of map:-
const movementsDescr = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1},You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log('movementsDescr : ', movementsDescr);
