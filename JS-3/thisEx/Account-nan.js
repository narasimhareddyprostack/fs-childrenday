class Account {
    min_Bal = 500;
    //acc_Bal = 0
    open_Account() { }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal;
    }
    withdrawl_Amount() { }
    close_Account() { }
}

let a1 = new Account()
console.log(a1)
a1.open_Account();
a1.deposit_Amount(5000)
console.log(a1)
console.log(a1.get_Bal())


let a2 = new Account()
console.log(a2)
a2.open_Account();
a2.deposit_Amount(49999)
console.log(a2)
console.log(a2.get_Bal())