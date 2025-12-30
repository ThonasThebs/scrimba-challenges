let homeScore = 0;
let awayScore = 0;
let homeScoreElement = document.getElementById("points-home");
let awayScoreElement = document.getElementById("points-away");


function updateColors() {
    homeScoreElement.classList.toggle("winner", homeScore > awayScore);
    awayScoreElement.classList.toggle("winner", awayScore > homeScore);
}


function addPoints(side, points) {
    if (side === "home") {
        homeScore += points;
        homeScoreElement.textContent = homeScore;
        updateColors();
    } else {
        awayScore += points;
        awayScoreElement.textContent = awayScore;
        updateColors();
    }

}

function reset() {
    homeScore = 0;
    awayScore = 0;
    homeScoreElement.textContent = homeScore;
    awayScoreElement.textContent = awayScore;
    updateColors();
}

