// Why use getters and setters do look for a property?
/* 
	When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
	Makes adding validation simple when doing a set.
	Encapsulates the internal representation.
	Easy to add logging and error handling when getting and setting.
	You can lazy load your object's properties, let's say getting it from a server.
*/ 

/* Bad implementation */
function makeBankAccount(){
	// ...
	return {
		balance: 0
		// ...
	};
}	

const account = makeBankAccount();
account.balance = 100;

/* Good implementation */
function makeBankAccount(){
	// This one is private
	let balance = 0;
	
	// a "getter", made public via the returned object below
	function getBalance(){
		return balance;
	}
	
	// a "setter", made public via the returnet object below
	function setBalance(amount){
		balance = amount;
	}
	
	return {
		//...
		getBalance,
		setBalance
	}
}

const account = makeBankAccount();
account.setBalance(100);

