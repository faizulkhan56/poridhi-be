// External JavaScript
//console.log("Hello World 3");

//function sayhello() {

  //  console.log("hello from function2")
//}
//sayhello()

const sayhello = () => {

console.log("heloo from arrow fn")

}

sayhello()


const add = (a,b) => {

return a+b;

}

console.log(add(2,3))


const num = (...nums) => {

console.log(nums)

}

num(1,2,3,4,5)



const myObject = {
    value: 20,
    myFunction: function() {
      console.log("the value is" + " " + " " + this.value);
    }
  };
  
  // Call the method
  myObject.myFunction();


