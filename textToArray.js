function textToArray(string) {
  var stringLength = string.length;
  var array = new Array;
  console.log(array);
  for (var i = 0; i < stringLength; i++) {
    array.push(string.substring(i, i + 1));
  }
  return array;
}

textToArray("Hello, world!");
