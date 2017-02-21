var aData = [1,2,[3,4,[5]],6,[7,[8,9,[10,11,[12]]]]];
var aResult = [];

function getArray(arr) {
  var i = 0;
  var iLen = arr.length;
  while (i < iLen) {
    if(Object.prototype.toString.call(arr[i]) === '[object Array]'){
      getArray(arr[i]);
    }else{
      aResult.push(arr[i]);
    }
    i++;
  }
}

getArray(aData);
console.log(aResult); //[1,2,3,4,5,6,7,8,9,10,11,12]
