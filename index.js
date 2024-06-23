// //first stage
// // prompt('please enter your name')
// // alert('hello world');

// console.log('hello javascript');
// console.log('hello syed azhar');
// // document.write('hello azhar!');

// // variables -> varaiables are containers for storing data

// age = 21
// console.log(age)

// name = "syed azhar"
// // document.write(name)

// a = 20;
// b = 20;
// console.log(a+b);

// _first_name = "syed";
// last_name = "azhar";
// // document.write(_first_name);
// // document.write(last_name)

// //boolean data type
// present = "true";
// absent = "false"
// console.log(present)
// console.log(absent)

// // javascript keywords

// let Name = "hello";// varaiable can'nt ve re-declared but can be updateed. A block scope variable
// Name = "hi"
// console.log(Name)

// const Name1 = "hello";//varaiable cannot be re-declared or updated. A block scope variable
// console.log(Name1)

// var Name2 = "hello";// variable can be re-declared & updated. A golbal scope variable.
// console.log(Name2)

// // primitive datatypes
// // datatypes in javascript string number boolean undefined,null,bigint,symbol

// let num = 21
// console.log(typeof(num))// to check which datatyped is used

// let naam = "azhar"
// console.log(typeof(naam))// to check which datatyped is used

// let khali = null
// console.log(typeof(khali))// to check which datatyped is used

// let followkiyakinahi = true
// console.log(typeof(followkiyakinahi))// to check which datatyped is used

// let badanumber = BigInt("2121212121212121212121212121");
// console.log(typeof(badanumber))// to check which datatyped is used

// let khalidibba;
// console.log(typeof(khalidibba))// to check which datatyped is used

// let kyare =Symbol('$');
// console.log(typeof(kyare))// to check which datatyped is used

// //non primitive data types 
// // arrays and arrayofobjects

// let arr = ["hi","by","ciao"];
// console.log(arr)
// console.log(arr[0]) // to get the single value of array

// let student ={
//   naem:"azhar",
//   age:20,
//   passed:true,
//   married:"unmarried"
// }

// console.log(student)
// console.log(student["age"])// to get the single value from the array of object
// console.log(student.married)// to get the single value from the array of object
// student["age"] = student["age"]+1 // to change the values of object
// console.log(student["age"])

// // let's practice 
// //q.1 create a const object called product to store information shown in the picture.

// const product = {
//   pname:"Parker Jotter Standard Pen",
//   pcolor:"Black&Silver",
//   ratings:4.5,
//   discount:"5%off",
//   price:285-(285*5/100)
// }
// console.log(product)

// //q.2 create a const object called profile to store information shown in the picture.

// const profile ={
//   pname:"Syed Azhar",
//   designation:"Java Full Stack Developer",
//   qualification:"BCom(C/A)",
//   age:"21",
//   pnumber:"8790416522"
// }
// console.log(profile)
// console.log(product["pname"])
// console.log(profile.designation)
// // document.write(profile.age,profile.pname)

// // javascript comments single line comment and multiline comment

// // single line comment
// /*multiline comment*/

// // operators in javascript arithmetic operatores + - * / %

// let intA = 20
// let intB = 10
// let add = intA+intB
// console.log(add)

// //subtraction
// add = intA-intB
// console.log(add)

// //multiplication

// let multi = intA*intB
// console.log(multi)

// //division
// let divi = intA/intB
// console.log(divi)

// // modulus
// let modulus = intA%intB
// console.log(modulus)

// // unary operator  increment and decrement

// let increment = 10
// console.log(increment++)// post increment
// console.log(increment)

// let decrement = 10
// console.log(decrement--)// post decrement
// console.log(decrement)

// let preincrement = 10
// console.log(++preincrement)// pre increment
// console.log(preincrement)

// let predecrement = 10
// console.log(--predecrement)// pre decrement
// console.log(predecrement)

// // Example usage:
// let yourage = 20;
// let mode = "white";
// let color;
// if (yourage>18) {
//     console.log("You are old enough to vote!");
// } else {
//     console.log("You are not old enough to vote yet.");
// }

// if(mode==="dark"){
//   color="red";
// }

// if(mode==="white"){
//   color="black";
// }

// console.log(color)

// if(mode==="dark"){
//    color="red";
// }else{
//      color="black"
// }

// console.log(color);

// let even = 10
// if(even%2===0){
//   console.log("is even")
// }else{
//   console.log("is odd")
// }

// function checkVotingAge(age) {
//   if (age >= 18) {
//       return "You are old enough to vote!";
//   } else if (age >= 16) {
//       return "You are almost old enough to vote.";
//   } else {
//       return "You are not old enough to vote yet.";
//   }
// }


