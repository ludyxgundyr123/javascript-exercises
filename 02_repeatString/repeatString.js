const repeatString = function(str,number) {
    
       let name = str;
       if (number <= -1){
        return 'ERROR';
       }else if (number == 0)  {
        return '';
        
         
       }else {
        for (let i = 0; i < number -1 ; ++i ){
            name += str;
        }
        return name;
       }
       
       
       
    

};


// Do not edit below this line
module.exports = repeatString;
