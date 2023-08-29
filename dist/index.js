import inquirer from "inquirer";
import chalk from "chalk";
import { num1 } from "./data/data2.js";
console.log("🚀 ~ file: index.ts:5 ~ num1:", num1);
// turbo consol.log extension se variable k upr ctrl+alt+l pres krny se consol ho jay ga
// class 5 inquirer /chalk
// https://github.com/SBoudrias/Inquirer.js for documentation
// shift this line to top of page bcz import mention at top of document. 
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
let answers2 = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter your name:"
    }
]);
console.log("hello" + (answers2.name));
// install NPM for installing dependencies
// otherwise command is npm i chalk
// shift this line to top of page bcz import mention at top of document. 
let answers3 = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
