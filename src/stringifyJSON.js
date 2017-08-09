// // // this is what you would do if you liked things to be easy:
// // // var stringifyJSON = JSON.stringify;

// // // but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

// check for element types: string, number, boolean, null, function, undefined.
// convert those element types to string. when using recursion in objects/arrays, the function can use these for elements inside
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (obj === undefined || typeof obj === 'function') {
    return '';
  }

// declare a variable to hold the strings
  var string = [];
  if (typeof obj === 'object') {
    // if it is an array,
    if (Array.isArray(obj)) {
      // if obj is an empty array, return an empty array as a string
      if (obj.length === 0) {
        return '[]';
      } else {
        // if it is not, iterate through the array and change everything to a string, then push into var string
        for (var i = 0; i < obj.length; i++) {
          string.push(stringifyJSON(obj[i]))
        }
        // join strings together and return comprehensive string
        return '[' + string.join(',') + ']'
      }
    } else if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        if (stringifyJSON(obj[key])) {
          string.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
      }
      return '{' + string.join(',') + '}'; 
    }
  }
}
