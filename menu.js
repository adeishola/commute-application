import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

/*console.log("👐 Welcome To Banking App");
console.log("\n 1. Create new account");
console.log("\n 2.. Deposit money");
console.log("\n 3. Withdraw money");
console.log("\n 4. Check balance");
console.log("\n 5. Transfer money");
console.log("\n 6. Exit");*/

const option = () => {
  return new Promise((resolve, reject) => {
    const answer = rl.question("\n 👉 Enter your choice : ");
    resolve(answer);
  });
};

const start = async () => {
  try {
    while (true) {
      const choice = await option();

      if (choice == 1) {
        console.log(`✅ Create Account`);
      } else if (choice == 2) {
        console.log(`✅ Deposit money`);
      } else if (choice == 3) {
        console.log(`✅ Withdraw money`);
      } else if (choice == 4) {
        console.log(`✅ Check balance`);
      } else if (choice == 5) {
        console.log(`✅ Transfer money`);
      }
      if (choice >= 6) {
        console.log("Goodbye");
        rl.close();
      }
    }
  } catch (error) {}
};
start();

//const answer = await rl.question('\n 👉 Enter your choice : ')
//console.log(`You have entered ${answer}`);
//console.log('\n Bye for now');
//rl.close();
