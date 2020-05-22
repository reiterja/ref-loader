module.exports = parse;

/**
 * Function to parse the source code.
 * It extract and replace the path where wrapped in @startMark to @endMark
 * 
 * @param {string} src The source code
 * @param {function} resolvePath
 * @throws {Error} Occur when source code has invalid syntax 
 */
function parse(src) {

  if (typeof src != 'string'){
    throw `Expected a string but got ${typeof src}`;
    console.error(src);
  }
  
  let res = src.replace(/\(([\w-_~\/\.]+.(?:png|jpe?g|ico|gif))\)/ig, (imagePath) => {
    const path = require(imagePath);
    console.warn({path});
    return path;
  })

  return res;
}

// "testtest,test".replace(/test/ig,function(...args){ console.log(args) })
// VM859:1 (3) ["test", 0, "testtest,test"]
// VM859:1 (3) ["test", 4, "testtest,test"]
// VM859:1 (3) ["test", 9, "testtest,test"]
// "undefinedundefined,undefined"
