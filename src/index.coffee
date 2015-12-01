postcss = require 'postcss'

times = postcss.plugin 'postcss-times', ->
  (css) ->
    re = /(.+):times\((\d+)\)/g
    css.walkRules (rule) ->
      rule.selector = rule.selector.replace re, (_, selector, count) ->
        if /^(?:\.|#|\[)/.test selector
          selectors = []
          for i in [0...Number(count)]
            selectors.push selector
          selectors.join ''
        else
          selector
      rule

module.exports = times
