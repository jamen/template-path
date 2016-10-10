module.exports = pathTemplate
const path = require('path')

function pathTemplate (partials, ...expressions) {
  const items = []
  for (let i = 0, max = partials.length; i < max; i++) {
    items.push(partials[i])
    if (i < max - 1) items.push(expressions[i].toString())
  }

  return path.resolve(path.join(...items))
}
