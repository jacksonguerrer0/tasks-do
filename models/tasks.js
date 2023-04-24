const Task = require("./task")

class Tasks {
  // Example: { '...uuid...': { id: '...', description: '..' } }
  _all_tasks = {}

  constructor () {
    this._all_tasks = {}
  }

  addTask (description) {
    const task = new Task(description)
    this._all_tasks[task.id] = task
  }

  get listTasks () {
    const listTasks = []

    Object.keys(this._all_tasks).forEach((key) => {
      const task = this._all_tasks[key]
      listTasks.push(task)
    })

    return listTasks
  }
}

module.exports = Tasks