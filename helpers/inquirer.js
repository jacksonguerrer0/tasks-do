const inquirer = require('inquirer');
const { questionConfirm, questionMenu, questionAddTask } = require('./definitions')
// require('colors')

const showMenu = async () => {
  console.clear()
  console.log("\n|||||||||||||||||||||||||||||||||||||".green)
  console.log("           Select a option".green)
  console.log("|||||||||||||||||||||||||||||||||||||\n".green)

  const { TODO } = await inquirer.prompt(questionMenu)

  return TODO
}

const pause = async () => {
  const { pause } = await inquirer.prompt(questionConfirm)
  return pause
}

const addTaskInput = async () => {
  const { description } = await inquirer.prompt(questionAddTask)

  return description
}

module.exports = {
  showMenu,
  pause,
  addTaskInput
}