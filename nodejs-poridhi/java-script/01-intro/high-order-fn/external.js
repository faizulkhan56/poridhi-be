function add(a,b){

return a+b;

}

console.log(add(5,2))



function add(a,b,cb){

  return a+b;
  
  }
  
  console.log(add(5,2))





  function add(a, b, cb) {
    if (typeof cb !== 'function') {
      console.error('Error: The third argument is not a function');
      return; // Exit the function early to prevent further errors
    }
  
    let result = a + b;
    cb(result);
  }
  
  add(5, 35, (val) => console.log("the result for add" + " "+ val)); 



  function multiply(a, b, callback) {
    let result = a * b;
    // Call the callback function with the result as an argument
    callback(result);
  }
  
  // Define a callback function to log the result
  function logResult(result) {
    console.log("The result is: " + result);
  }
  
  // Call the multiply function with two numbers and the callback function
  multiply(5, 10, logResult);