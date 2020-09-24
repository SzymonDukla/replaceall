const replaceAll = require('string.prototype.replaceall');
replaceAll.shim();

module.exports = function(string, searchValue, replaceValue) {
  if (string.includes(searchValue)) {
    string = string.replaceAll(searchValue, replaceValue);
  }
  return string;
};