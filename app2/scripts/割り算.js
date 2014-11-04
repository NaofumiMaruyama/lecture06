var showAnswer = function(message){
var output = document.querySelector("#answer");
output.value = message;
};

var add = function(supermen){
var inputA = document.querySelector("#input-a");
var inputB = document.querySelector("#input-b");

var a = inputA.value;
var b = inputB.value;

var answer = parseInt(a) / parseInt(b);

console.log("helloWorld: start");
showAnswer(answer);
console.log("helloWorld: end");
};

//　初期設定を行う関数
var boot = function(supermen){
console.log("boot: start");
var button = document.querySelector("button");
button.addEventListener("click", add);
console.log("boot: end");
};

// loadイベント発生時にbootを呼ぶように設定
window.addEventListener("load", boot);
