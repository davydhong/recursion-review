// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//By Chii Law and David Hong HRSF101

var getElementsByClassName = function(className) {
  //tip:use document.body, element.childNodes, and element.classList
  var res = []; //result array

  //Go through the all the nodes in the HTML  
  var nodeExplore = function (node) {
    if (_.contains( node.classList, className)) {
      res.push(node);
    }
    if ( node.childElementCount > 0) {
      for (let i = 0; i < node.childNodes.length; i++) { 
        nodeExplore(node.childNodes[i]);
      }
    }
  };
  nodeExplore(document.body);
  return res;
};
