#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let myBalance = 50000;
let myPin = 1050;


console.log(chalk.yellow("\n \tWelcome To code With Nimra - ATM Machine\n \t"));
console.log(chalk.blue("\nPin Is: 1050\n"));

 let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Enter your pin code:")
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\n Pin Is Correct, Login Successfully!\n"));
    //console.log(`Current Account Balance Is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.blue("Select An Operation:"),
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation ==="Withdraw Amount"){
        let WithdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type:"list",
                message: chalk.blue("Select a withdraw method"),
                choices: ["Fast Cash", "Enter Amount"]
            }
        ])
        if(WithdrawAns.withdrawMethod ==="Fast Cash"){
            let fastcashAns = await inquirer.prompt([
                {
                    name:"fastcash",
                    type:"list",
                    message: chalk.blue("Select Amount:"),
                    choices:[10000, 20000, 40000, 60000, 80000,]
                }
                 ])
                 if(fastcashAns.fastcash > myBalance){
                    console.log (chalk.red("Insufficient Balance"));
                  }
                  else {
                    myBalance -=fastcashAns.fastcash;
                    console.log(chalk.green(`\n${fastcashAns.fastcash} Withdraw Sucessfully\n`))
                    console.log(chalk.yellow(`Your Remaining Balance is: ${myBalance}`));
                  }

                 }

        else if(WithdrawAns.withdrawMethod ==="Enter Amount"){
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message:chalk.blue("Enter The Amount To Withdraw:")
                }
            ])
            if(amountAns.amount > myBalance){
                console.log(chalk.red("Insufficient Balance"));
            }
            else{
                myBalance -= amountAns.amount;
                console.log(chalk.green(`\n${amountAns.amount} Withdraw successfully\n`));
                console.log(chalk.yellow(`Your Remaining Balance is:${myBalance}`))
    
          }
    }
        }
        else if(operationAns.operation === "Check Balance"){
            console.log(chalk.yellow(`Your Account Balance Is: ${myBalance}`));
        }

          
}
else{
    console.log(chalk.red("Pin Is Incorrect, Try again!"));
}