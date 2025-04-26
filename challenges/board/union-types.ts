// Union Types (|) — "this or that"

type A = { name: string };
type B = { age: number };

type AorB = A | B;


function printInfo(input: AorB) {
  if ('name' in input) {
    console.log(input.name);
  }
  if ('age' in input) {
    console.log(input.age);
  }
}

 
/**
  *The value passed to printInfo can be either type A or type B.
But TypeScript will enforce that it has at least one of those shapes — and you’ll need type guards ('prop' in obj) to access properties safely.
 **/