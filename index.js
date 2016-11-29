'use strict'

const path = require('path')
const fargs = require('fast-args')

module.exports = pathTemplate

function pathTemplate () {
  const expressions = fargs(arguments, 1)
  const partials = arguments[0]
  const max = expressions.length
  const paths = []

  // Append partials and expressions
  for (let i = 0; i < max; i++) {
    const partial = partials[i]
    const expression = expressions[i].toString()
    if (partial[partial.length-1] === '/') paths.push(partial, expression)
    else paths.push(partial + expression)
  }

  // Append last element
  const last = partials[max]
  if (last[last.length-1] === '/' || !paths.length) paths.push(last)
  else paths[paths.length-1] += last

  // Join and resolve them as a path.
  return path.resolve(path.join.apply(path, paths))
}
