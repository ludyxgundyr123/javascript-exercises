


const sumAll = function(a,b) {
     let result = [];
     let sum = 0;
     
     if (Number.isInteger(a) && Number.isInteger(b) && a <b && a >=1 && b>=1){
        for(let i = a ; i<=b ; i++){
            result.push(i);
        }
           
        
            for(let j = 0 ; j < result.length ; j++){
            
                
                sum += result[j];
    
            }
            return sum ;
        
     }else if (a > b){
        for(let i = b ; i<=a ; i++){
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
