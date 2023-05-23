var change = document.getElementById("btn-one");

var orig = document.getElementById("btn-two");

var body = document.querySelector("body");

var headOne = document.querySelector("h2");

var paragraph = document.querySelectorAll("p");

var icon = document.querySelectorAll("icons");

// var textTwo = document.querySelector("pTwo");



change.onclick = function(){
    body.style.backgroundColor = "black";
    headOne.style.color = "white";
    paragraph.forEach(function(paragraph){
        paragraph.style.color = "white";
    });
    icon.forEach(function(icon){
        icon.style.color = "white";
    });
    // icon.style.color = "white";
    // textOne.style.color = "white";
    // textTwo.style.color = "white";
};

orig.onclick = function(){
    body.style.backgroundColor = "white";
    headOne.style.color = "black";
    paragraph.forEach(function(paragraph){
        paragraph.style.color = "black";
    });
    icon.forEach(function(icon){
        icon.style.color = "black";
    });
    // icon.style.color = "black";
    // textOne.style.color = "black";
    // textTwo.style.color = "black";
};
