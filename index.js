#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Twitter() {
    opn("https://twitter.com/asaadsaad");
  },
  University() {
    opn("https://www.mum.edu");
  },
  Orchestra() {
    opn("https://www.seiso.us");
  },
  GitHub() {
    opn("https://github.com/asaadsaad");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Asaad Saad", {
  font: "chrome",
  colors: ["blue", "white", "blue"]
});

console.log(`Hey, my name is Asaad Saad.
I am a JavaScript guru and I specialize in fullstack Web Development.
I work at MUM as Assistant Professor of Computer Science.
I'm also a violinist at Southeast Iowa Symphony.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Twitter",
        "University",
        "Orchestra",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answer => {
    actions[answer.choice]();
    setTimeout(() => process.exit(1), 2000);
  });
