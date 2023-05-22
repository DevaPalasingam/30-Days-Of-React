/*Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties.
And it has totalIncome, totalExpense, addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/
const personAccount = {
  firstName: "Bob",
  lastName: "Robert",
  incomes: [1, 1, 3, 4, 5],
  expenses: [2, 4, 5, 6, 2],
  totalIncome: function () {
    let result = this.incomes.reduce((a, b) => {
      return a + b;
    }, 0);
    return result;
  },
  totalExpenses: function () {
    let result = this.expenses.reduce((a, b) => {
      return a + b;
    }, 0);
    return result;
  },
  addIncome: function (income) {
    this.incomes.push(income);
  },
  addExpense: function (expense) {
    this.expenses.push(expense);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses();
  },
};

// ----------------------------------------------------------------------------

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

/* Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
*/
function signUp(userInfo) {
  if (userInfo.hasOwnProperty("username")) {
    console.log(userInfo.username);
    if (users.some((e) => e.username === userInfo.username)) {
      return "Sorry you already have an account";
    } else {
      users.push(userInfo);
      return "New User Added";
    }
  } else {
    return "Invalid Data";
  }
}
// b. Create a function called signIn which allows user to sign in to the application
function signIn(userName) {
  const i = users.findIndex((e) => e.username === userName);
  if (i > -1) {
    users[i].isLoggedIn = true;
  }
}

// ---------------------------------------------------------------------------------

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product 
b. Create a function called averageRating which calculate the average rating of a product
*/
function rateProduct(rateObj, productName) {
  if (rateObj.hasOwnProperty("userId") && rateObj.hasOwnProperty("rate")) {
    const i = products.findIndex((e) => e.name === productName);
    if (i > -1) {
      products[i].ratings.push(rateObj);
    } else {
      return "Product not found";
    }
  } else return "Invalid rating input";
}
const average = (array) => array.reduce((a, b) => a + b) / array.length;
function averageRating(productName) {
  const i = products.findIndex((e) => e.name === productName);
  if (i > -1) {
    if (products[i].ratings && products[i].ratings.length > 0) {
      console.log("Finding average");
    } else return "No ratings found";
  } else return "Product not found";
}
