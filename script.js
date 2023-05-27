var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
});

var firstBtn = document.getElementById("page-one");

var secondBtn = document.getElementById("page-second");

var thirdBtn = document.getElementById("page-third");

var first = document.getElementById("first-page");

var second = document.getElementById("second-page");

var third = document.getElementById("third-page");

firstBtn.onclick = function(){
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
};

secondBtn.onclick = function(){
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
};

thirdBtn.onclick = function(){
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
}

// var change = document.getElementById("btn-one");

// var orig = document.getElementById("btn-two");

// var body = document.querySelector("body");

// var headOne = document.querySelector("h2");

// var paragraph = document.querySelectorAll("p");

// // var textTwo = document.querySelector("pTwo");



// change.onclick = function(){
//     body.style.backgroundColor = "black";
//     headOne.style.color = "white";
//     paragraph.forEach(function(paragraph){
//         paragraph.style.color = "white";
//     });
//     // icon.style.color = "white";
//     // textOne.style.color = "white";
//     // textTwo.style.color = "white";
// };

// orig.onclick = function(){
//     body.style.backgroundColor = "white";
//     headOne.style.color = "black";
//     paragraph.forEach(function(paragraph){
//         paragraph.style.color = "black";
//     });
//     // icon.style.color = "black";
//     // textOne.style.color = "black";
//     // textTwo.style.color = "black";
// };

