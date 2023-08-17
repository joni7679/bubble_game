
var panelbottom =document.getElementById("pbtm");
var game =document.getElementById("game_over");
var score =0;
var hitrun =0;
function makebabule(){

var clutter ="";
for(var i=1;i<= 112;i++){


var rn = Math.floor(Math.random()*10)
clutter +=`<div class="bulble">${rn}</div>`

}

document.querySelector("#pbtm").innerHTML= clutter;

}

// game over var
// timer code
var timer;
 function run(){
x=60;
var result =document.getElementById("star");
timer = setInterval(demo,1000)
}

function demo(){

star.innerHTML =x--;

if (x==0) {
clearInterval(timer);
star.innerHTML="end";
panelbottom.style.display="none";
game.innerHTML="game over";
}
else{
}

}

function getnewhit(){

hitrun = Math.floor(Math.random()*10)
var hit=document.getElementById("hit").innerHTML=hitrun;
}

function increassescore(){
score +=5;

document.querySelector("#score_value").textContent =score;

}


document.getElementById("pbtm").addEventListener("click",function (dets){
var Clickednum =Number(dets.target.textContent);
if(Clickednum === hitrun){
increassescore()
makebabule();
getnewhit();

}

}
);




// funnction call
makebabule();
run();
getnewhit();
