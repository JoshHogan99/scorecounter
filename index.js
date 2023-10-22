let homeScore1 = document.getElementById("home-score")
let homeScoreButton1 = document.getElementById("score-button1")
let homeScoreButton2 = document.getElementById("score-button2")
let homeScoreButton3 = document.getElementById("score-button3")

let guestScore1 = document.getElementById("guest-score")
let guestScoreButton1 = document.getElementById("score-button4")
let guestScoreButton2 = document.getElementById("score-button5")
let guestScoreButton3 = document.getElementById("score-button6")

let newGame = document.getElementById("newgame-button")

let homeScore = 0
let guestScore = 0


function homescore1 () {
    homeScore += 1
    homeScore1.textContent = homeScore
}

function homescore2 () {
    homeScore += 2
    homeScore1.textContent = homeScore
}

function homescore3 () {
    homeScore += 3
    homeScore1.textContent = homeScore
}

function guestscore1 () {
    guestScore += 1
    guestScore1.textContent = guestScore
}

function guestscore2 () {
    guestScore += 2
    guestScore1.textContent = guestScore
}

function guestscore3 () {
    guestScore += 3
    guestScore1.textContent = guestScore
}

function newgame () {
    homeScore = 0
    guestScore = 0
    homeScore1.textContent = homeScore
    guestScore1.textContent = guestScore
}