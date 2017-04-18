function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i > 0) {
      array.push(`I am ${i} strange loops.`)
    }
    else {
      array.push("I am 1 strange loop.")
    }
  }
};

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)
  }
  return "done"
};

function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.lenght > 0 && maybeTrue());
};