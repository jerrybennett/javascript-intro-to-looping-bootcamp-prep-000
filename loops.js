function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
  };
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return `done`
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {

  } while (true);
}
