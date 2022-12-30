class Account {
    min_Bal = 500;
    acc_Bal;
    open_Account() { }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal() { }
    withdrawl_Amount() { }
    close_Account() { }
}

let a1 = new Account()
console.log(a1)
a1.open_Account();
a1.deposit_Amount(5000)

let a2 = new Account()
console.log(a2)
a2.open_Account()
a2.deposit_Amount(49999)

