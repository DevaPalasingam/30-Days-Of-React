const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// ------------------- Exercises ----------------------

// Find the people who have more than 6 skills in the users object.
for (const person in users) {
  if (users[person].skills.length > 6) {
    console.log(`${person}: ${users[person].skills}`);
  }
}

// Count users having greater than or equal to 50 points from the following object.
let count = 0;
for (const person in users) {
  if (users[person].points >= 50) {
    count++;
  }
}
console.log(`There are ${count} people with 50 or more points`);

// Find people who are MERN stack developer from the users object
for (const person in users) {
  let skills = users[person].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    console.log(`${person} is a MERN stack developer`);
  }
}

// Set your name in the users object without modifying the original users object
const updatedUsers = {
  Ultron: {
    email: "ulton@ultron.com",
    skills: ["AI", "Take over the world"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
Object.assign(updatedUsers, users);
console.log(updatedUsers);

// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));
