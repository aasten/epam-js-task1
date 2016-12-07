function sortInsertion(arr) {
  for(var i = 0; i < arr.length; ++i) {
    var x = arr[i];
    for(var j = i; j > 0 && arr[j-1] > x; --j)  {
      arr[j] = arr[j-1];
    }
    arr[j] = x;
  }
  return arr;
}

function genRandArr() {
  var arr = new Array(10);
  arr.fill(0);
  arr.forEach(function(c,i,a){a[i] = Math.floor(Math.random()*10); });
  return arr;
}

console.log('Insertions sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortInsertion(testSort));

function sortQuick(arr) {
  function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var i = lo;
    for(var j = lo; j < hi; j++) {
      if(arr[j] <= pivot) {
        // swap
        {
          var tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
        i++;
      }
    }
    // swap
    {
      var tmp = arr[hi];
      arr[hi] = arr[i];
      arr[i] = tmp;
    }
    return i;
  }
  function quickSort(arr, lo, hi) {
    if(lo < hi) {
      var p = partition(arr, lo, hi);
      quickSort(arr, lo, p - 1);
      quickSort(arr, p + 1, hi);
    }
  }
  quickSort(arr,0,arr.length-1);
  return arr;
}

console.log('Quick sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortQuick(testSort));

function sortMerge(arr) {

  function merge(left, right) {
    var result = [];
    while(left.length > 0 && right.length > 0) {
      if(left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    left.forEach(function(val) {result.push(val)});
    left.length = 0;
    right.forEach(function(val) {result.push(val)});
    right.length = 0;
    return result;
  }
  if( arr.length <= 1 )
      return arr;

  var left = arr.slice(0, arr.length/2);
  var right = arr.slice(arr.length/2, arr.length);

  left = sortMerge(left);
  right = sortMerge(right);

  return merge(left, right);
}

console.log('Merge sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortMerge(testSort));

function sortBubble(arr) {
  var n = arr.length;
  do {
    var newn = 0;
    for(var i = 1; i < n; i++) {
      if(arr[i-1] > arr[i]) {
        {
          var tmp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = tmp;
        }
        newn = i;
      }
    }
    n = newn;
  } while(n != 0);
  return arr;
}

console.log('Bubble sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortBubble(testSort));

function sortShell(arr) {
  for(var k = parseInt(arr.length/2); k > 0; k = parseInt(k/2)) {
    for(var i = k; i < arr.length; i++) {
      var t = arr[i];
      for(var j = i; j >= k && t < arr[j-k]; j -=k) {
        arr[j] = arr[j-k];
      }
      arr[j] = t;
    }
  }
  return arr;
}

console.log('Shell sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortShell(testSort));

function sortCounting(arr,maxRange) {
  var count = new Array(maxRange);
  count.fill(0);
  for(var x of arr) {
    count[arr.indexOf(x)] += 1;
  }
  var total = 0;
  for(var j = 0; j < maxRange; ++j) {
    for(var i = 0; i < count[j]; ++i) {
      arr[total] = j
      total++;
    }
  }
  return arr;
}

console.log('Counting sort');
var testSort = genRandArr();
console.log(testSort);
console.log(sortCounting(testSort,10));

function getMaxMinAvg(squareArr) {
  var n = squareArr.length;
  var min = max = avg = squareArr[0][0];
  var sum = 0;
  for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
      sum += squareArr[i][j];
      if(squareArr[i][j] > max) max = squareArr[i][j];
      if(squareArr[i][j] < min) min = squareArr[i][j];
    }
  }
  return [min, max, sum/(n*n)];
}



function createTwoDimRandArr() {
  function randomer(c,i,a){
    a[i] = new Array(10);
    a[i].fill(0);
    a[i].forEach(function(cc,ii,aa){ aa[ii] = Math.floor(Math.random()*10); });
  }
  var arr = new Array(10);
  arr.fill(0);
  arr.forEach(randomer);
  return arr;
}

var twoDimRandom = createTwoDimRandArr();
console.log(twoDimRandom);
console.log('Min,max,avg:' + getMaxMinAvg(twoDimRandom));

function leftTriangle(n) {
  var arr = new Array(n);
  // arr.fill(new Array(n));
  // console.log(arr);
  var changeDir = false;
  var s = n;
  for(var i = 0; i < n; i++) {
    arr[i] = new Array(n);
    arr[i].fill(0);
    var jTo = Math.min(i,n-1-i);
    for(var j = 0; j <= jTo; j++) {
      arr[i][j] = 1;
    }
  }
  return arr;
}

console.log(leftTriangle(10));

function hourglass(n) {
  var arr = new Array(n);
  // arr.fill(new Array(n));
  // console.log(arr);
  var changeDir = false;
  var s = n;
  for(var i = 0; i < n; i++) {
    arr[i] = new Array(n);
    arr[i].fill(0);
    var jFrom = Math.min(i,n-1-i);
    var jTo = Math.max(i,n-1-i)
    for(var j = jFrom; j <= jTo; j++) {
      arr[i][j] = 1;
    }
  }
  return arr;
}

console.log(hourglass(10));


function objSort(arr, order) {
  function compareFunAsc(a, b) {
    return Object.keys(a).length - Object.keys(b).length;
  }
  function compareFunDesc(a, b) {
    return Object.keys(b).length - Object.keys(a).length;
  }

  if(order=='asc') {
    return arr.sort(compareFunAsc);
  } else if (order == 'desc') {
    return arr.sort(compareFunDesc);
  } else {
    console.log('unknown order given: ' + order);
    return arr;
  }
}

{
var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];
// Calling method
var res = objSort(arOfObj, 'asc');
console.log(res);
var res = objSort(arOfObj, 'desc');
console.log(res);

}
