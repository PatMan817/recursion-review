// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //Input - string, number, boolean, object, array, function
  //Output - string
  if (obj === null) {
    return 'null';
  }

  if (typeof obj === undefined || typeof obj === 'function') {
    return obj;
  }
  //if current data type is string, return string with quotes
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  //if current data type is number, return string of number
  //if current data type is boolean, return string of boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  //if current data type is array
  if (Array.isArray(obj)) {
    //create output string
    var output = '';
    //loop through array and run function on element and add to output
    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]) + ',';
    }
    //slice output to remove last comma
    output = output.slice(0, output.length - 1);
    //add '['']' and return
    output = '[' + output + ']';
    return output;
  }
  //if current data type is object
  if (typeof obj === 'object') {
    //loop through object running function on each value
    var output = '';
    for (var key in obj) {
      //add key, semicolon then function called on value and comma
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        output += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    //slice to remove last comma and add curly braces
    output = output.slice(0, output.length - 1);
    output = '{' + output + '}';
    return output;
  }
};
