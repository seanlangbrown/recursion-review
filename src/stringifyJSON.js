// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    //make into string and return (no quotes)
    return '' + obj;
  } 
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    //return in []
    var elements = [];
    for (var i = 0; i < obj.length; i++) {
      //apply stringify JSON to each element
      //push to an array
      elements.push(stringifyJSON(obj[i]));
    }
    //join array with ","
    var elementsJoined = elements.join(',');
    return '[' + elementsJoined + ']';
  }
  if (typeof obj === 'object') {
    var elements = [];
    for (var key in obj) {
      //apply stringify JSON to each element
      //push to an array
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        elements.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    //join array with ","
    var elementsJoined = elements.join(',');
    return '{' + elementsJoined + '}';
  }


};
