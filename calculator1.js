alert("what the fuck");
const outputDiv = document.querySelector("#outputDiv");
const one = document.querySelector("#one");
const buttonOne = document.querySelector("#buttonOne");
const test = document.querySelector("#test");

one.addEventListener(onclick, pressNumber);
buttonOne.addEventListener(onclick, pressNumber);


let runningTotal=null;
let numberHistory =[];
let numberOfNumbers = 0;
let operationHistory =[];
let numberOfOperations = 0;

// function to test the script 
function test(){
    test.innerHTML = "hello world";
}
// function to collectnumbers and put on output screen
function pressNumber(){
    outputDiv.innerHTML = "hello world";

}
//function to use the number on the text area in an arithmetic operation

function runningTotal(myNum, myOperation){
    if(runningTotal === null){
        runningTotal = myNum;
    }
    else if(myOperation === "add"){
        runningTotal += myNum;
    }
    else if(myOperation === "subtract"){
        runningTotal -= myNum;
    }
    else if(myOperation === "mult"){
        runningTotal = runningTotal*myNum;
    }
    else if(myOperation === "divide"){
        runningTotal = runningTotal/myNum;
    }
    else if(myOperation === "mod"){
        runningTotal = runningTotal % myNum;
    }
    return runningTotal;

}