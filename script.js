//Michael Ravelo
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score')
const yourScoreSpan = document.querySelector('[data-your-score')
const SELECTIONS = [
  { //we have our choices 0,1,2 set below with our winning combinations
    name: 'rock',
    emoji: '✊' ,
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋' ,
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌️' ,
    beats: 'paper'
  },
]
//this gives function to our game by running a script
//when we click on one of our buttons, this script will run through the parameters above
//and search for "winners"
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection)
    })
})
//computer randomly selects one of our 3 choices
function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(selection)
 //displays and adds up the winner's score  
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}
//takes the current text and converts it into an integer
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}//logic for showing who the winner is
function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}
//logic for showing who the winner is
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}
//this is going to randomely generate a number between 1-2
//we also get a random function chosen from this
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}