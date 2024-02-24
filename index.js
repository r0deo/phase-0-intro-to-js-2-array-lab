// index.js

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array with the original cats and the new cat
  const newCatsArray = [...cats, name];
  return newCatsArray;
}

function prependCat(name) {
  // Create a new array with the new cat followed by the original cats
  const newCatsArray = [name, ...cats];
  return newCatsArray;
}

function removeLastCat() {
  // Create a new array without the last cat
  const newCatsArray = cats.slice(0, -1);
  return newCatsArray;
}

function removeFirstCat() {
  // Create a new array without the first cat
  const newCatsArray = cats.slice(1);
  return newCatsArray;
}

// Exporting the functions if needed
module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
