const fs = require('fs')
//fs.writeFileSync("./test.txt" , 'Hey There');
//fs.writeFileSync("./test2.txt","this is test script");

//fs.writeFile("./test.txt" , "Hello World async", (err) => {})

//const result = fs.readFileSync("./contacts.txt" , "utf-8");
// console.log(result);

//fs.readFile("./contacts.txt" , "utf-8",(err,result)=>{

//if(err){

  //  console.log("error there",(err));
//}

//else{


   // console.log(result);
//}

//});


//const result=fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());

//console.log(result);


// Appending the text
//fs.appendFileSync("./test.txt" , "\nHey there I am appended");
//fs.appendFileSync("./test.txt" , `${Date.now()}Hey there I am appended with time\n`);

// Copy the file
//fs.cpSync("./test.txt" , "./copy.txt");
//const result=fs.statSync("./test.txt")
//console.log(result)

//making directory
//fs.mkdirSync("my-docs");

fs.mkdirSync("my-docs/a/b" , { recursive:true});



