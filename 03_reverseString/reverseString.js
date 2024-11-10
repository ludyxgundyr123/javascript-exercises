// work for all tests (just change value in text)
const reverseString = function(string) {
    let text =string;
    const newText =Array.from(text);// put text in an array
    return newText.reverse().join("");// reverse element in array and return it without brackets

    
};

// Do not edit below this line
module.exports = reverseString;
