// // global scope
// var need =0;

// {
//      console.log(need);
// }
//   console.log(need);
//    function f1() {
//     // function scope
//       let need2=9;
//      console.log(need2);

//    }

//         // console.log(need2);
//     f1();

// const person = {
//     a:"hello",
//     b:"goodbye",
// };
// // console.log(person);
//  console.log( person.a);

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

//  console.log(person.getFullName());
//  console.log(person.skills);

// 9. Higher Order Function
// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

//  function need( a ) {
//      return a*a;

//  }

//    function  need2(need,b) {
//       return need(3)*b;

//    }
//     console.log( need2(need,2));

//  10. Destructuring and Spreading

// const numbers = [1, 2, 3];
// const countries = ["Finland", "Sweden",
//  "Norway"];

//   for (const i of countries) {
//     console.log(i);

//   }

//   const fullStack = [
//     ["HTML", "CSS", "JS", "React"],
//     ["Node", "Express", "MongoDB"],
//   ];

//   const [frontEnd, backEnd] = fullStack;
//   console.log(frontEnd, backEnd);
// Skipping an Item during destructuring

// During destructuring if we are not interested in every item, we can omit a certain item by putting a comma at that index. Let's get only Finland, Iceland, and Denmark from the array. See the example below for more clarity:

// const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
// const [fin, , ice, , den] = countries
// console.log(fin, ice, den) // Finland, Iceland, Denmark

//  const need = [ 1,2,3,4,5,6];
//   const [one,two,,,five,six]=need;
//    console.log(one,two,five,six);

// spreading
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [num1, num2, num3, ...rest] = nums;

//  const lawraa=['lawro' , 'lawre'  , 'de', 'lasssan'];
//   const slangs = ['tohar', 'maika', 'boomaar', 'mein', ...lawraa];
//    console.log(slangs);

// destructuring
// const props = {
//   user:{
//     firstName:'Asabeneh',
//     lastName:'Yetayeh',
//     age:250
//   },
//   post:{
//     title:'Destructuring and Spread',
//     subtitle:'ES6',
//     year:2020
// },
// skills:['JS', 'React', 'Redux', 'Node', 'Python']

// }

//  const {user , post , skills}= props;
//   console.log(user);

// itreating with for loop and destructuring
// const languages = [
//   { lang: "English", count: 91 },
//   { lang: "French", count: 45 },
//   { lang: "Arabic", count: 25 },
//   { lang: "Spanish", count: 24 },
//   { lang: "Russian", count: 9 },
//   { lang: "Portuguese", count: 9 },
//   { lang: "Dutch", count: 8 },
//   { lang: "German", count: 7 },
//   { lang: "Chinese", count: 5 },
//   { lang: "Swahili", count: 4 },
//   { lang: "Serbian", count: 4 },
// ];

//  for(const i of languages)
//  {
//       console.log(i.lang);
//     console.log(i.count);

//  }
//  for( const { lang, count } of languages)
//  {
//      console.log(lang,count);
//  }

// console.log("B" - "B");
// NaN;
// console.log("B" + "B");
// BB;
// console.log("2" - 2);
// 0;
// console.log("2" - "2");
// 0;
// console.log("2" + "2");
// 22;

// Sure! Here's a short explanation for each of the statements:

// 1. console.log("B" - "B");
//    This expression subtracts the string "B" from the string "B". Since the subtraction operator is not defined for strings, JavaScript tries to convert them to numbers. However, both "B" strings cannot be converted to valid numbers, resulting in `NaN` (Not a Number).

// 2. console.log("B" + "B");
//    This expression uses the plus operator to concatenate the string "B" with the string "B". Since both operands are strings, JavaScript performs string concatenation. The result is the string "BB" because the two "B" strings are concatenated together.

// 3. console.log("2" - 2);
//    Here, the string "2" is subtracted from the number 2. JavaScript automatically converts the string "2" to the number 2 and performs the subtraction. The result is 0 because 2 minus 2 equals 0.

// 4. console.log("2" - "2");
//    This expression subtracts the string "2" from the string "2". Both operands are strings, but they represent valid numbers. JavaScript converts both strings to numbers and performs the subtraction. Again, the result is 0 because 2 minus 2 equals 0.

// 5. console.log("2" + "2");
//    Similar to the previous explanation, this expression uses the plus operator for string concatenation. The result is the string "22" because both "2" strings are concatenated together.