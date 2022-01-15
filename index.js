// #1
let i = 0;
let start = new Date();
function foo() {
  i++;
  if (i < 1000) {
    setImmediate(foo);
  } else {
    let end = new Date();
    console.log("Execution time: ", end - start);
  }
}
foo();

// #2
let i = 0;
let start = new Date();

function foo() {
  i++;
  if (i < 1000) {
    setTimeout(foo, 0);
  } else {
    let end = new Date();
    console.log("Exeuction time: ", end - start);
  }
}

foo();
