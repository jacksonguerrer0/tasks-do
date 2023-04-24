const inquirer = require('inquirer');
// require('colors')


const question = [
  {
    type: 'list',
    name: 'TODO',
    default: 'Default value',
    message: "What do you want to do?",
    choices: [
      {name: '1. Create taks', value: '1'},
      {name: '2. List taks', value: '2'},
      {name: '3. List taks complete', value: '3'},
      {name: '4. List taks pending', value: '4'},
      {name: '5. Complete taks', value: '5'},
      {name: '6. Delete taks', value: '6'},
      {name: '0. Leave', value: '0'},
  ]
  }
]

const questionConfirm = [
  {
    type: "input",
    name: "pause",
    message: "Press enter to continue"
  }
]

const showMenu = async () => {
  console.clear()
  console.log("\n|||||||||||||||||||||||||||||||||||||".green)
  console.log("           Select a option".green)
  console.log("|||||||||||||||||||||||||||||||||||||\n".green)

  const { TODO } = await inquirer.prompt(question)

  return TODO
}



const pause = async () => {
  const { pause } = await inquirer.prompt(questionConfirm)
  return pause
}

module.exports = {
  showMenu,
  pause
}