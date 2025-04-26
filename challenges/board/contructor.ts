type SomeConstructor = new (...args: any[]) => any

// interface SomeConstructor {
//   new (...args: any[]): SomeInstance;
// }

class User {
  constructor(public name: string) {}
}

class AnotherUser {
  constructor() {}
}

// type UserConstructor = new (name: string) => User;

interface UserConstructor {
  new (name: string): User
}

function createUser(ctor: UserConstructor, name: string) {
  return new ctor(name)
}

createUser(AnotherUser, 'me')