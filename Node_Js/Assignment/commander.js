const {Command}=require("commander");
const fs = require("fs");

const program = new Command(); // program is CLI app

program
    .argument("<file>","file path")
      .action((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const words = content.trim().split(/\s+/);
    console.log(`You have ${words.length} words in this file`);
  });

program.parse();
