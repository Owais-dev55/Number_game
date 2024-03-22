#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
let number = await inquirer.prompt([
    {
        name: "usersnumber",
        type: "number",
        message: "please guess the number between 1 and 10"
    }
]);
if (number.usersnumber === randomNumber) {
    console.log("Congtratulations, you guess the right number");
}
else {
    console.log("You guess the wrong number, TRY AGAiN!!!");
}
