

const removeFromArray = function(arr,val1,val2,val3,val4){
    for (let j = 1 ; j < 20 ; j++){  //loop the loop multiple times until all item of array that is = to valuetoremove is gone
     for (let i = 0; i <arr.length ; i++){ //  loop the length of the array 
        if(arr[i]=== val1 || arr[i]=== val2 || arr[i]=== val3 || arr[i]=== val4){ //if item in i is equal to val1/val2/val3/val4
        arr.splice(i,1);//remove item from i
    }
     }
 }
      return arr;
  }
// Do not edit below this line
module.exports = removeFromArray;
