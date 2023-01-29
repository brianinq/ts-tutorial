class KeyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}
let pair = new KeyValuePair<string, string>("Hello", "World");

function wrapInArray<T>(val: T) {
  return [val];
}

let num = wrapInArray(45);
let h = wrapInArray("fhhf");

//type mapping

interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

//found in typwscript utility types
