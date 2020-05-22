'use strict';

//const loaderUtils = require('loader-utils');
const parse = require('./parse');

module.exports = function(src, map, meta) {
  // console.log({src,map,meta})
  const callback = this.async();
  try {
    const parsed = parse(src);
    callback(null, parsed, map, meta);
  } catch (e) {
    callback(e);
  }
};

// options: {
//   replacements: [
//       {
//           pattern: /\(img\/(.+).png\)/gi, // https://regex101.com/r/O5cs0N/1
//           replace: (match, p1) => `@ref(img/${p1}.png)`,
//       },
//   ],
// },