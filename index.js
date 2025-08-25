increasebtn = document.getElementById("increase");
decreasebtn = document.getElementById("decrease");
resetbtn = document.getElementById("reset");
counter = document.getElementById("counter");

let counterValue = 0;


increasebtn.onclick = function (){
    counterValue++;
    counter.textContent = counterValue

    console.log(counterValue);
}


