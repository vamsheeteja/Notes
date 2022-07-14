//===== function expression

// let myFunct = function show() {
//     console.log("hey this is a function expression.");
// }

// console.log(myFunct());

//===== Anonymous function

// let myFunct1 = function () {
//     console.log("hey this is a Anonymous function.");
// }

// console.log(myFunct1());

//===== Arrow function

// const calcAge3 = (birthYear) => 2022 - birthYear;
// console.log(`Your age is:${calcAge3(2001)}ys.`);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearUntilRetirement(1966, "john"));
// console.log(yearUntilRetirement(1980, "jonas"));

// =======  EXERCISE 1 SEC #  =============================
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// FUNCTION DECLARATION

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins === avgKoalas) return "Draw game";
//   else if (avgDolphins > 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas}).`;
//   } else if (avgKoalas > 2 * avgDolphins) {
//     return `Koala win (${avgKoalas} vs. ${avgDolphins}).`;
//   } else return "No one wins the game";
// }

// FUNTION EXPRESSION
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins === avgKoalas) return "Draw game";
  else if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win 🏆(${avgDolphins} vs. ${avgKoalas}).`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koala win 🏆(${avgKoalas} vs. ${avgDolphins}).`;
  } else return "No one wins the game 😐";
};

// TEST DATA1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

// TEST DATA2
avgDolphins = calcAverage(85, 54, 41); // overriding the variables...
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

===========================================================
*/

// Arrays.
/*
// LITERAL SYNTAX
const friends = ["banana", "mango", "apple"];
console.log(friends);

// USING CONSTRUCTOR
const years = new Array(2001, 2002, 2003, 2020);

console.log(friends[0]);
console.log(years[0]);
console.log("elements in the friends array:", friends.length);

console.log(friends[friends.length]); // not error it gives undefined.
console.log(friends[friends.length - 1]);

// mutating
friends[2] = "grapes";
console.log(friends);

// only primitive values are immutable
// an array is not a primitive value.

// friends = ["bob", "builder"]; // demo.js:94 Uncaught TypeError: Assignment to constant variable. THIS stops executing further
// =========================================================
*/

/*

// L-40 Basic array methods

const friends = ["banana", "mango", "apple"];

friends.push("grapes"); // add the item to last

friends.unshift("guava"); // add item to the first pos

friends.pop(); // opp of push .. remove the last elem

friends.shift(); // opp of unshift

console.log(friends.indexOf("mango"));
console.log(friends.indexOf("guava"));

// ES6 method
console.log(friends.includes("mango"));
console.log(friends.includes("guava"));

// ======================================================

*/

/*
//=========================================================

// L-41 Exercise Arrays

let calcTip = function (billValue) {
  // the function return tip value
  if (billValue >= 50 && billValue <= 300) return billValue * 0.15;
  else return billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
// ===========================================================

*/

/*
// L-42 Intro to Objects

// In array we can reference the elements by their name. we can refence them by only the order in which they are present. So to solve this problem we have Objects. (key-val pairs)

// object defintion

// object Literal syntax
const bunny = {
  // this obj has 5 properties / keys
  firstName: "vamshee",
  lastName: "teja",
  age: 2022 - 2001,
  job: "computer scientist",
  friends: ["Mango", "Apple", "Banana"],
};

// L-43

// to get the values of props

// dot notation / dot operator
console.log(bunny.job);

// bracket notation
console.log(bunny["job"]);

// benefit of bracket notation
const nameKey = "Name";
console.log(bunny["first" + nameKey]);
console.log(bunny["last" + nameKey]);

// the above would not work if we used with the dot notation

// console.log(bunny.'last' + nameKey); // this not works Uncaught SyntaxError: Unexpected string

// So When we First need to COMPUTE the Property name then we have to use the

// const interestedIn = prompt(
//   "what do you want about bunny? Choose between firstName, lastName, age, or job"
// );

console.log(bunny.interestedIn); // see the difference

console.log(bunny[interestedIn]); // this displays the correct result

// if (bunny[interestedIn]) {
//   console.log(bunny[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

bunny.location = "Hyderabad";
bunny["twitter"] = "@vamsheeteja";

console.log(
  `${bunny.firstName} has ${bunny.friends.length} friends, and his best friend is called ${bunny.friends[0]}`
);
*/

// =====================================================
// const bunny = {
//   // this obj has 5 properties / keys
//   firstName: "vamshee",
//   lastName: "teja",
//   birthYear: 2001,
//   job: "computer scientist",
//   friends: ["Mango", "Apple", "Banana"],
//   hasDriverLicense: true, // boolean value

//   // function value
//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },

//   /*
//   calcAge: function () {
//     // this keyword is equal to the object on which the method is called.
//     // never hardcode the name of the object
//     console.log(this);
//     return 2022 - this.birthYear;
//   },
//   */

//   // simplified code
//   // storing the age in a new property instead of calculating th age again and again
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   // challenge
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he ${
//       this.hasDriverLicense == true ? "has" : "does not have"
//     } a driver's license.`;
//   },
// };

// console.log(bunny.calcAge());
// console.log(bunny["calcAge"]());

// console.log(bunny.getSummary());

// ====================================================

/*
// Exercise on Objects

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(mark.calcBMI(), john.calcBMI());
let obj1, obj2;
if (mark.calcBMI() > john.calcBMI()) {
  obj1 = mark;
  obj2 = john;
} else if (john.calcBMI() > mark.calcBMI()) {
  obj1 = john;
  obj2 = mark;
}
console.log(
  `${obj1.fullName}'s BMI (${obj1.bmi}) is greater than ${obj2.fullName}'s BMI (${obj2.bmi})!'`
);

*/

// ===============================================

// LOOPS

// for (let i = 1; i <= 10; i++) {
//   console.log("lifting weight", i);
// }

const bunnyArray = [
  "vamshee",
  "teja",
  2022 - 2001,
  "computer scientist",
  ["mango", "banana", "grape"],
  true,
];

for (let i = 0; i < bunnyArray.length; i++) {
  console.log(bunnyArray[i], typeof bunnyArray[i]);
}

const birthYears = [2001, 1978, 1966, 2002, 2000];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages[i] = 2022 - birthYears[i];
}
console.log(ages);
