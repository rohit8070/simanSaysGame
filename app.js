 let gameSeq = [];
 let userSeq = [];

 let btns = ["green", "red", "yellow", "blue"];

 let started = false;
 let score = 0;

 let h3 = document.querySelector("h3");


 let start = document.querySelector("#startBtn");
 start.addEventListener("click", function(){
    if(started == false){
        console.log("Game is stared!");
        started = true;

        scoreup();
    }
    
 });

function btnFlash(btn){
    btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
}, 250);
}

function scoreup(){
    userSeq = [];
    score++;
    h3.innerText = `Your score : ${score}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
     
}

function checkAns(idx) {
    // console.log("curr score :", score);

    if (userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(scoreup, 1000);
        }
    } else{
        h3.innerHTML = `Game over!!<br> your score is ${score} <br> click on restart to restart the game.`;
        start.innerHTML = "restart";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";           
        }, 150);
        reset();
    }
    
}


function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    score = 0;
}
