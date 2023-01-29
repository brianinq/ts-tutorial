type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Hello world",
  retire: (date: Date) => {
    console.log(date);
  },
};

//literals take specific or exact values

type grade = "A" | "B" | "C" | "D" | "E";

// optional chaining

type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

const customer1 = getCustomer(1);
console.log(customer1?.birthday);
console.log(customer1?.birthday?.getFullYear());

//nullish coallesing
let speed: number | null = null;
let ride = speed ?? 30;

// type assertion
// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById("phone") ;
