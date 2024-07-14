// Using the square function

var square, cube, squareRoot;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

cube = function (numberTocube) {
  var result;
  result = numberTocube *  numberTocube * numberTocube;
  console.log(numberToCube + " ^ 3 = " + result);
};

squareRoot = function (numberToRoot) {
  var result;
  result = Math.sqrt(numberToRoot);
  console.log("The square root of " + numberToRoot + " is " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

cube(2.5);
cube(8);
cube(-7);
cube(0);

squareRoot(16);
squareRoot(9);
squareRoot(4);
squareRoot(17);
/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */