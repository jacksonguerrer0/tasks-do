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
}

module.exports = Tasks