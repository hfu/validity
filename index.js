const GJV = require('geojson-validation')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})
let count = 0

rl.on('line', line => {
  let f = JSON.parse(line)
  count++
  if (count % 10000 === 0) console.log(count)
  GJV.valid(f, (valid, errors) => {
    if (!valid) {
      console.log(count)
      console.log(JSON.stringify(f, null, 2))
      console.log(errors)
    }
  })
})
