module.exports = function multiply(first, second) {
  var res = "";
if(first.length + second.length <14){
  res += (first*second);
}else{
var A = toArr(first);
var B = toArr(second);
console.log ("A " + A);
console.log("B " +B);
}

return res;
}



function toArr(str){
  var arr = [];
  if (str.length > 3){
  for(var i = str.length -1; i >= 0 ; i -= 3){
    arr.push(+(str.substr(i,3)));
  }
  if(str.length % 3!=0 ){
        arr.push(+str.substr(0,(str.length % 3)));
      }
} else {
  arr.push (str.slice(0));
}
return arr;
}
