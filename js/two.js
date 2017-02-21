var aData1 = [1,2,[3,4,[5]],6,[7,[8,9,[10,11,[12]]]]];
var aResult1 = [];

aResult1 = aData1.toString().split(',');

console.log(aResult1); //['1','2','3','4','5','6','7','8','9','10','11','12'];
