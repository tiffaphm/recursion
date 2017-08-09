// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  // store class names in an array
  var classNames = [];

  // create a search that sees if the list of classes has the specified classname
  function nodeSearch(element) {
    //make sure that class list is not empty && contains className
    if (element.classList !== undefined && element.classList.contains(className)) {
      //if it does, add it to the storage array
      classNames.push(element);
    };

    // now that we have a list of classNames
    // look for only the child nodes of the given element if they exist
    if (element.hasChildNodes()) {
      // create a variable to store childNodes
      var childElements = element.childNodes;
      // iterate through childNodes and return those of the given element
      for (var i=0; i < childElements.length; i++) {
        nodeSearch(childElements[i]);
      }
    };
  };

  // search the element/document
  nodeSearch(document.body);
  // return array of class names of elements
  return classNames;

};