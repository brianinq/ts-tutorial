class BankAccount {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, balance: number, owner: string) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }
  deposit(amount: number) {
    if (amount < 0) throw new Error("Invalid Amount");
    this._balance += amount;
  }
  //   private calculateTax(){

  //   }
  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1, 0, "Ben");
account.deposit(100);

//parameter properties (parameters assigned to constructor create properties automatically)
class Account {
  constructor(
    public readonly id: number,
    private _balance: number,
    public owner: string
  ) {}
  deposit(amount: number) {
    if (amount < 0) throw new Error("Invalid Amount");
    this._balance += amount;
  }
  //   private calculateTax(){

  //   }
  get balance() {
    return this._balance;
  }
}
