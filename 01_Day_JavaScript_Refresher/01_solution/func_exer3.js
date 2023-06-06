/*
Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the inputs is the number of characters.
The second input is the number of ids which are supposed to be generated.
*/
function userIdGeneratedByUser() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charNum = prompt("How many characters would you like it to be?");
  let idNum = prompt("How many ids would you like to generate?");
  const idArr = [];

  for (let c = 0; c < idNum; c++) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < charNum; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    idArr.push(result);
  }

  console.log(idArr);
}

// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, num) {
  if (type === "hexa") {
    let hexArr = [];
    for (let i = 0; i < num; i++) {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      hexArr.push("#" + randomColor);
    }
    return hexArr;
  } else if (type === "rgb") {
    let rgbArr = [];
    for (let i = 0; i < num; i++) {
      let o = Math.round,
        r = Math.random,
        s = 255;
      rgbArr.push(
        "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")"
      );
    }
    return rgbArr;
  }
}
