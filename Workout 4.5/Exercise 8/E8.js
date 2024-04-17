function Main() {
    const Bank = {
        accountId: 1,
        accountName: "Paolo",
        accountType: "Savings",
        balance: 2000,
        deposit: function(amount) {
            return this.balance + amount;
        },
        withdraw: function(amount) {
            if ((this.balance - amount) > 0) {
                return this.balance -= amount;
            }
            else{
                console.log("no money sorrry");
            }
        },
        transfer: function(amount, toAccount) {
            // I really don't know how to do this with so little data
            this.balance = this.balance - amount;
            toAccount.balance += amount;
        },
        string: function () {
            let str = this.accountId.toString();
            let result = this.accountName.concat(" ", str);
            console.log(result);
        },
        interest: function(amount, percentage, years, interestRate) {
            let interestEasy = amount * (Math.pow((1 + percentage/100), years));
            console.log(interestEasy - amount);
        }
    }

    console.log(Bank);
    console.log(Bank.deposit(200));
    console.log(Bank.withdraw(600));
    Bank.transfer(200, 54);
    Bank.string()
    Bank.interest(500, 20, 3);
}

Main()