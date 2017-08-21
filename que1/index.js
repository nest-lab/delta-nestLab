function* iterateEachChar() {
  for (var i = 65; i < 116; i++) {
    var char = yield String.fromCharCode(i);
  }
}

module.exports = function(L, M, k) {
  for (var char in iterateEachChar()) {
    var regexP = new RegExp(char, "g");

    numberOfCharInL = L.match(regexP).length;
    numberOfCharInM = M.match(regexP).length;

    if (numberOfCharInL !== numberOfCharInM) {
      return false;
    }
  }

  return true;
};
