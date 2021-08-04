/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const items = [
  "moving box",
  "tea",
  "cup",
  "trash bag",
  "baggage",
  "umbrella",
  "toys",
  "table",
];

console.log(items);

items.pop();

console.log(items);

items.unshift("table");

const firstLongWord = items.find((item) => {
  return item.length > 5;
});

console.log(firstLongWord);

console.log(items);

items.sort();

console.log(items);

const secondLongWord = items.find((item) => {
  return item.length > 5;
});

console.log(secondLongWord);

const index = items.indexOf(secondLongWord);

items.splice(index, 1);

console.log(items);
