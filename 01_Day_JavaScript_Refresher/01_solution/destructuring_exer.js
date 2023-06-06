/*
Create a function called getPersonInfo. 
The getPersonInfo function takes an object parameter. 
The structure of the object and the output of the function is given below. 
Try to use both a regular way and destructuring and compare the cleanness of the code. 
*/
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
/*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. 
  He is an Instructor and Developer. 
  He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. 
  He speaks Amharic, English and a little bit of Suomi(Finnish)
  */
const { firstName, lastName, age, country, job, skills, languages } = person;
const [a, b, c, d, e, f, g, h, i] = skills;
const [lan1, lan2, lan3] = languages;
console.log(
  `${firstName} ${lastName} lives in ${country}. He is ${age} years old. 
He is an ${job}. 
He teaches ${a}, ${b}, ${d}, ${e}, ${f}, ${g}, ${h}, and ${i}. 
He speaks ${lan1}, ${lan2}, and a little ${lan3}`
);
