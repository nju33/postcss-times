const fs = require('fs');
const postcss = require('postcss');
const times = require('..');

const css = fs.readFileSync('./sample.css', 'utf-8');

postcss([times])
  .process(css)
  .then(result => console.log(result.css));
