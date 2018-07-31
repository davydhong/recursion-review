// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json);
  console.log(JSON.parse(json));
  return JSON.parse(json);

  if (!_.contains(json, '{')) {
    return eval(json);
  } else {
    var obj = {};
    var inner = json.slice(1, json.length - 1);
    if (inner.length > 0 ) {
      var arr = inner.split(',');
      for (var i = 0; i < arr.length; i++) {
        var pairArr = arr[i].split(':');
        var key = pairArr[0];
        var val = pairArr[1];
        obj[parseJSON(key)] = parseJSON(val);
      }
    } 
    return obj;
  }  
};
