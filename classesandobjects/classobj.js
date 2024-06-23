// const student ={
//     name:"azhar",
//     age:21,
//     marks:7.97,
//     passed:true
// }

// for (const key in student){
//     console.log("keys :",key,"value :",student[key])
// }

//classes

// class ToyotaCar{

//     // create constructor
//     constructor(name,why){
//         console.log("hello toyota");
// this.name=name;
// this.why=why;
//     }
//     start(){
//         console.log("start")
//     }

//     stop (){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let fortunar = new ToyotaCar();// constructor automatically called when object is created
// fortunar.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");
// let constr = new ToyotaCar("kmina","mujhe nahi pata")
// console.log(constr)


// inheritance

// class Parent {
//     hello() {
//         console.log("hello im parent");
//     }
// }

// class Child extends Parent {
//     hello() {
//         console.log("hello im child");
//     }
// }

// let obj = new Child();
// console.log(obj.hello());
// let obj1 = new Parent();
// console.log(obj1.hello());

// class Animal {
//     sound() {
//         console.log("Animal makes a sound");
//     }
// }


// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }
// }

// // Calling the sound method of Animal class
// let animal = new Animal();
// animal.sound(); // Output: "Animal makes a sound"


// // Creating instances of Dog and Cat
// let dog = new Dog();
// let cat = new Cat();

// // Calling the sound method on instances
// dog.sound(); // Output: "Dog barks"
// cat.sound(); // Output: "Cat meows"


//super is a keyword in JavaScript that is used to call functions or 
//access properties of a parent class within a subclass
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        super.sound(); // Call the sound method of the parent class
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        super.sound(); // Call the sound method of the parent class
        console.log("Cat meows");
    }
}

// Creating instances of Dog and Cat
let dog = new Dog();
let cat = new Cat();

// Calling the sound method on instances
dog.sound(); // Output:
             // "Animal makes a sound"
             // "Dog barks"

cat.sound(); // Output:
             // "Animal makes a sound"
             // "Cat meows"


  // what is sync in javascript
  
  //synchronous means the code runs in a particular sequance of instructions given in the program
  //each instruction waits for the previous instruction to compete its exception.

  // what is Asynchronous 

  //Due to synchronous programming somtimes imp instructions get blocked due to some previous instructions,
  // which causes a delay in the ui. Asynchronous code execution allows to execute next instructions
  // immediatly and doesnot block the flow


//Synchronous execution is straightforward and predictable. 
//Each step is executed one after the other, and the program 
//waits for each step to complete before moving on to the next one.

console.log("**************************************************************")
  // Synchronous function using arrow function
const synchronousFunction = () => {
    console.log("Synchronous function: Step 1");
    console.log("Synchronous function: Step 2");
    console.log("Synchronous function: Step 3");
};

// Calling the synchronous function
console.log("Before calling synchronous function");
synchronousFunction();
console.log("After calling synchronous function");


//Asynchronous execution is useful when dealing with tasks 
//that take time to complete, such as network requests or file I/O. It allows the program to 
//continue with other tasks while waiting for asynchronous 
//operations to finish. This helps improve efficiency and responsiveness, 
//especially in web applications.

console.log("**************************************************************")
// Asynchronous function using arrow function
const asynchronousFunction = () => {
    console.log("Asynchronous function: Step 1");
    setTimeout(() => {
        console.log("Asynchronous function: Step 2");
    }, 2000); // setTimeout simulates an asynchronous operation that takes 2 seconds
    console.log("Asynchronous function: Step 3");
};

// Calling the asynchronous function
console.log("Before calling asynchronous function");
asynchronousFunction();
console.log("After calling asynchronous function");

//Promises simplify managing asynchronous tasks in JavaScript,
// like fetching data or reading files. 
//They allow you to handle success or failure of these tasks in a structured way, 
//enhancing code readability and maintainability.

console.log("**************************************************************")
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        success ? resolve("Promise resolved!") : reject("Promise rejected!");
    }, 2000);
});

myPromise.then(result => console.log(result)).catch(error => console.error(error));//handling error


//Async-await

// async function always returns a promise.

//await pause the execution of its surrounding async function until the promise is settled

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
        resolve(200);
        },2000);

    });
};
// await.api();//we can not use await directly it will provide error
async function getweaterh(){
    await api();
}
getweaterh();



//fetch Api

const URL ="https://cat-fact.herokuapp.com/facts";
let fetched_data = document.getElementById("para");

// check the status code in console if the data is fetched status code is 200
// let promise =fetch(URL);
// console.log(promise);
// check the complete response

const btn = document.getElementById("btn");

const getFacts = async () => {
    console.log("getting data..........");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status); // to check the status code
    let data = await response.json(); // await the JSON parsing
    console.log(data);
    console.log(data[2].text);
    fetched_data.innerText = data[2].text;
};

getFacts();

btn.addEventListener("click",getFacts);


// fetching data using promises but the async await is easier than promises how erver both are used to fetch the url data


const getCatFacts = () => {
    console.log("Getting cat facts..........");
    return fetch(URL)
        .then(response => {
            console.log(response);
            console.log(response.status); // to check the status code
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data[3].text);
            fetched_data.innerText = data[3].text;
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

getCatFacts();

btn.addEventListener("click",getCatFacts);