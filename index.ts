
import inquirer from "inquirer";
import chalk from "chalk";

// https://www.typescriptlang.org/docs/handbook/esm-node.html
import a from "./data/data1.js"
import {b,c,sum} from "./data/data1.js"
import { num1,num2,student } from "./data/data2.js" 
console.log("🚀 ~ file: index.ts:5 ~ num1:", num1)
// turbo consol.log extension se variable k upr ctrl+alt+l pres krny se consol ho jay ga

// class 5 inquirer /chalk
// https://github.com/SBoudrias/Inquirer.js for documentation

// shift this line to top of page bcz import mention at top of document. 
let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
let answers2 = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your name:"}
]);

console.log("hello" + ( answers2.name) );

// install NPM for installing dependencies
// otherwise command is npm i chalk

// shift this line to top of page bcz import mention at top of document. 

let answers3 = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));


 
// chalk example
let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 16;//narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing

let newAge = Math.random() > 0.6 ? "Khan": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let zia: "zia";

zia = "zia";
//zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;