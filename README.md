# yamlop [![](https://travis-ci.org/georgzoeller/yamlop.svg?branch=master)](https://travis-ci.org/georgzoeller/yamlop) [![](https://img.shields.io/npm/v/jsop.svg?style=flat)](https://www.npmjs.com/package/yamlop)   ![](http://img.shields.io/badge/node-0.11.13-ff69b4.svg?style=flat) ![](https://img.shields.io/badge/io.js-1.0.0-F5DA55.svg?style=flat)

> One-way data binding for YAML files

yamlop is a yaml version of [typicode/jsop], is a new kind of JSON file reader/writer powered by Object.observe (requires Node 0.11.13 or io.js 1.0.0).

## Before

```javascript
var fs = require('fs')
var yaml = require('js-yaml')
var config = yaml.safeLoad(fs.readFileSync('config.json','utf-8'))
config.foo = 'bar'
fs.writeFile('config.json', yaml.safeDump(config), function(err) {
  if (err) throw err
})
```

## After

```javascript
var yamlop = require('yamlop')

var config = yamlop('config.yaml')
config.foo = 'bar'
```

## License

MIT

_* jsop is short for jsonOpen, yamlop naturally follows the same rule_
