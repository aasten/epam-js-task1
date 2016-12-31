function reverseStr(str) {
  var ret = '';
  for(var i = str.length - 1; i >= 0; --i) {
    ret += str[i];
  }
  return ret;
}

console.log('Reverse of Hello is ' + reverseStr('Hello'));

function endsWith(which, end) {
  return which.endsWith(end);
}

console.log('Hello ends with "Hel":' + endsWith('Hello','Hel'));
console.log('Hello ends with "lo":' + endsWith('Hello','lo'));

function beginsWith(which, begin) {
  return which.search(begin) === 0;
}

console.log('Hello begins with "Hel":' + beginsWith('Hello','Hel'));
console.log('Hello begins with "lo":' + beginsWith('Hello','lo'));

function isWord(str) {
  return str.search(/\s/) < 0;
}

function isPascalCase(str) {
  return isWord(str) && // does not contains space symbols, so it is a whole word
    str.search(/[^_]/) >= 0 && // contains any symbols except _
    str.search('_') >= 0; // and contains at least one _ symbol separating letters
}

['Hello_world','HelloWorld','helloworld', 'Hello world', '__'].forEach(function(chk) {console.log('"' + chk +'" is pascal case:' + isPascalCase(chk));});


function isCamelCase(str) {
  return (isWord(str) && !isPascalCase(str) && (str.search(/[A-Z]/)>=0));
}

['Hello_world','HelloWorld','helloworld', 'Hello World'].forEach(function(chk) {console.log('"' + chk +'" is camel case:' + isCamelCase(chk));});
