let userScore =0;
let CompScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);// to generate random number between 0 to 2
   return options[randIdx]
};

const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="bisque"
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    console.log("you win!");
    msg.innerText="You Win!";
    msg.style.backgroundColor="green"
    }else{
        CompScore++;
        compScorePara.innerText=CompScore;
        console.log("you lose");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red"
    }
}


const playGame =(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice) 

    if(userChoice===compChoice){
        //draw
        drawGame();
    }else{
         let userWin=true;
         if(userChoice==="rock"){
            //scissors, paper
           userWin=compChoice==="paper"?false:true;
         }else if(compChoice==="paper"){
               // roack. scissor
               userWin=compChoice==="scissor"?false:true;
         }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
         }
         showWinner(userWin)
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice)
        playGame(userChoice);
    });

});