'use strict';

//const loaderUtils = require('loader-utils');
const parse = require('./parse');

module.exports = function(src, map, meta) {
  console.log({src,map,meta})
  const callback = this.async();
  try {
    const parsed = parse(src);
    callback(null, product, map, meta);
  } catch (e) {
    callback(e);
  }
};