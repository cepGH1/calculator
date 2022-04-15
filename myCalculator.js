const outputDiv = document.querySelector("#outputDiv");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const buttonOne = document.querySelector("#buttonOne");
const test = document.querySelector("#test");
const seven = document.querySelector("#seven");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");

const plus = document.querySelector("#plus");

one.addEventListener("click", funcOne);
two.addEventListener("click", funcTwo);
three.addEventListener("click", funcThree);
four.addEventListener("click", funcFour);
five.addEventListener("click", funcFive);
six.addEventListener("click", funcSix);
seven.addEventListener("click", funcSeven);
eight.addEventListener("click", funcEight);
nine.addEventListener("click", funcNine);
zero.addEventListener("click", funcZero);
point.addEventListener("click", funcPoint);

plus.addEventListener("click", add);


let runningTotal=null;
let numberHistory =[];
let numberOfNumbers = 0;
let operationHistory =[];
let numberOfOperations = 0;
let operatorPushed = false;
let clearAllUsed = true;


//
function pressNumber(){
    outputDiv.innerHTML = "hello world";

}

function funcOne(){
    if(operatorPushed){
        outputDiv.textContent = "";
    }
    outputDiv.textContent += "1";
    operatorPushed = false;
}
function funcTwo(){
    if(operatorPushed){
        outputDiv.textContent = "";
    }
    outputDiv.textContent += "2";
    operatorPushed = false;
}
function funcThree(){
    outputDiv.textContent += "3";
}
function funcFour(){
    outputDiv.textContent += "4";
}
function funcFive(){
    outputDiv.textContent += "5";
}
function funcSix(){
    outputDiv.textContent += "6";
}

function funcSeven(){
    outputDiv.innerHTML += "7";
}

function funcEight(){
    outputDiv.innerHTML += "8";
}
function funcNine(){
    outputDiv.textContent += "9";
}
function funcZero(){
    outputDiv.textContent += "0";
}
function funcPoint(){
    outputDiv.innerHTML += ".";
}
function clearAll(){
    operatorPushed=false;
    clearAll = true;
    numberOfNumbers = 0;
    
    runningTotal = null;
    outputDiv.textContent = "";
}
function add(){
    numberOfNumbers++;
    operatorPushed = true;
    let myNum = parseFloat(outputDiv.textContent);
    numberHistory.push(myNum);
    runningTotal += myNum;
    outputDiv.textContent = runningTotal;

}