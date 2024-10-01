let gameseq=[]; //to track sequence of game
let userseq=[];  //to track sequence of user 
let btns=["red","orange","blue","violet"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game stated");
        started=true;  //to start the game 
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");  //adding a new class flash to change the color to white
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");   //adding a new class  to change the color to green
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);  //to get random numbers between 0 to 3
    let randCol=btns[randIdx];
    let randbtn=document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAns(idx){
   if(userseq[idx]==gameseq[idx]){
      if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
      }
   }else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";

    },150)
    reset(); //to reset everything to again start a new game
   }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}