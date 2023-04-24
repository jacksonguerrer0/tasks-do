const fs = require('fs')

const pathDB = 'db/data.json'

const persistFile = (data) => {
  const parseData = JSON.stringify(data)

  fs.writeFileSync(pathDB, parseData, function (err) {
    if (err) throw err;
  });
}

const readDB = () => {
  if (!fs.existsSync(pathDB)) {
    return null
  }

  const data = fs.readFileSync(pathDB, { encoding: 'utf-8' })

  return data
}

module.exports = {
  persistFile,
  readDB
}