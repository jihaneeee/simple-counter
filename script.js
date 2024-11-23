const numberElement = document.getElementById("number");
const increaseElement = document.getElementById("increase");
const decreaseElement = document.getElementById("decrease");
const resetElement = document.getElementById("reset");

function updateColor(){
    if (numberElement.innerHTML > 0 ){
        numberElement.style.color = "green";
    } else if (numberElement.innerHTML < 0 ){
        numberElement.style.color = "red";
    } else {
        numberElement.style.color = "black";
    }
}

increaseElement.addEventListener("click",function(){
    numberElement.innerHTML++;
    updateColor();
});

decreaseElement.addEventListener("click",function(){
    numberElement.innerHTML--;
    updateColor();
});
 
resetElement.addEventListener("click",function(){
    numberElement.innerHTML = 0;
    updateColor();
});