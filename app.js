import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const ip = new Promise((resolve, reject) => {
    const answer = rl.question("\n 👉 Enter your choice : ")
        resolve(answer)
    })

const ch = async () => {
    const dt = await ip
    console.log('You entered ' +  dt);
    rl.close()
}

ch();

//console.log('\n --------> executed');