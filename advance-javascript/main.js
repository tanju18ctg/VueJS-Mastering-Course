// pre-record practice

// let tarek = {
//   color: {
//     sense: "thing",
//     distance: "first",
//   },
//   height: 5.7,
//   weight: 78,
//   eduction: "BSC",
// };

// let city = ["dhaka", "chattogram", "coxbazar", "feni"];

// var i = 0;
// for (i; i < city.length; i++) {
//   document.write(city[i] + "<br/>");
// }

// live class practice mastering js

// array function

const city = (thana, upazila) => {
  return thana + upazila;
};

// const add = (a, b) => a + b;

// console.log(add(9, 7));

// console.log(city(700,300));

// mapping

const num = [1, 2, 3, 4, 5];
let sqr = num.map((e) => e + e);
// console.log(sqr);

const newNum = [...num, 6, 7, 8];

// console.log(newNum);


//fetch Data with third api

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );

//     if (!response.ok) {
//       throw new Error("Something Went Wrong");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Fatal Error", error);
//   }
// }

// fetchData();

