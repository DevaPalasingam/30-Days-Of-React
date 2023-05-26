/*
Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
x = (-b + sqrt(b**2 - 4ac))/(2a)
x = (-b - sqrt(b**2 - 4ac))/(2a)
Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
function solveQuadratic(a, b, c) {
  let x1 = (b * -1 + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (b * -1 - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  if (!(x1 && x2)) {
    return "Invalid Input";
  } else if (x1 === x2) {
    return `{${x1}}`;
  } else {
    return `{${x1}, ${x2}}`;
  }
}
