// Intersection Types (&) — "this and that"
//An intersection type means a value must have all properties from all combined types.

type A = { name: string };
type B = { age: number };

type AandB = A & B;


const person: AandB = {
  name: 'Alice',
  age: 30,
};

//The object person must have both name and age properties.

