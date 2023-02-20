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

// 1.Total accounts sum
const accounts = [account1, account2, account3, account4];
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

//2. Find No.of values greater than and equal to 1000

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// OR

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    mov >= 1000 ? ++acc : acc;
  }, 0);
console.log(numDeposits1000);

let a = 10;
console.log(a++);
console.log(a);

//3. Create a new object
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, mov) => {
      //   mov > 0 ? (sums.deposits += mov) : (sums.withdrawls += mov);

      // OR
      sums[mov > 0 ? 'deposits' : 'withdrawls'] += mov;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(sums);
const { deposits, withdrawls } = sums;
console.log(deposits, withdrawls);

// 4.
// this is a nice title --> This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title BUT not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
