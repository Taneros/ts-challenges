// Literal type assignment to a broader type
const one: '1' = '1';        // 'one' has literal type '1' (only the string '1' is allowed)
const str: string = one;      // 'str' is a string (can be any string), assigned from 'one'

const three: '3' = str


const isTrue: true = true;
const boolCommon: boolean = isTrue;

const isFalse: false = boolCommon



// Number literal type assignment
const oneNum: 1 = 1;         // 'oneNum' has literal type 1 (only the number 1 is allowed)
const num: number = oneNum;  // 'num' is a number (can be any number), assigned from 'oneNum'

const number: 2 = num


// Boolean literal type assignment
const trueBool: true = true; // 'trueBool' has literal type true (only 'true' is allowed)
const bool: boolean = trueBool; // 'bool' is a boolean (can be true/false), assigned from 'trueBool'

// Object type assignment
const obj = {
    value: '1'               // 'obj' is inferred as { value: string }
};
const allObjects: object = obj; // 'allObjects' is of type 'object' (any object), assigned from 'obj'

export {}