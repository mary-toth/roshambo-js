function main() {
  //Variables

  let player1Choice = ''
  let player2Choice = ''

  // let player1Rock = document.querySelector('section.player1 button.rock')
  // let player1Paper = document.querySelector('section.player1 button.paper')
  // let player1Scissors = document.querySelector(
  //   'section.player1 button.scissors'
  // )

  // let player2Rock = document.querySelector('section.player2 button.rock')
  // let player2Paper = document.querySelector('section.player2 button.paper')
  // let player2Scissors = document.querySelector(
  //   'section.player2 button.scissors'
  // )

  // DRAW FUNCTIONS

  function handleRockClick1(event) {
    player1Choice = 'Rock'

    if (player1Choice === player2Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
      player1Choice = ''
    } else if (player1Choice == 'Rock' && player2Choice === 'Scissors') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }
  function handleRockClick2(event) {
    player2Choice = 'Rock'
    if (player2Choice === player1Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper' && player2Choice === 'Rock') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
    }
  }

  function handleScissorsClick2(event) {
    player2Choice = 'Scissors'
    if (player2Choice === 'Scissors' && player1Choice === 'Rock') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Paper') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }
  function handlePaperClick1(event) {
    player1Choice = 'Paper'
    if (player1Choice === 'Paper' && player2Choice === 'Rock') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper' && player2Choice === 'Scissors') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }

  //if you click on P1 ROCK:
  document
    .querySelector('section.player1 button.rock')
    .addEventListener('click', handleRockClick1)

  //if you click on P2 ROCK:
  document
    .querySelector('section.player2 button.rock')
    .addEventListener('click', handleRockClick2)

  //if you click on P2 Scissors:
  document
    .querySelector('section.player2 button.scissors')
    .addEventListener('click', handleScissorsClick2)

  //if you click on p1 paper:
  document
    .querySelector('section.player1 button.paper')
    .addEventListener('click', handlePaperClick1)
}

//else if (p1 === 'paper' && p2 === 'rock') {
//   return `Player 1 won!`;
// } else if (p1 === 'scissors' && p2 === 'paper') {
//   return `Player 1 won!`;
// } else {
//   return `Player 2 won!`;
// }

document.addEventListener('DOMContentLoaded', main)
