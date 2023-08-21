// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// destructive array methods (push, unshift, pop, shift, splice)
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

// non-destructive array methods (slice, concat)
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
  // return [...cats, name];
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
  // return [name, ...cats];
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
  // return cats.slice(0, -1);
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
  // return cats.slice(1);
}
