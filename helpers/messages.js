require('colors')

const showMenu = () => {
  return new Promise(resolve => {
    console.clear()
    console.log("|||||||||||||||||||||||||||||||||||||".green)
    console.log("           Select a option".green)
    console.log("|||||||||||||||||||||||||||||||||||||\n".green)

    console.log(`${ '1'.green }. Create taks`)
    console.log(`${ '2'.green }. List taks`)
    console.log(`${ '3'.green }. List taks complete`)
    console.log(`${ '4'.green }. List taks pending`)
    console.log(`${ '5'.green }. Complete taks`)
    console.log(`${ '6'.green }. Delete taks`)
    console.log(`${ '0'.green }. Leave\n`)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question("Select a option by number: ", (opt) => {
      readline.close()
      resolve(opt)
    })
  } )
}

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question("Press enter to continue ", () => {
      readline.close()
      resolve()
    })
  })
}


module.exports = {
  showMenu,
  pause
}