// let age1 = 20;
// let age2 = 16;
// let age3 = 13;

// console.log("Person 1:", checkVotingAge(age1)); // Person 1: You are old enough to vote!
// console.log("Person 2:", checkVotingAge(age2)); // Person 2: You are almost old enough to vote.
// console.log("Person 3:", checkVotingAge(age3)); // Person 3: You are not old enough to vote yet.


// //ternary operator

// let studentage = 21;
// let output= (studentage>=18)?"adult":"not adult";
// console.log(output)
// //simple calculator

// function calculator(operator,num1,num2){

//   let result;

//   switch(operator){
//     case '+': 
//     result = num1+num2;
//     break;

//     case '-': 
//     result = num1-num2;
//     break;

//     case '*': 
//     result = num1*num2;
//     break;

//     case '/': 
//     result = num1/num2;
//     break;

//     case '%': 
//     result = num1%num2;
//     break;
//   }
//   return result;

// }

// console.log("Addition:", calculator('+',10,5));
// console.log("Subtraction:", calculator('-', 10, 5));
// console.log("Multiplication:", calculator('*', 10, 5));
// console.log("Division:", calculator('/', 10, 5));
// console.log("modulus Operator:", calculator('%', 10, 5)); 

// // practice question
// // Q.1 get user to input a number using prompt("enter a number:")check if the number is a multiple of 5 or not.

// // let enterNumber = prompt("Enter a number");

// // if(enterNumber%5===0){
// //   alert("Entered Number is Multiple of 5 :"+enterNumber);
// // }else{
// //   alert("Entered Number is not a multiple of 5 :"+enterNumber);
// // }

// // loops in java script

// for(let i =0; i<=10; i++){
//   console.log(i*2);
// }

// for(let i =0; i<=10; i++){
//   if(i%2===0){
//      console.log(i);
//   }
// }
// let counter =0;
// for(i=0; i<=9; i++){
//   if(9%i===0){
//       counter++;
//   }

//   }
//   if(counter===2){
//     console.log("is prime number"+counter)
//   }else{
//     console.log("not a prime number"+counter)
//   }

//   // while loop
//   let j = 0;
// let count1 = 0;

// while (j <= 7) {
//   j++;
//   if (7 % j === 0) {
//     count1++;
//   }
// }

// if (count1 === 2) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

// // do while loop
// let k = 0;
// let count2 = 0;

// do {
//   k++;
//   if (9 % k === 0) {
//     count1++;
//   }
// } while (k <= 9);

// if (count1 === 2) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

// // for of loop for arrays and strings to iterate
// let myname = "azhar";
// let size=0;
// for(let l of myname){
//      console.log(l)
//      size++
// }
// console.log(size)

// // for in loop used iterate over object

// let imstudent ={
//   name:"azhar",
//   id:"101",
//   graduation:"bcom computer application",
//   passed:true
// }

// for (const key in imstudent) {
//   console.log("key = :",key,"value= :",imstudent[key])// this will print all keys of object values
// }

// //practice
// //Q.1 create a game where you start with any random game number.ask the user to keep guessing the game number until the user enters correct value.

// // let gameendnum = 10;

// // while (true) {
// //   let guessTheNumber = prompt("Guess the number to end the game");
// //   guessednum = parseInt(guessTheNumber); // Convert user input to a number
  
// //   if (guessednum === gameendnum) {
// //     alert("Congratulations! You guessed the right number. The game is ended.");
// //     break;
// //   }
// // }

// // string in javascript string is a sequence of character used to present text

// let str =" syed  azhar "
// let str1 = 'syed azhar'
// console.log(str)
// console.log(str1)
// console.log(str.length)
// console.log(str.indexOf('z'))
// console.log(str.concat(str1))
// console.log(str[0])
// console.log(str.substring(0,2))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())// remove whitespaces from left and right
// console.log(str.slice(0,5))// return small part from the full string
// console.log(str.split())
// console.log(str.charAt(1))

// //practice 
// //q.1 prompt the user to enter theit full name generate a username for them based on the input.
// //start username with @ followed by theri full name and ending with fullname lenght.

// // let username = prompt("please enter your name");

// // if(username!=null){
// //   let createusername = '@'+username+'13';
// //   console.log(createusername)
// // }else{
// //   console.log("name must not be null")
// // }


// //arrays in javascript

// let studentnames =["azhar","syed","hello","hi"];
// console.log(studentnames);

// for(let el of studentnames ){
//   console.log(el);
// }

// console.log("*****************")

// studentnames.forEach(studentname => {
//   console.log(studentname)
// });

// for(let ss=0; ss<=studentnames.length; ss++){
//   console.log(studentnames[ss])
// }

