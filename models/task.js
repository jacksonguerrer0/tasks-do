const { v4: uuidv4 } = require('uuid')

class Task {
  id = uuidv4()
  title = ''
  completed_at = null

  constructor ( title ) {
    this.title = title
  }

}

module.exports = Task