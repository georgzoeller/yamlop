var fs     = require('fs')
var assert = require('assert')
var sinon  = require('sinon')
var main   = require('./')
var yaml   = require('js-yaml')

describe('features', function() {
  beforeEach(function() {
    fs.writeFileSync('file.yaml',yaml.safeDump({}))
  })

  it('autosaves', function(done) {
    var obj = main('file.yaml')
    assert.deepEqual(obj, {})

    obj.a = 1

    setTimeout(function() {
      assert.equal(
        fs.readFileSync('file.yaml').toString(),
        yaml.safeDump(obj)
      )
      done()
    }, 500)
  })

  it('saves once', function() {
    var spy = sinon.spy(fs, 'writeFile')
    var obj = main('file.yaml')

    obj.a = 1
    obj.b = 2

    setTimeout(function() {
      assert(spy.calledOnce())
    }, 500)
  })

  it('returns the same object for the same file', function() {
    assert.equal(main('file.yaml'), main('file.yaml'))
  })
})
