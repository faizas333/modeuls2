import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "userName",
        type: "string",
        massage: "what is your name?",
    }]);
console.log("welcome!!" + answer.userName);
