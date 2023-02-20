'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// ELEMENTS
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//-------1.movements---------
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
            <div class="movements__type movements__type--${movType}">${
      i + 1
    } ${movType}</div>
  
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

//----------2.Updating Current balance--------------
const calPrintBalance = function (acc) {
  acc.currentBalance = acc.movements.reduce((acc, cur) => (acc += cur));
  labelBalance.textContent = `${acc.currentBalance} €`;
  console.log('account : ', acc);
};
// calPrintBalance(account1.movements);

// ----------3.UPDATING SUMMARY---------------
const checkDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outs = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outs)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .filter((mov, i, arr) => {
      console.log(arr);
      return mov >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// checkDisplaySummary(account1.movements);
//------------computing usernames------

/*const user = 'Steven Thomas Williams';
const userName = function (user) {
  const arr = user.split(' ');
  let str = '';
  for (const i of arr) {
    str += i[0].toLowerCase();
  }
  console.log(str);
};
userName('Steven Thomas Williams');
*/

// or

const user = 'Steven Thomas Williams';

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// const accUsers = accounts.map(acc => createUserNames(acc.owner));
// console.log(accUsers);

console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calPrintBalance(acc);
  // Display summary
  checkDisplaySummary(acc);
};
//----------EVENT HANDLERS------------
let currentAccount;
let valid = true;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login pin', typeof inputLoginPin.value);
    // console.log('login pin', typeof inputLoginPin.value);
    // Display UI and welcome message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome ${currentAccount.owner.slice(
      0,
      currentAccount.owner.indexOf(' ')
    )} Good Morning `;
    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = ' ';
    inputLoginPin.blur();

    // updating the ui
    updateUI(currentAccount);
  }
});
// ------btn transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(receiverAcc, amount);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.currentBalance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// ---------btn loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hello');
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // update the UI
    updateUI(currentAccount);

    // clear the input fields
    inputLoanAmount.value = '';
  }
});

// ---------btn close
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('Hello');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log('index no : ', index);
    // Delete the account
    accounts.splice(index, index + 1);

    // Hide UI
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
});

// ---------btn Sort
let sortedState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // if (!sortedState) {
  //   displayMovements(currentAccount.movements, sortedState);
  //   sortedState = !sortedState;
  // } else {
  //   displayMovements(currentAccount.movements, sortedState);
  //   sortedState = !sortedState;
  // }

  //  or

  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});

// Creating array from DOM elements movements
labelBalance.addEventListener('click', function () {
  const movementEl = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementEl);
  //  or we can also achieve this by using spread operator
  const movementEl1 = [...document.querySelectorAll('.movements__value')];
  console.log(movementEl1);
});
