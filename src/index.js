module.exports = function check(str, bracketsConfig) {
  var substrings = [];
  for (var j = 0; j < bracketsConfig.length; j++) {

    for (var i = 0; i < bracketsConfig.length; i++) {
      substrings[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
    }

    for (let k = 0; k < substrings.length; k++) {
      if (str.includes(substrings[k])) {
        str = str.replace(substrings[k], "");
        k = -1;
      }
    }
  }
  if (str === "") {
    return true;
  }
  return false
}
