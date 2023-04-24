const { v4: uuidv4 } = require('uuid')

class Task {
  id = uuidv4()
  description = ''
  completed_at = null

  constructor ( description) {
    this.description = description
  }

}

module.exports = Task