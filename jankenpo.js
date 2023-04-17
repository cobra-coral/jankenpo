const ROCK = document.querySelector('#rock').addEventListener('click', rock)
const PAPER = document.querySelector('#paper').addEventListener('click', paper)
const SCISSORS = document.querySelector('#scissors').addEventListener('click', scissors)
let resetButton = document.querySelector('.reset-game').addEventListener('click', reset)
let player = document.querySelector('.player-result')
let computer = document.querySelector('.computer-result')
let result = document.querySelector('.result')
var score = document.querySelector('.score')
var yourPoints = 0
var itsPoints = 0
var pc
var npc

function rock() {
    pc = 'ROCK'
    player.innerHTML += 'ROCK'
    game()
    document.querySelector('#rock').removeEventListener('click', rock)
    document.querySelector('#paper').removeEventListener('click', paper)
    document.querySelector('#scissors').removeEventListener('click', scissors)
}


function paper() {
    pc = 'PAPER'
    player.innerHTML += 'PAPER'
    game()
    document.querySelector('#rock').removeEventListener('click', rock)
    document.querySelector('#paper').removeEventListener('click', paper)
    document.querySelector('#scissors').removeEventListener('click', scissors)
}

function scissors() {
    pc = 'SCISSORS'
    player.innerHTML += 'SCISSORS'
    game()
    document.querySelector('#rock').removeEventListener('click', rock)
    document.querySelector('#paper').removeEventListener('click', paper)
    document.querySelector('#scissors').removeEventListener('click', scissors)
}

function opponent() {
    npc = Math.floor(Math.random() * 3)
    if (npc == 0) {
        npc = 'ROCK'
        computer.innerHTML += npc
    } else if (npc == 1) {
        npc = 'PAPER'
        computer.innerHTML += npc
    } else {
        npc = 'SCISSORS'
        computer.innerHTML += npc
    }
}

function game() {
    opponent()
    if (pc == 'ROCK' && npc == 'SCISSORS' || pc == 'PAPER' && npc == 'ROCK' || pc == 'SCISSORS' && npc == 'PAPER') {
        result.innerHTML += 'YOU WIN!'
        yourPoints += 1
        score.innerHTML = `You: ${yourPoints} | Computer: ${itsPoints}`
    } else if (pc == npc) {
        result.innerHTML += 'DRAW!'
    } else if (npc == 'ROCK' && pc == 'SCISSORS' || npc == 'PAPER' && pc == 'ROCK' || npc == 'SCISSORS' && pc == 'PAPER')  {
        result.innerHTML += 'YOU LOSE!'
        itsPoints += 1
        score.innerHTML = `You: ${yourPoints} | Computer: ${itsPoints}`
    }
    
}

function reset() {
    player.innerHTML = 'You choose: '
    computer.innerHTML = 'The computer chooses: '
    result.innerHTML = ' - '
    document.querySelector('#rock').addEventListener('click', rock)
    document.querySelector('#paper').addEventListener('click', paper)
    document.querySelector('#scissors').addEventListener('click', scissors)
}