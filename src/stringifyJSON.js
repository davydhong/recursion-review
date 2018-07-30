// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    var res = obj.toString();
  } else if (obj === null || obj === undefined) {
    var res = '' + obj + '';
  } else if (typeof obj === 'string') {
    var res = '"' + obj + '"';
  } else if (typeof obj === 'function') {
    var res = '{}';
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) { //Array if True
      var inside = [];
      obj.forEach( function(element) {
        inside.push(stringifyJSON(element));
      });
      var res = '[' + inside + ']';
    } else { //Object if False
      var inside = [];
      for (key in obj) {
        if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
          var value = obj[key];
          var keyStr = stringifyJSON(key);
          var valStr = stringifyJSON(value);
          var pair = keyStr + ':' + valStr;
          inside.push(pair);
        }
      }
      var res = '{' + inside + '}';
    }
  }
  return  res;
};
