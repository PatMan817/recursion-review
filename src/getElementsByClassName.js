// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // Input - ClassName - String
  // Output - Array of elements
  //document.body element.childNodes element.classList
  //1 Base case
  //2 Accumulate Case
  //Create output array
  var output = [];
  //Create document.body variable
  var page = document.body;
  //create inner recursive function
  var innerNodeCheck = function(node) {
    //If current node belongs to desired class, push to output
    if (node.classList !== undefined && node.classList.contains(className)) {
      output.push(node);
    }
    //If current node contains child nodes, call function on child nodes
    node.childNodes.forEach(function(innerNode) {
      innerNodeCheck(innerNode);
    });
  };
  //Call function on document.body
  innerNodeCheck(page);
  //return output
  return output;
};
