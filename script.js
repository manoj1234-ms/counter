document.getElementById("incrementbtn").addEventListener("click",incrementcounter);
document.getElementById("decrementbtn").addEventListener("click",decrementcounter);
document.getElementById("resetbtn").addEventListener("click",resetcounter);

let counterDisplay = document.getElementById("counterdisplay");
let counter = 0;
function updatecounterDispaly(){
    counterDisplay.textContent = counter;
}
function incrementcounter(){
  counter++;
  updatecounterDispaly();
}


function decrementcounter(){
   if(counter>0){
    counter--;
    updatecounterDispaly();
   }
}


function resetcounter(){
    counter =0;
    updatecounterDispaly();
}