// let studentdetails = {
//   name:"azhar",
//   gender:"male",
//   age:"21",
//   designation:"software developer"
// }
// for(let key in studentdetails){
//   console.log("keys :",key , "values :", studentdetails[key].toUpperCase())
// }

// // lets practice
// //Q.1 for a given array with marks of students ->[85,97,44,37,79,60]

// let marksarray = [85,97,44,37,79,60]

// let avg=0;

// for(let m =0 ; m<marksarray.length; m++){
//   avg= avg+marksarray[m]
// }
// let resultavg= avg/marksarray.length
// console.log(resultavg)

// let originalMarks = [85, 97, 44, 37, 79, 60];

// // Copy the original array
// let previousMarks = originalMarks.slice();

// // Apply 10% discount to current marks array
// for (let n = 0; n < originalMarks.length; n++) {
//   originalMarks[n] = originalMarks[n] * 0.9; // Applying 10% discount
// }

// console.log("Previous marks array:", previousMarks);
// console.log("Current marks array:", originalMarks);

// console.log("**************")
// //array methods

// let fooditems = ["potato","apple","litchi","tomato"]
// console.log(fooditems)
// fooditems.push("chips","burger","paneer")//used to add items at the end of the array
// console.log(fooditems)

// console.log("**************")
// fooditems.pop()// used to delete items form the end of the array
// console.log(fooditems)

// console.log("**************")
// fooditems.toString()
// console.log(fooditems)

// console.log("**************")
// let marvel_heroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"]
// console.log(marvel_heroes)
// console.log(dcHeroes)

// console.log("**************")
// let addtwoarrays = marvel_heroes.concat(dcHeroes)
// console.log(addtwoarrays)

// console.log("**************")
// marvel_heroes.unshift("azhar")// used to add the element at the beginning
// console.log(marvel_heroes)

// console.log("**************")
// marvel_heroes.shift()// used to remove elemets form the beginning from the array
// console.log(marvel_heroes)

// console.log("**************")
// marvel_heroes.slice(0,2)// this will give the piece of array form the complete array
// console.log(marvel_heroes)

// console.log("**************")
// marvel_heroes.splice(0,2);// this is used to delete elements from the array
// console.log(marvel_heroes)// also used to add the elements 

// console.log("**************")
// marvel_heroes.splice(0,2,"hello","hi")// adding the elements at the place of deleted index places
// console.log(marvel_heroes)

// //functions in java
// console.log("**************")
// function myFunction(inta ,intb){

//   let result = inta+intb

//   return result
// }
// console.log(myFunction(10,100));

// console.log("**************")
// function myFunction1() {
//   console.log("hello dear syed azhar");
//   console.log("welcome to JavaScript");
// }

// myFunction1(); // Call the function

// // javascript arrow functions

// console.log("**************")
// const asum = (a1,a2)=>{
//   console.log(a1+a2)
// }
// asum(10,40)

// const vowel = (str)=>{
//   for(let v=0; v<=str.length; v++){
//     if(str.charAt(v)==='a'||str.charAt(v)==='e'
//     ||str.charAt(v)==='i'|| str.charAt(v)==='o'|| str.charAt(v)==='u'){
//       console.log(str.charAt(v))
//     }
//   }
// }

// vowel("javascript by apna college ")

// console.log("**************")
// const extractVowels = (inputString) => {
//   let vowels = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString.charAt(i) === 'a' || inputString.charAt(i) === 'e' ||
//       inputString.charAt(i) === 'i' || inputString.charAt(i) === 'o' || inputString.charAt(i) === 'u') {
//       vowels += inputString.charAt(i);
//     }
//   }
//   return vowels;
// }

// console.log(extractVowels("javascript by apna college "));

// console.log("**************")
// //map method
// let narray = [1,2,3,4,5,6]

// narray.map((val,idx,arr)=>{// this method will give the new array
// console.log(val,idx,arr)
// });

// console.log("**************")
// let squar = narray.map((val, idx, arr) => {
//   return val * val;
// });

// console.log(squar);


// console.log("**************")
// //foreach method

// narray.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });

// console.log("**************")
// squar = [];
// narray.forEach((val, idx, arr) => {
//   squar.push(val * val);
// });
// console.log(squar);

// // Filter Method
// let filteredArray = narray.filter((val, idx, arr) => {
//   // Return true if the element meets the condition
//   return val % 2 === 0; // Filter even numbers
// });

// console.log("Filtered Array:", filteredArray); // Output: [2, 4, 6]

// // Reduce Method
// let reducedValue = narray.reduce((accumulator, currentValue, idx, arr) => {
//   // Accumulator keeps track of the result so far
//   // Here, we are summing all the elements of the array
//   return accumulator + currentValue;
// }, 0); // Initial value of the accumulator

