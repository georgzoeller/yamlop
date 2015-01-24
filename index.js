var fs = require('fs')
var observed = require('observed')
var steno = require('steno')
var yaml = require('js-yaml')
var objects = {}

module.exports = function(filename) {
  if (objects[filename]) {
    return objects[filename]
  } else {
    var object = yaml.safeLoad(fs.readFileSync(filename, 'utf-8'))
    var ee = observed(object)
    ee.on('change', function() {
      steno(filename).write(yaml.safeDump(object))
    })
    objects[filename] = object
    return object
  }
}
