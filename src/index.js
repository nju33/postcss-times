import postcss from 'postcss';
import _ from 'lodash';

const FIND_PATTERN = /:times\(/;
const MATCHES_PATTERN = /([[^#.&%~]?[^#.&%~\s]+):times\((.*)\)/g;

export default postcss.plugin('postcss-times', () => {
  return (css, result) => {
    css.walkRules(FIND_PATTERN, rule => {
      rule.selector = rule.selector.replace(MATCHES_PATTERN, replaceSelector);

      function replaceSelector(all, selector, count) {
        count = Number(count);
        if (_.isNaN(count)) {
          result.warn(`Please specify a number`, {node: rule});
          return selector;
        }
        return _.fill(Array(count), selector).join('');
      }
    });
  };
});
