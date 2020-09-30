function playerMoveSelect() {
    let playerMove = prompt("Please select your move from the following; r, p or s");
    return playerMove
}
function compMoveSelect() {
    let compVals = ["p", "r", "s"];
    let randomVal = Math.floor(Math.random() * compVals.length);
    let compMove = compVals[randomVal]
    return compMove
}

function compareMoves(playerMove, compMove) {
    if (playerMove === "r" && compMove === "s" || playerMove === "s" && compMove === "p" || playerMove === "p" && compMove === "r") {
        let winner = true
        return winner 
    } else if (playerMove === "r" && compMove === "p" || playerMove === "s" && compMove === "r" || playerMove === "p" && compMove === "s") {
        let winner = false
        return winner
    } 
}

function rockPaperScissorsGame() {
    let playerScore = 0
    let compScore = 0
    while (playerScore < 3 && compScore < 3) {
        let winner = ""
        winner = compareMoves(playerMoveSelect(), compMoveSelect());
        if (winner === true) {
            playerScore ++
        } else if (winner === false) {
            compScore ++
        }
        alert(playerScore + " - " + compScore);
    }
    if (playerScore === 3) {
        alert(`You have won, ${playerScore} - ${compScore}`); 
    } else if (compScore === 3) {
        alert(`You have lost, ${playerScore} - ${compScore}`);
    }
}

rockPaperScissorsGame();



