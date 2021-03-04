module.exports = function check(str, bracketsConfig) {

  var countTypeBrackets = bracketsConfig.length;

  for (var i=0; i<countTypeBrackets; i++){
    var repit1 = 0;
    var repit2 = 0;
    for(var j=0; j<str.length; j++){
      if (str[j] == bracketsConfig[i][0]) repit1++;
      if (str[j] == bracketsConfig[i][1]) repit2++;
    }
    if ((repit1+repit2)%2 != 0 || repit1 != repit2) return false;
  }

  var stack = [];
  for (var i=0; i<str.length; i++){
    var ch = str[i];
    var checkS = checkSide(ch, bracketsConfig);
    var iBracket = checkiBracket(ch, bracketsConfig);    
    if(checkS === "left") {
      stack.push(ch);
      continue;
    }

    if (stack == "") return false;
    var tmpCh = stack.pop();
    if (checkSide(tmpCh, bracketsConfig) == "left") {
      if(checkiBracket(tmpCh,bracketsConfig) == iBracket)
        continue;
      else 
        return false;
    }
  }
  return true;
}

function checkSide(ch, bracketsConfig) {
  for (var i=0; i<bracketsConfig.length; i++) {
    if (ch == bracketsConfig[i][0])
      return "left";
    if (ch == bracketsConfig[i][1])
      return  "right";
  }
}

function checkiBracket(ch, bracketsConfig) {
  for (var i=0; i<bracketsConfig.length; i++) {
    if (ch == bracketsConfig[i][0] || ch == bracketsConfig[i][1])
      return i;
  }
}
