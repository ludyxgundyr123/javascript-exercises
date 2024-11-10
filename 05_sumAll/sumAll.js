


const sumAll = function(a,b) {
     let result = [];// empty array
     let sum = 0;// variable to hold total sum of numbers in array
     
     if (Number.isInteger(a) && Number.isInteger(b) && a <b && a >=1 && b>=1){//if a& b is an integer and a is less than b and a & b is more than or equal to 1, run
        for(let i = a ; i<=b ; i++){// loop from the range a to b
            result.push(i);// push the numbers from range a to b to an array called result
        }
           
        
            for(let j = 0 ; j < result.length ; j++){//loop through the length of the array result
            
                
                sum += result[j];// sum all numbers in the array result
    
            }
            return sum ;//return the value of the added nmbers
        
     }else if (a > b){//if a is more than b(so it works with large numbers first)
        for(let i = b ; i<=a ; i++){// changed position of a to b 
            result.push(i);
        }
           
        
            for(let j = 0 ; j < result.length ; j++){
            
                
                sum += result[j];
    
            }
            return sum ;
          
        
        
        

     }else  {
        return "ERROR";
        
        
     }
     
     
 
 };
 
          
    
    



// Do not edit below this line
module.exports = sumAll;
