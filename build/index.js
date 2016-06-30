'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FIND_PATTERN = /:times\(/;
const MATCHES_PATTERN = /([[^#.&%~]?[^#.&%~\s]+):times\((.*)\)/g;

exports.default = _postcss2.default.plugin('postcss-times', () => {
  return (css, result) => {
    css.walkRules(FIND_PATTERN, rule => {
      rule.selector = rule.selector.replace(MATCHES_PATTERN, replaceSelector);

      function replaceSelector(all, selector, count) {
        count = Number(count);
        if (_lodash2.default.isNaN(count)) {
          result.warn(`Please specify a number`, { node: rule });
          return selector;
        }
        return _lodash2.default.fill(Array(count), selector).join('');
      }
    });
  };
});