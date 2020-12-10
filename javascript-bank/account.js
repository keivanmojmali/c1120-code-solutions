/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposit = 0;
  var withdraw = 0;


  if(this.transactions.length === 0 ) {
    return 0;
  }


  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === "deposit") {
      deposit += this.transactions[i].amount
    }
    if (this.transactions[i].type === "withdrawal") {
      withdraw += this.transactions[i].amount
    }
  }

  var total = deposit - withdraw;
  return total;
}
