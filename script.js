const generatorBtn = document.getElementById("generateNumberBtn");
const validator = document.getElementById("numberValidator");
const choice1 = document.getElementById("opt1");
const choice2 = document.getElementById("opt2");
const choice3 = document.getElementById("opt3");
const choice4 = document.getElementById("opt4");
const value1 = document.getElementById("num1");
const value2 = document.getElementById("num2");
const value3 = document.getElementById("num3");
const value4 = document.getElementById("num4");
const submitBtnn = document.getElementById("SubmitBtn");
const correctAnswerText = document.getElementById("correct");
const WrongAnswerText = document.getElementById("wrong");
const div1 = document.querySelector(".choice1");
const div2 = document.querySelector(".choice2");
const div3 = document.querySelector(".choice3");
const div4 = document.querySelector(".choice4");

let tab = new Array();
let correct,CA=0,WA=0;
let div;

generatorBtn.onclick = function generateRandom() {
    checkIfGreenOrRed();
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 10) + 1;
        tab[i]=random;
    }
    // console.log(tab);
    correct= tab[1];
    shuffle(tab);
    value1.innerHTML = tab[0];
    value2.innerHTML = tab[1];
    value3.innerHTML = tab[2];
    value4.innerHTML = tab[3];
    validator.innerHTML = "Number Genarated";
    disableSubmit();
}

function shuffle(arrayToShuffle) {
    for (let i = 1; i<4 ; i++) {
        const ran = Math.floor(Math.random() * (i+1));
        [arrayToShuffle[i] , arrayToShuffle[ran]] = [arrayToShuffle[ran], arrayToShuffle[i]];
    }
    // console.log(arrayToShuffle);
}

function returnCheckedValue() {
    if (choice1.checked) {
        div = div1.className;
        return value1.innerHTML;
    }
    if (choice2.checked) {
        div = div2.className;
        return value2.innerHTML;
    }
    if (choice3.checked) {
        div = div3.className;
        return value3.innerHTML;
    }
    if (choice4.checked) {
        div = div4.className;
        return value4.innerHTML;
    }
}

submitBtnn.onclick = function checkValues() {
    if(value1.innerHTML==="" && value2.innerHTML==="" && value3.innerHTML==="" &&   value4.innerHTML==="" ){
        return;
    }
    if(choice1.checked===false && choice2.checked===false && choice3.checked===false && choice4.checked===false ){
        return;
    }
    let UserChoice = returnCheckedValue();
    if(correct === Number(UserChoice)){
        validator.innerHTML= "CORRECT😁";
        CA++;
        correctAnswerText.textContent = correctAnswerText.textContent.slice(0,17)+CA;
        backgroundGreen(div);
    }
    else{
        validator.innerHTML = "Failed🥲";
        WA++;
        WrongAnswerText.textContent = WrongAnswerText.textContent.slice(0,15)+WA;
        backgroundRed(div);
        displayCorrectAnswer(correct);
    }
    correct= null;
    disableSubmit();
}

function disableSubmit() {
    if (correct === null) {
        submitBtnn.disabled=true;
        return;
    }
    submitBtnn.disabled=false;
}

function backgroundGreen(div){
    switch (div) {
        case "choice1":
            div1.classList.add("green");
            break;
        case "choice2":
            div2.classList.add("green");
            break;
        case "choice3":
            div3.classList.add("green");
            break;
        case "choice4":
            div4.classList.add("green");
            break;
    }
}

function backgroundRed(div){
    switch (div) {
        case "choice1":
            div1.classList.add("red");
            break;
        case "choice2":
            div2.classList.add("red");
            break;
        case "choice3":
            div3.classList.add("red");
            break;
        case "choice4":
            div4.classList.add("red");
            break;
    }
}

function displayCorrectAnswer(correct){
    if (correct === Number(value1.innerHTML)) {
        backgroundGreen(div1.className);
    }
    else if (correct === Number(value2.innerHTML)) {
        backgroundGreen(div2.className);
    }
    else if (correct === Number(value3.innerHTML)) {
        backgroundGreen(div3.className);
    }
    else if (correct === Number(value4.innerHTML)) {
        backgroundGreen(div4.className);
    }
}

function checkIfGreenOrRed() {
    checkIfGreen();
    checkIfRed();
}

function checkIfGreen(){
    if (div1.className.toString().includes("green")) {
        div1.classList.remove("green");
    }
    if (div2.className.toString().includes("green")) {
        div2.classList.remove("green");
    }
    if (div3.className.toString().includes("green")) {
        div3.classList.remove("green");
    }
    if(div4.className.toString().includes("green")) {
        div4.classList.remove("green");
    }
}

function checkIfRed() {
    if (div1.className.toString().includes("red")) {
        div1.classList.remove("red");
    }
    if (div2.className.toString().includes("red")) {
        div2.classList.remove("red");
    }
    if (div3.className.toString().includes("red")) {
        div3.classList.remove("red");
    }
    if(div4.className.toString().includes("red")){
        div4.classList.remove("red");
    }
}