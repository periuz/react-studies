// This code demonstrates the use of optional chaining in JavaScript.
// Optional chaining allows you to safely access deeply nested properties without having to check each level for null or undefined.
// If a property is null or undefined, it will return undefined instead of throwing an error.

const user = {
  name: 'Thiago'
};
console.log(user?.name); // Thiago
