#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreen `#`.repeat(60));
console.log(chalk.bgBlue.bold("welcome to Quiz world"));
console.log(chalk.bgGreen `#`.repeat(60));
console.log("Get ready to pick the correct answer:");
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "1. which spelling is correct?",
        choices: ["coding", "cading", "coading", "cording"]
    },
    {
        type: "list",
        name: "question2",
        message: "2. How many provinces in Pakistan?",
        choices: ["five", "four", "six", "zero"]
    },
    {
        type: "list",
        name: "question3",
        message: "3. How many legs does a dog have?",
        choices: [2, 3, 4, 7]
    },
    {
        type: "list",
        name: "question4",
        message: "4. what is the color of flag?",
        choices: ["green and white", "yellow and pink", "orange", "black"]
    },
    {
        type: "list",
        name: "question5",
        message: "5. what is 2+3?",
        choices: [3, 4, 5, 6]
    }
]);
const { question1, question2, question3, question4, question5 } = userInput;
let correctOptions = ["coding", "five", 4, "green and white", 5];
if (question1 === "coding")
    marks += 10;
if (question2 === "five")
    marks += 10;
if (question3 === 4)
    marks += 10;
if (question4 === "green and white")
    marks += 10;
if (question5 === 5)
    marks += 10;
console.log(marks);
function myAnswers() {
    console.log(`\n correct options:`, correctOptions);
    if (marks === 50) {
        console.log(`congratulation you got full ${marks} marks`);
    }
    else if (marks > 0) {
        console.log(`\n you got ${marks}marks`);
    }
    else {
        console.log(`\n unfortunately! you got ${marks}marks`);
    }
}
myAnswers();
