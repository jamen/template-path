# path-template [![NPM version](https://badge.fury.io/js/path-template.svg)](https://npmjs.org/package/path-template) [![Build Status](https://travis-ci.org/Jamen%20Marz/path-template.svg?branch=master)](https://travis-ci.org/Jamen%20Marz/path-template)

> A template string tag that returns proper absolute paths.

```js
const path = require('path-template')

const configPath = path`${process.cwd()}/package.json`
// => /home/jamen/dev/jamen/path-template/package.json
```

Create a proper dynamic path, backed by `path.join` + `path.resolve`.

## Installation

```sh
$ npm install --save jamen/path-template
```

## API

### `path` tag function

Tag a template string to returns a proper absolute path.

```js
path`foo/${bar}/baz.json`
path`${os.tmpdir()}/my-project/${uuid()}.svg`
path`${__dirname}/${name}.${ext}`
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
