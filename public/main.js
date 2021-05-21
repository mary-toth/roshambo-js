function main() {
  //Variables

  let player1Choice = ''
  let player2Choice = ''

  let displayMessage = document.querySelector('h1')

  //rock
  function handlePlayer1Rock(event) {
    player1Choice = 'Rock'
  }
  function handlePlayer2Rock(event) {
    player2Choice = 'Rock'
    if (player2Choice === player1Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper' && player2Choice === 'Rock') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Rock' && player1Choice === 'Scissors') {
      window.alert(`Player 2 Wins! ${player2Choice} beats ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }
  //scissors
  function handlePlayer1Scissors(event) {
    player1Choice = 'Scissors'
    displayMessage = '0'
  }
  function handlePlayer2Scissors(event) {
    player2Choice = 'Scissors'
    if (player2Choice === player1Choice) {
      window.alert(`Draw! Both players chose ${player2Choice}!`)
      displayMessage.textContent = 'DRAW'
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Rock') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Paper') {
      window.alert(`Player 2 Wins! ${player2Choice} beats ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }
  // paper

  function handlePlayer1Paper(event) {
    player1Choice = 'Paper'
  }
  function handlePlayer2Paper(event) {
    player2Choice = 'Paper'
    if (player1Choice === player2Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Paper' && player1Choice === 'Scissors') {
      window.alert(`Player 1 Wins! ${player1Choice} beats ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Paper' && player1Choice === 'Rock') {
      window.alert(`Player 2 Wins! ${player2Choice} beats ${player1Choice}!`)
      player1Choice = ''
      player2Choice = ''
    }
  }

  //if you click on P1 rock:
  document
    .querySelector('section.player1 button.rock')
    .addEventListener('click', handlePlayer1Rock)

  //if you click on P2 rock:
  document
    .querySelector('section.player2 button.rock')
    .addEventListener('click', handlePlayer2Rock)

  //if you click on p1 scissors:
  document
    .querySelector('section.player1 button.scissors')
    .addEventListener('click', handlePlayer1Scissors)

  //if you click on P2 scissors:
  document
    .querySelector('section.player2 button.scissors')
    .addEventListener('click', handlePlayer2Scissors)

  //if you click on p1 paper:
  document
    .querySelector('section.player1 button.paper')
    .addEventListener('click', handlePlayer1Paper)

  //if you click on p2 paper:
  document
    .querySelector('section.player2 button.paper')
    .addEventListener('click', handlePlayer2Paper)
}

document.addEventListener('DOMContentLoaded', main)
