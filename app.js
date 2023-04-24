require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { showMenu, pause, addTaskInput } = require('./helpers/inquirer')
const { persistFile, readDB } = require('./helpers/persistFile')
const Tasks = require('./models/tasks')

console.clear()

const main = async() => {
  console.log("Running app".yellow)
  let opt = ''

  const tasks = new Tasks

  if (readDB()) {
    const parseData = JSON.parse(readDB())
    tasks.loadTasks(parseData)
  }

  do {
    opt = await showMenu()

    switch (opt) {
      case '1':
        const description = await addTaskInput()
        tasks.addTask(description)
        break;
      case '2':
        console.log(tasks.listTasks)
        break
    }

    persistFile(tasks.listTasks)

    if ( opt !== '0' ) await pause()
  } while (opt !== '0')
}

main()