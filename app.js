require('colors')
// const { showMenu, pause } = require('./helpers/messages')
const { showMenu, pause } = require('./helpers/inquirer')

console.clear()

const main = async() => {
  console.log("Run app".yellow)
  let opt = ''

  do {
    opt = await showMenu()

    if ( opt !== '0' ) await pause()
  } while (opt !== '0')
}

main()