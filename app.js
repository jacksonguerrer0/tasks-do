require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { showMenu, pause, addTaskInput } = require('./helpers/inquirer')
const Tasks = require('./models/tasks')

console.clear()

const main = async() => {
  console.log("Run app".yellow)
  let opt = ''

  const tasks = new Tasks

  do {
    opt = await showMenu()

    switch (opt) {
      case '1':
        const description = await addTaskInput()
        tasks.addTask(description)
        break;
      case '2':
        console.log("Tasks: ", tasks._all_tasks)
        break
    }

    if ( opt !== '0' ) await pause()
  } while (opt !== '0')
}

main()