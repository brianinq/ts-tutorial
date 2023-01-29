type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  { name: "John", age: 34, occupation: "SD" },
  { name: "Ben", age: 45 },
];

type Bird = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};
type Pet = Bird | Fish;
