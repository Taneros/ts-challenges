/**
Covariance: Applies to function return types. A function returning a more specific type (subtype) can be assigned to a function expecting a more general type (supertype).



Type Hierarchy:

   Animal
     ↑
    Cat

Covariance (Return Types):
Function<Cat> → Function<Animal>

Contravariance (Parameter Types):
Function<Animal> → Function<Cat>
  


**/

class Animal {
  name: string = 'animal'
}

class Cat extends Animal {
  meow() {}
}

type AnimalFactory = () => Animal
type CatFactory = () => Cat

let createAnimal: AnimalFactory
let createCat: CatFactory = () => new Cat()

createAnimal = createCat // ✅ OK

export {}

/**
 * Contravariance: Applies to function parameter types. A function that accepts a more general type (supertype) can be assigned to a function expecting a more specific type (subtype).​
 **/

type AnimalHandler = (a: Animal) => void
type CatHandler = (c: Cat) => void

let handleAnimal: AnimalHandler = (a: Animal) => console.log(a.name)
let handleCat: CatHandler

handleCat = handleAnimal // ✅ OK
handleAnimal = handleCat // ❌ Error

//TODO
/**

Assigning handleCat to handleAnimal is not allowed because handleCat expects a Cat, which is more specific than Animal. If handleAnimal were to be called with an Animal that is not a Cat, it could lead to runtime errors.​

Assigning handleAnimal to handleCat is allowed because handleAnimal can handle any Animal, including Cat. This assignment is safe.​

This behavior ensures type safety by preventing functions from being assigned in ways that could lead to errors when more general types are passed where more specific types are expected.

**/

/**

Key Takeaways

Function parameters are contravariant: When assigning functions, the source function's parameter types must be supertypes of the target function's parameter types.​
Sam Martin
+1
langdev.stackexchange.com
+1

Function return types are covariant: The source function's return type must be a subtype of the target function's return type.​
JSer.dev

This behavior ensures that functions are assigned in a way that maintains type safety, preventing runtime errors due to type mismatches.
  **/
