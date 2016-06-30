// import fs from 'fs';
import postcss from 'postcss';
import test from 'ava';
import times from '../build';

// const css = fs.readFileSync('../examples/sample.css', 'utf-8');
function transform(css) {
  return new Promise(resolve => {
    postcss([times])
      .process(css)
      .then(result => resolve(result));
  });
}

test('id', async t => {
  const result = await transform('#id:times(2) {}');
  t.is(result.css, '#id#id {}');
});

test('class', async t => {
  const result = await transform('.class:times(2) {}');
  t.is(result.css, '.class.class {}');
});

test('attr', async t => {
  const result = await transform('[attr=value]:times(2) {}');
  t.is(result.css, '[attr=value][attr=value] {}');
});

test('warn', async t => {
  const result = await transform('#id:times(str) {}');
  const warnings = result.warnings();
  t.is(warnings.length, 1);
  t.is(warnings[0].column, 1);
  t.is(warnings[0].plugin, 'postcss-times');
  t.is(warnings[0].text, 'Please specify a number');
});
