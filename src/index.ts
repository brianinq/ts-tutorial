let age: number = 45;

if (age < 50) age + 5;
const numbers: number[] = [1, 2, 3, 4, 5];
let user: [number, string] = [26, "Brian"];

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let mySize: Size = Size.Medium;
console.log(mySize);

function calculate(income: number): number {
  if (income < 1000) return income * 1.3;
  return income * 1.3;
}
console.log(calculate(12333));

// type Employee = {
//   readonly id: number;
//   name: string;
//   fax?: string;
//   retire: (date: Date) => void;
// };

const employee: Employee = {
  id: 1,
  name: "Fav employee",
  retire: (date: Date) => console.log(date),
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize(): void;
};

type UIWidget = Draggable & Resizable;

let textArea: UIWidget = {
  resize() {},
  drag() {},
};

//literal types

type Metric = "inch" | "cm";
