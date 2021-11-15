const chalk = require("chalk")

const nota = 6

if(nota >=7) {
    console.log(chalk.green.bold("Parabéns, você está aprovado!"))
} else{
    console.log(chalk.bgRed.black("Você ficou de recuperação!"))}
