"use strict";//https://www.w3schools.com/js/js_strict.asp
const button = document.getElementById("color-changer");
const colorName = document.getElementById("color-name");
const colorArr= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d","e", "f"];
// Created an containingthe all possible values of HEX color array
let colorValue = "";//created an empty string
let randomColor = ["#"];//Created an array with # value at index 0
let randomNum;//Created a variable

/*
Added event listener to the button which is waiting for the click event,
created a callback function
initiated a while loop whihc executes till the length of random color array is less
than 7(array are 0 based index in Js, so we get 6 random index elements from the
array)
using array.push method to push the random values in the randomColor array
usedthe array.join method to convert the randomColor aray to string and stored
the value in the colorValue variable

now changed the body color using body.style = colorValue
are changed the text content of colorName = colorValue
 

after that reset the randomColor array value

*/

button.addEventListener("click",()=>{
    while (randomColor.length < 7){
        randomNum =Math.floor(Math.random() * 16);
        randomColor.push(colorArr[randomNum]);
        //console.log(randomColor);
        colorValue = randomColor.join("");
        document.body.style.backgroundColor = colorValue;
        colorName.textContent = colorValue;
    }
    randomColor =["#"];
});

