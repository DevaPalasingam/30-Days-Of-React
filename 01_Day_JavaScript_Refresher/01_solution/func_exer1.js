function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

function celcToFaren(degreeInC) {
  // (oC x 9/5) + 32
  return (degreeInC * 9) / 5 + 32;
}

function bmiCalc(weighInKg, heightInM) {
  // bmi = weight in Kg / (height x height) in m2
  /*
  Underweight: BMI is less than 18.5
  Normal weight: BMI is 18.5 to 24.9
  Overweight: BMI is 25 to 29.9
  Obese: BMI is 30 or more
  */
  let bmi = weighInKg / heightInM ** 2;
  if (bmi < 18.5) {
    return bmi + " Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return bmi + " Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return bmi + " Overweight";
  } else return bmi + " Obese";
}

function checkSeason(month) {
  const monthNum = new Date(Date.parse(month + " 1, 2012")).getMonth() + 1;
  if (!monthNum) {
    return "Month not found, but in Texas it is summer";
  }
  if (monthNum >= 3 && monthNum <= 5) {
    return "Spring, but in Texas it is Summer";
  } else if (monthNum >= 6 && monthNum <= 8) {
    return "Summer";
  } else if (monthNum >= 9 && monthNum <= 11) {
    return "Fall, but in Texas it is Summer";
  } else return "Winter, but in Texas it is Summer";
}
