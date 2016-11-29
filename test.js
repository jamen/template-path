'use strict'

const test = require('tape')
const path = require('./')
const nodePath = require('path')

test('normalizes paths', function (t) {
  t.is(path`foo`, nodePath.resolve('foo'), 'resolves relative input')
  t.is(path`/foo/${'bar'}/baz`, '/foo/bar/baz', 'preserves absolute path')
  t.is(path`/foo/${'bar'}/package.${'json'}`, '/foo/bar/package.json', 'lets you interpol extensions')
  t.is(path`${__dirname}/.profile`, nodePath.resolve(__dirname, '.profile'), 'joins __dirname and \'/.profile\'')
  t.end()
})
