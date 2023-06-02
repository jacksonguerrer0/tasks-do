const Task = require("./task")

class Tasks {
  // Example: { '...uuid...': { id: '...', title: '..' } }
  _all_tasks = {}

  constructor () {
    this._all_tasks = {}
  }

  deleteTask ( id = '' ) {
    const task = this._all_tasks[id]

    if(task){
      delete this._all_tasks[id]
    }
  }

  addTask (title) {
    const task = new Task(title)
    this._all_tasks[task.id] = task
  }

  loadTasks ( task = []) {
    console.log(task)
    task.forEach((task) => {
      this._all_tasks[task.id] = task
    })
  }

  listTasks () {
    const listTasks = []

    Object.keys(this._all_tasks).forEach((key) => {
      const task = this._all_tasks[key]
      listTasks.push(task)
    })

    return listTasks
  }

  listTasksComplete () {
    const taksArr = this.listTasks()
    let formatTasks = ''

    taksArr.forEach((task, i) => {
      const enumeration = `${i + 1}`.green
      const status = task.completed_at ? 'COMPLETED'.green : 'PENDING'.red

      formatTasks += `${enumeration}. ${task.title} | ${status}\n`
    })
    return formatTasks
  }

  listTasksByStatus (complete=true) {
    const taksArr = this.listTasks()
    let formatTasks = ''
    let enumeration = 0

    taksArr.forEach((task, i) => {
      const status = task.completed_at ? 'COMPLETED'.green : 'PENDING'.red

      if (complete) {
        if (task.completed_at) {
          enumeration += 1
          formatTasks += `${enumeration}. ${task.title} | ${status}\n`
        }
      } else {
        if (!task.completed_at) {
          enumeration += 1
          formatTasks += `${enumeration}. ${task.title} | ${status}\n`
        }
      }
    })
    return formatTasks
  }
}

module.exports = Tasks