// console.log("Reduced Value:", reducedValue); // Output: 21 (sum of all elements)




// //stage 2 javascript dom & html css

// window.console.log("hello");
// console.log(window);
// window.alert("hello")

// console.log(window.document)
// console.dir(window.document)
// console.dir(window.document.body.childNodes[1])
// // console.dir(window.document.body.style.backgroundColor="red")

// //when a webpage is loaded the browser creates a document object model(dom) of the page
// // from the dom you can control all you html code dom is representation of html code

// // dom manipulation
// //by id
// let heading = document.getElementById("heading");
// console.log(heading)

// let mybutton = document.getElementById("mybutton")
// console.log(mybutton)

// //by class
// let getbyclassname = document.getElementsByClassName("h5");
// console.dir(getbyclassname)
// console.log(getbyclassname)

// //by tag name
// let para = document.getElementsByTagName("p")
// console.log(para)

// let getTagName = para.tagName
// console.log(getTagName);

// // query selector which is used for all #id .class and tag

// let itgivesfirstelemetn = document.querySelector("p");
// console.log(itgivesfirstelemetn)

// let itgivesalltelemetn = document.querySelectorAll("h1");
// console.log(itgivesalltelemetn)

// // changing the text of html old to new

//  document.getElementById("hello").innerHTML = "welcome to my world";
// // let hello = document.getElementById("hello").innerHTML;
// // console.log(hello);

// document.getElementById("hi").innerHTML="hello";
// let inn = document.getElementById("hi").innerHTML
// console.log(inn)

// // get attribute name

// let getattri = document.getElementById("hi");
// console.log(getattri.getAttribute("id"))
// // change the attribute name
// let setattri = document.getElementById("hi");
// console.log(setattri.setAttribute("id", "hehe")); // Log the new id value

// let div = document.getElementById("box");
// div.style.backgroundColor="bisque"

// div.style.backgroundColor="red";
// div.style.fontFamily="algerian";
// div.style.visibility="visible";

// //create element without interfering with html create button with js
// let button = document.createElement("button")
// button.innerHTML="Click Me!"
// console.log(button)
// // div.append(button)//adds at the end of node(inside)

// // div.prepend(button)//adds at the start of node(inside)

// // div.before(button)//adds before the node(outside)

// //div.after(button)//adds after the node(outside)

// //to delete any element like para button access it and remove

// // let myfirstheading = document.getElementById("heading")
// // myfirstheading.remove()

// let createbutton = document.createElement("button")
// createbutton.innerHTML="bye bye!"
// console.log(createbutton)
// document.querySelector("body").prepend(createbutton)
// createbutton.style.backgroundColor="red"


//event handling in javascript
// let btn = document.getElementById("btn")

// btn.onclick=()=>{
//   console.log("button was cliked ")
//   alert("hello world")
// }

// let btn1 = document.getElementById("btn1")
// btn1.ondblclick=()=>{
//   console.log("button was clicked 2 times")
//   alert("hello azhar")
// }

// let div = document.getElementById("box")
// div.onmouseover=()=>{
//   console.log("you are inside the div")
//   alert("hi im your div")
// }

//even listners in javascript

// let btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//   console.log("button was clicked 1 ")
//  alert("hi im your div")
// })

// btn.addEventListener("click",()=>{
//   console.log("button was clicked 2 ")
//  alert("hi im your btn")
// })

// const handler3 = ()=>{
//   console.log("button was clicked  3")
//   alert("hi im your btn")
// }

// btn.addEventListener("click",handler3)
  

// btn.addEventListener("click",()=>{
//   console.log("button was clicked  4")
//  alert("hi im your btn")
// })

//to remove listener first store it into a varaible 
//btn.removeEventListener("click",handler3)

//practice 
//create a toggle button that changes the screen the screen to dark-mode when clicked & light-mode
// when clicked again

//change mode without css and classlist direct applying style

// let mode = document.querySelector("#changemode");
// let modedark = "light";

// mode.addEventListener("click", () => {
//   console.log("you are trying to change");

//   if (modedark === "light") {
//     modedark = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     modedark = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }

//   console.log(modedark);
// });


// with css and classlist js

let mode = document.querySelector("#changemode");
let body = document.querySelector("body")
 let modedark = "light";

mode.addEventListener("click", () => {
  console.log("you are trying to change");

  if (modedark === "light") {
    modedark = "dark";
   body.classList.add("dark")
   body.classList.remove("light")
  } else {
    modedark = "light";
    body.classList.add("light")
    body.classList.remove("dark")
  }

  console.log(modedark);
});