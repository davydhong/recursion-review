// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (!_.contains(json, '{')) {
    return eval(json);
  }
  // return JSON.parse(json);
};
