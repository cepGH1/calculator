'use strict'


//promises 
let newProm = new Promise((resolve,reject)=>{
    let a = 2;
    a = a + 3;
    if (a==2){
        //we say what happens in the success outcome
        resolve("Success");
    }else{
        //we say what happens in the reject outcome
        reject("Failed");
    }
})

//callback creation
//make a function
const greeting = (name) =>  {

    // Creates an alert(pop-up box) which says hello and appends the value of the variable `name`
    alert(`Hello ${name}`);
  }

  const processUserInput = (callback) =>  {

    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let name = prompt('Please enter your name.');
  
    // Then pass the variable `name` to the callback function as parameter
    callback(name);
  }
  //Call the function `processUserInput()` and then pass `greeting` as a parameter.
  
  
  //processUserInput(greeting);