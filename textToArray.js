function textToArray(string, reverse) {
  var stringLength = string.length;
  var array = new Array;

  if(!reverse || typeof reverse == undefined){
    for (var i = 0; i < stringLength; i++) {
      array.push(string.substring(i, i + 1));
    }
    return array;
  }else if(reverse){
    for (var i = 0; i < stringLength; i++) {
      array.unshift(string.substring(i, i + 1));
    }
    return array;
  }
}

console.log(textToArray("Hello", false)); //Make second param true for reversed array
