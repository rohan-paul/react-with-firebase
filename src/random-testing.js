/* Quick way to remove duplicates from Javascript array, with Sets (introuduced in ES6)
Sets are a new object type that allow to create collections of unique values.
Works for arrays containing primitive types: undefined, null, boolean, string and number . (If array contains objects, functions or nested arrays, this will not work)
*/

const arrayWithDuplicates = [1, 1, 2, 3, 5, 5, 1]
const arrayWithoutDuplicates = [...new Set(arrayWithDuplicates)];
console.log(arrayWithoutDuplicates); // Output [1, 2, 3, 5]