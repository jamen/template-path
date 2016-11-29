# template-path

> Normalize template string as a path.

```js
const path = require('template-path')

const project = path`${process.env.HOME}/jamen/template-path`
// => /home/jamen/jamen/template-path/
```

## Installation

```sh
$ npm install --save template-path
```

## Usage

### `path` tag function

`path` is a [template string tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) you use to normalize them as paths:

```js
// Join paths together
const example1 = path`foo/${bar}/baz.json`

// Use functions in the middle of your paths
const example2 = path`${os.tmpdir()}/my-project/${uuid()}.svg`

// Deal with file extensions
const example3 = path`${__dirname}/${name}.${ext}`
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/template-path.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/jamen/template-path.svg?style=flat-square)](https://travis-ci.org/jamen/template-path) [![downloads](https://img.shields.io/npm/dt/template-path.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/express.svg?style=flat-square)][package] [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)

[package]: https://npmjs.org/package/template-path
