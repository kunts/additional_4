module.exports = function multiply(first, second) {
  var res = "";
  var sum = [];
  var temp;
if(first.length + second.length <15){
  res += (first*second);
}else{
    var A = toArr(first);
    var B = toArr(second);

    for (var i = 0; i < B.length; i++){
    temp =  mult (A , B[i]);
    sum = mulSum(i, temp, sum);
    }
    res += (sum[sum.length-1]).toString();

    for (var t = sum.length-2; t>=0; t--){
    var tempRes = (sum[t]).toString();

    for(var k = 3- tempRes.length; k>0; k--){
      tempRes = "0"+ tempRes;
    }
  res += tempRes;
 }

}

return res;
}



function toArr(str){
  var arr = [];

  if (str.length > 3){

  for(var i = str.length -3; i >= 0 ; i -= 3){
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


function mult(op1, op2){
  var arr=[];
  var memory = 0;
  var temp;
  for (var i = 0; i < op1.length; i++){
  temp = op1[i] * op2 + memory;

  if (temp >=1000){
      arr.push(temp % 1000);
       memory = ((temp - temp % 1000)/1000);
      } else {
      arr.push(temp);
      memory = 0;
      }
  }
   if (memory !=0){
 arr.push(memory);
}
return arr;
}

function mulSum(i, temp, sum){
   var mem = 0;
   var arr=sum.slice( 0, i );

       for (var p = 0; p < temp.length; p++){
         if (sum[p+i]===undefined){
           sum[p+i] =0;
         }
          var tempSum = sum[p+i] + temp[p] + mem;
          if(tempSum >= 1000){
            arr.push(tempSum % 1000);
            mem = (((tempSum - tempSum % 1000)/1000));
           } else {
           arr.push(tempSum);
           mem = 0;
           }
        }
        if (mem !=0){
      arr.push(mem);
  }
  return arr;
}
