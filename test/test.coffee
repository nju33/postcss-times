fs           = require 'fs'
path         = require 'path'
CSON         = require 'cson'
chai         = require 'chai'
expect       = chai.expect
postcss      = require 'postcss'

times = require '..'

describe 'postcss-times', ->
  it 'expect', ->
    before = fs.readFileSync 'test/cases/main/before.css', 'utf-8'
    after = fs.readFileSync 'test/cases/main/after.css', 'utf-8'

    css = postcss([times]).process(before).css
    expect(css).to.equal(after)
