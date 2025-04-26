type Duck = {
  quack: () => void;
}

const realDuck = {
  quack: () => console.log('Quack!')
};

const robotDuck = {
  quack: () => console.log('Mechanical quack!')
};

const frog = {
  croak: () => console.log('Croak!')
};

function makeItQuack(duck: Duck) {
  duck.quack();
}

makeItQuack(realDuck);   // ✅ okay
makeItQuack(robotDuck);  // ✅ okay
makeItQuack(frog);       // ❌ Type error — no 'quack' method


// When TypeScript performs type checking using these types, it does so structurally — via duck typing.

type Animal = { name: string };

const dog = { name: 'Rex', breed: 'Labrador' };
const car = { model: 'Tesla' };

function greet(animal: Animal) {
  console.log(`Hello ${animal.name}`);
  console.log(`Hello ${animal.breed}`);
}

greet(dog); // ✅ because dog has `name: string`
greet(car); // ❌ Type error because no 'name' property
