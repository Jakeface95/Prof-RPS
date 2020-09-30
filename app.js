function playerMoveSelect() {
    let playerMove = prompt("Please select your move from the following; r, p or s");
    return playerMove
}
function compMoveSelect() {
    let compVals = ["p", "r", "s"];
    let randomVal = Math.floor(Math.random() * compVals.length);
    let compVal = compVals[randomVal]
    return compVal
}



console.log(playerMoveSelect());
console.log(compMoveSelect());