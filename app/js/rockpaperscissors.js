// Hi there, gracious person reading my thing. 
//It all seems to work except... 
//my getWinner always returns undefined!!

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
    //noticed that getInput adds a "\n" to the end of the input - 
    //is getWinner reading "rock\n" causing all its outcomes to be undefined?
    }

function getComputerMove(move) {
    return move || randomPlay();
    //and this fucker is always "paper"
    //because Math.random is always 0.37454011430963874
    //is this a repl.it thing?
    }
function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === computerMove){
        winner = "tie";
    }
    
    else if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors"){
        console.log ("that's not a valid input")
        // return getWinner(getPlayerMove(), getComputerMove())
        // 
        // Aha! Why is this always invoked no matter what??
        
        // The function works as expected with the expected strings plugged in directly
        
        // also works when [ getWinner("rock",getComputerMove()) ] called
        // (remember that the computer's move is always paper)
        
        // There's something fishy about getInput!
        //
    }

    else if (playerMove === "rock"){
        if (computerMove === "paper"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "scissors"){
        if (computerMove === "rock"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    console.log("Why am I getting ***" + winner + "***???");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        console.log ("player chose " +playerMove + " and computer chose " +computerMove);
        ////////////
        // and there's that new line in the console.
        // wait... would the "\n" not register in a real browser window?
        // is that the problem?
        // poor predictable computer still always chooses paper...
        ///////////
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === "player") {
            playerWins+=1;
        } 
        else if (winner === "computer") {
            computerWins+=1;
        }
        else; {
            playerWins += 66666;
            computerWins += 0;
        //////////    
        //made this increment to show that the while loop is doing its thing
        /////////
        }
        
        console.log('Winner is ' + winner);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    
}
playToFive();

