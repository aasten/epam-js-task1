function sumNumbers() {
  var sum = 0;
  Array.prototype.slice.call(arguments).forEach(function(arg){
    if(typeof arg !== 'string') {
      console.log('[sumNumbers()] Warning: skipping argument ' + arg + ' as it'+
      ' is not string');
    } else {
      var numbersArray = retrieveNumbers(arg);
      console.log(arg + ' --> ' + numbersArray);
      numbersArray.forEach(function(number) { sum += number; });
    }
  });
  return sum;
}

/**
Assuming that input string does not mix hex and decimal numbers. That is by task:
"... check if string is a hexadecimal number". So it can be either decimal or
hexadecimal format, and numbers within it can be separated by letters.
@returns Array of numbers found, in decimal base (hex are converted to dec)
*/
function retrieveNumbers(str) {
  if(typeof str !== 'string') throw 'function retrieveNumbers() expects only strings';
  var ret = [];
  // retrieving and replacing hex numbers in \x or 0x format
  str = str.replace(/([\\0]*x([0-9a-fA-F]+))/g,function(match,overall,hex,pos,s) {
    ret.push(parseInt(hex,16));
    return 's'; });
  // retrieving and replacing hex humbers in non-prefixed format (shown in task
  // example: str2 = 'a123' // str2 treated as 0xA123)
  str = str.replace(/([a-fA-F][0-9a-fA-F]*)/g,function(match,hex,pos,s) {
    ret.push(parseInt(hex,16));
    return 's'; });
  // retrieving and replacing numbers in decimal format
  str = str.replace(/([0-9]+)/g,function(match,dec,pos,s) {
    ret.push(parseInt(dec,10));
    return 's';});
  return ret;
}

var strings = ['123xAz13', 'a123', '0xBB123', '\\xF'];
console.log(strings);
console.log('Sum of all numbers is ' + sumNumbers.apply(null,strings));

function parseObject(str) {
  // trim leading spaces and empty semicolons
  str = str.replace(/^[\s;]*/,'');
  // trim trailing spaces and empty semicolons
  str = str.replace(/[\s;]*$/,'');
  str = str.replace(/,/g,':'); // , -> :
  str = str.replace(/;/g,','); // ; -> ,
  str = str.replace(/([a-zA-Z_][0-9a-zA-Z\-_]*)/g,'"$1"'); // quoting lexeme with non-digit first char
  return JSON.parse('{' + str + '}');
}

{
var str = '\r;key,value;key1,value;key3,value3;\t;\n';
var obj = parseObject(str);
console.log(str + '\n --> ');
console.log(obj);

}
