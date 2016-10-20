
"use strict";

var walk = require('walk');
var fs = require('fs');
var camelCase = require('lodash.camelcase');

const walker = walk.walk('./node_modules/material-design-icons');

let template = '';
fs.readFile(`${__dirname}/__Template.js`, 'utf8', (error, contents) => {
  template = contents;
});

const numbers = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];

walker.on('file', (root, stat, next) => {
  if (root.search(/\/svg\/production/) !== -1
    && stat.name.search(/48px\.svg$/) !== -1) {
    const file = `${root}/${stat.name}`;9

    fs.readFile(file, 'utf8', (error, contents) => {

      let name = camelCase(stat.name)
        .replace(/^ic/, '')
        .replace(/48PxSvg$/, '');

      if (name.search(/^[0-9]/) === 0) {
        // starts with a number which is an invalid class name
        const n = Number(name.substr(0, 1));
        name = numbers[n] + name.substr(1);
      }

      const directory = file.replace(/^.*?\/material-design-icons\/([a-z]*)\/.*?$/, '$1');
      const path = `${__dirname}/${directory}`;

      // make sure the directory exists
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }

      const svg = contents.replace(/^.*?(<path .*?\/>).*?$/, '$1');
      const component = template.replace('{props.__Svg}', svg)
        .replace(/__Template/g, name);

      // write the file to disk
      fs.writeFile(`${path}/${name}.jsx`, component);

      // log
      console.log('Written: ', name);
    });
  }

  next();
});
