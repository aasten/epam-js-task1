function sumNumbers(str) {
  var sum = 0;
  str = str.replace(/([\\0]*x([0-9a-fA-F]+))/g,function(match,overall,hex,pos,s) {
    sum += parseInt(hex,16);
    return 's'; });
  str = str.replace(/([0-9]+)/g,function(match,dec,pos,s) {
    sum += parseInt(dec,10);
    return 's';});
  return sum;
}

var str1 = '123xAz13';
console.log(str1);
console.log(sumNumbers(str1));

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
console.log(str);
var obj = parseObject(str);
console.log(obj);
}
