// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //Input - JSON String
  //Output - any data variable type
  //string, number, boolean, null
  //if null, return null
  //if string, return string
  //if number, parse number
  //if boolean, parse boolean
  //if string contains a semicolon, then

  //create array of split JSON string (using ,)
  //check first element of created array to determine if array or object
  //if array, create output array, remove brackets from first and last elements.
  //push recursive call to output, return output

  //if object, split based on comma
  if (json === 'null') {
    return null;
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (!isNaN(json)) {
    return parseFloat(json);
  }
  if (json.startsWith('"')) {
    return json.slice(1, json.length - 1);
  }

  if (json.startsWith('[')) {
    json = json.slice(1, json.length - 1);
    if (json.length === 0) {
      return [];
    }
    var jsonArray = json.split(',');
    var results = [];

    // jsonArray.forEach(function(item) {
    //   results.push(parseJSON(item));
    // });
    for (var i = 0; i < jsonArray.length; i++) {
      results.push(parseJSON(jsonArray[i]));
    }
    return results;
  }

  if (json.startsWith('{')) {
    json = json.slice(1, json.length);
    var jsonArray = json.split(',');
    var results = {};

    for (var i = 0; i < jsonArray.length; i++) {
      var objProperty = jsonArray[i].split(':');
      var currentKey = objProperty[0].slice(1, objProperty[0].length - 1);
      results[currentKey] = parseJSON(objProperty[1]);
    }
    return results;
  }

    /*jsonArray.forEach(function(item) {
      var objProperty = item.split(':');
      var currentKey = objProperty[0].slice(1, objProperty[0].length - 1);
      results[currentKey] = parseJSON(objProperty[1]);
    });
    return results;
  }*/

};
let test = '42';
let obj = {name: 'Patrick', age: 25, function: function sayHi() {
  console.log('Hello');
}
};
let array = ['test', 42, 27, 'test', obj];
let testArray = JSON.stringify(array);
let testObj = JSON.stringify(obj);
//array.push(test);
//console.log(testArray)
JSON.parse(testArray);
parseJSON(testArray);
