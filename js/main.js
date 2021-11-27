// let season = prompt();

// switch (season) {
//   case "1":
//     console.log("yaz");
//     break;
//   case "2":
//     console.log("yay");
//     break;
//   case "3":
//     console.log("payız");
//     break;
//   case "4":
//     console.log("qış");
//     break;
// }

// let num = prompt();

// for (let i = 1; i <= num; i++) {
//     if(num%i==0){
//         console.log(i);
//     }
// }

// let arr = [1,3,5,15,12,42];
// let arr2 = [1,12,351,3,5,15,12,42];

// function getMax(nums) {
//     let max = nums[0];

//     for (let i = 0; i < nums.length; i++) {
//         if(max<nums[i]){
//             max = nums[i];
//         }
//     }

//     return max;
// }

// console.log(getMax(arr));
// console.log(getMax(arr2));

// function factorial(num) {
//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result*=i;
//     }

//     return result;
// }

// console.log(factorial(prompt()));

// let loanAmount = prompt();
// let loanDuration = prompt();

// let remainder = loanAmount % loanDuration;
// let monthlyPayment = (loanAmount - remainder) / loanDuration;

// for (let i = 1; i < loanDuration; i++) {
//   console.log(i + "ci ay: " + monthlyPayment);
// }
// console.log(loanDuration + "ci ay: " + (monthlyPayment + remainder));

// function sumOfArr() {
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         if (!isNaN(arguments[i]) && arguments[i]%2==0) {
//             result += arguments[i];
//         }
//     }

//     return result;
// }

// console.log(sumOfArr(1,23,45,789,"yeddi",8,200));

// console.log(sum(5,10));

// const getPi = () => 3.14;

// console.log(getPi())

// const sum = (n1, n2) => n1+n2;

// console.log(sum(5,10));

// function sum(n1, n2) {
//     return n1+n2;
// }

// const getNumMF = (num, num2) => num * num2;

// console.log(getNumMF(5, 4));

// const sumOfArr = (arr) => {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i]) && arr[i] % 2 == 0) {
//       result += arr[i];
//     }
//   }

//   return result;
// };

// const getPow = (base, power) => {
//     let res = base;

//     for (let i = 1; i < power; i++) {
//         res*=base;
//     }

//     return res;
// };

// console.log(getPow(prompt(), prompt()));

// let a = 5;

// a = 10;

// let b = a;

// console.log(a);
// console.log(b);

// let arr1 = [1,2,3,4];

// let arr2 = arr1;

// console.log(arr2);

// customMap(arr1, 3);

// console.log(arr2);

// function customMap(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]+=num;

//     }
// }

// let stu1 = {
//     name:"Mamed",
//     age:12
// }

// let stu2 = stu1;

// stu2.age = 20;

// console.log(stu1.age);

// function SumEven() {
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         if (!isNaN(arguments[i])&&arguments[i]%2 == 0) {
//             result += arguments[i];
//         }
//     }
//     return result;
// }
// function SumOdd() {
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         if (!isNaN(arguments[i])&&arguments[i]%2 != 0) {
//             result += arguments[i];
//         }
//     }
//     return result;
// }

// console.log(SumEven(1,2,3,4,5,"bes"));
// console.log(SumOdd(1,2,3,4,5,"bes"));

// function SumByCriteria(arr, criteriaFunc) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i]) && criteriaFunc(arr[i])) {
//       result += arr[i];
//     }
//   }
//   return result;
// }

// console.log(SumByCriteria([1, 2, 3, 4, 5], isEven));
// console.log(SumByCriteria([1, 2, 3, 4, 5], isOdd));
// console.log(SumByCriteria([1, 2, 3, 4, 5]));

// function isEven(num) {
//   return num % 2 == 0;
// }

// function isOdd(num) {
//   return num % 2 != 0;
// }

// let p1 = {
//     name:"Mamed",
//     age:12,
//     isMarried: false
// }

// let p2 = {
//     name:"Isa",
//     age:32,
//     isMarried: true
// }

// let p3 = {
//     name:"Rasim",
//     age:21,
//     isMarried: false
// }

// let people = [p1,p2,p3];

// function isMarried(person) {
//     return person.isMarried;
// }

// function isAdult(person) {
//     return person.age>18;
// }

// function concatNamesByCriteria(people, critFunc) {
//     let result = "";

//     for (let i = 0; i < people.length; i++) {
//         if(critFunc(people[i])){
//             result += people[i].name +", ";
//         }
//     }
//     return result;
// }

// console.log(concatNamesByCriteria(people,isAdult));
// console.log(concatNamesByCriteria(people,isMarried));
// console.log(concatNamesByCriteria(people,x=>true));
// console.log(concatNamesByCriteria(people,x=>x.name.length == 5));

// arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   console.log(item);
// });

// arr.forEach(logIfEven);

// function logIfEven(value, index, array) {
//   if (isEven(value)) {
//     console.log(index + " " + value);
//   }
// }

// arr.forEach((value, index, array) => {
//   array[index] = value + 5;
// });

// console.log(arr);

// let newArr = arr.map((item) => {
//   return item % 2 == 0;
// });

// console.log(newArr);

// let evenItems = arr.filter((item) => {
//   return item % 2 == 0;
// });

// console.log(evenItems);

// let sum = arr.reduce((total, value) => {
//   return total + value;
// }, 0);

// console.log(sum);


// let result = arr.every(item=>{
//     return item > 0;
// })

// console.log(result);

// let result = arr.some(item=>{
//     return item % 2 == 0;
// })

// console.log(result);


// console.log(arr.includes(13))


// const numbers = [4, 19, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value) {
//   return value > 18;
// }

// console.log(first);


// console.log(Array.from("142123"))


// console.log(arr.toString());

// console.log(arr.join(" | "))


// console.log(arr);

// arr.pop();
// arr.push(6);

// arr.shift();
// arr.unshift(0);

// delete arr[0];

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 3, "Lemon", "Kiwi");
// fruits.splice(1,0,"Lemon")

// let newFruits = fruits.slice(1,3);
// console.log(newFruits);


// const nums = [1,2,10,5,12,2,51,21];
// nums.sort(function(a, b){return a - b});

// console.log(nums)