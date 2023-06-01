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

  if (isNaN(x1) && isNaN(x2)) {
    return "Invalid Input";
  } else if (x1 === x2) {
    return `{${x1}}`;
  } else {
    return `{${x1}, ${x2}}`;
  }
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  if (arr.length === 0) {
    console.log("This array is empty");
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const today = new Date(Date.now());
  console.log(
    today.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }) +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes()
  );
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  if (arr.length === 0) {
    return "This array is empty";
  }
  let newArr = [];
  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Declare a function name userIdGenerator. When this function is called it generates seven character id
function userIdGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 7;
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
