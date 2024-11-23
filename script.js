const numberElement = document.getElementById("number");
const increaseElement = document.getElementById("increase");
const decreaseElement = document.getElementById("decrease");
const resetElement = document.getElementById("reset");




 increaseElement.addEventListener("click",function(){
   
    numberElement.innerHTML++;
 });
 decreaseElement.addEventListener("click",function(){
   
    numberElement.innerHTML--;
 });
 resetElement.addEventListener("click",function(){
    
    numberElement.innerHTML = 0;
 });