// String type example
const str: string = 'lasdf';
const str2: string = str;  // Assigning str to str2 (both are string type)

// Unknown type example
const value: unknown = 'asdfa' as unknown;  // Type assertion to unknown
const value2: unknown = value;  // Assigning value to value2 (both are unknown type)

export {};

