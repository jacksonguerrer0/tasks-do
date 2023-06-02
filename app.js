require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { showMenu, pause, addTaskInput, selectTask, confirmDeleteTask } = require('./helpers/inquirer')
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
        const title = await addTaskInput()
        tasks.addTask(title)
        break;
      case '2':
        console.log(tasks.listTasksComplete())
        break
      case '3':
        console.log(tasks.listTasksByStatus(true))
        break
      case '4':
        console.log(tasks.listTasksByStatus(false))
        break
      case '5':
        console.log(tasks.listTasksByStatus(false))
        break
      case '6':
        const id = await selectTask(tasks.listTasks())

        if(id !== 0) {
          const isConfirmed = await confirmDeleteTask()

          if(isConfirmed) {
            tasks.deleteTask(id)
            console.log('Task deleted')
          }
        }
        break
    }

    persistFile(tasks.listTasks())

    if ( opt !== '0' ) await pause()
  } while (opt !== '0')
}

main()