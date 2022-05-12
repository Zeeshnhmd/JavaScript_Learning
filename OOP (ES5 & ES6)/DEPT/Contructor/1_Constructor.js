function BankAccount(customerName, balance = 0) {
	this.customerName = customerName;
	this.accountNumber = Date.now();
	this.balance = balance;
	this.getSummary = () => {
		return `my name is ${this.customerName} account number = ${this.accountNumber} and balance is ${this.balance}`;
	};
	this.deposit = function (amount) {
		this.balance += amount;
	};
	this.withdraw = (amount) => {
		this.balance -= amount;
	};
}

const zeeshanAccount = new BankAccount('Zeeshan Ahmad', 1000);
zeeshanAccount.deposit(3000);
zeeshanAccount.withdraw(3000);
const JohnAccount = new BankAccount('John Doe');
JohnAccount.deposit(2000);

console.log(zeeshanAccount.getSummary());
console.log(JohnAccount);

// create account DOM manipulation
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const account = new BankAccount(customerName.value, +balance.value);
	accounts.push(account);
	console.log(accounts);
});

// deposite DOM Manipulation
const depositeForm = document.querySelector('#depositeForm');
const accountno = document.querySelector('#accountno');
const amount = document.querySelector('#amount');

depositeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// finding the account number for the accounts array
	const account = accounts.find(
		(account) => account.accountNumber === +accountno.value
	);
	account.deposit(+amount.value);
	console.log(accounts);
});
