const fs = require('fs')

const dataBaffer = fs.readFileSync('1-json.json')
const dataJSON = (dataBaffer.toString())
const user = JSON.parse(dataJSON)

user.name = 'Roohollah'
user.age = 18

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-JSON.json', userJSON)