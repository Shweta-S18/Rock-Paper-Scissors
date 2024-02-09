let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const restartBtn = document.querySelector("#restart");

//computer's turn
 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx =  Math.floor(Math.random()* 3);
    return options[randIdx];
 };

function styling(border, color){
    if(!color){
        msg.style.border = `2px solid ${border}`;
        msg.style.color = `${border}`;
    }
    msg.style.color = `${color}`;
};

restartBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move.";
    styling("#081b31", "fff");
});

 const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    styling("#ddd");
};

 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        styling("#11ba11");
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!  ${compChoice} beats Your ${userChoice}`;
        styling("#ff0000");
    };
 }; 

const playGame = (userChoice) => {
    console.log("user choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice:", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
           userWin= compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }          
        showWinner(userWin, userChoice, compChoice);  
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

