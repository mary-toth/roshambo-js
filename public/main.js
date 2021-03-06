function main() {
  //Variables

  let player1Choice = ''
  let player2Choice = ''

  let displayMessage = document.querySelector('h2.results')

  //rock
  function handlePlayer1Rock(event) {
    player1Choice = 'Rock'
  }
  function handlePlayer2Rock(event) {
    player2Choice = 'Rock'
    if (player2Choice === player1Choice) {
      displayMessage.textContent = `Draw! Both players chose ${player1Choice}!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper') {
      displayMessage.textContent = `Player 1 wins! Paper covers Rock.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Scissors') {
      displayMessage.textContent = `Player 2 wins! Rock crushes Scissors.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Lizard') {
      displayMessage.textContent = `Player 2 wins! Rock crushes Lizard.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Spock') {
      displayMessage.textContent = `Player 1 wins! Spock vaporizes Rock.`
      player1Choice = ''
      player2Choice = ''
    }
  }
  //scissors
  function handlePlayer1Scissors(event) {
    player1Choice = 'Scissors'
  }
  function handlePlayer2Scissors(event) {
    player2Choice = 'Scissors'
    if (player2Choice === player1Choice) {
      displayMessage.textContent = `Draw! Both players chose ${player2Choice}!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Rock') {
      displayMessage.textContent = `Player 1 wins! Rock crushes Scissors.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper') {
      displayMessage.textContent = `Player 2 wins! Scissors cuts Paper.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Spock') {
      displayMessage.textContent = `Player 1 wins! Spock crushes Scissors.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Lizard') {
      displayMessage.textContent = `Player 2 wins! Scissors decapitates Lizard.`
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
      displayMessage.textContent = `Draw! Both players chose ${player1Choice}!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Scissors') {
      displayMessage.textContent = `Player 1 wins! Scissors cuts Paper.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Rock') {
      displayMessage.textContent = `Player 2 wins! Paper covers Rock.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Lizard') {
      displayMessage.textContent = `Player 1 wins! Lizard eats Paper.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Spock') {
      displayMessage.textContent = `Player 2 wins! Paper disproves Spock.`
      player1Choice = ''
      player2Choice = ''
    }
  }

  //lizard
  function handlePlayer1Lizard(event) {
    player1Choice = 'Lizard'
  }

  function handlePlayer2Lizard(event) {
    player2Choice = 'Lizard'
    if (player2Choice === player1Choice) {
      displayMessage.textContent = `Draw! Both players chose ${player2Choice}!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Rock') {
      displayMessage.textContent = `Player 1 wins! Rock crushes Lizard.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Spock') {
      displayMessage.textContent = `Player 2 wins! Lizard poisons Spock.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Scissors') {
      displayMessage.textContent = `Player 1 wins! Scissors decapitates Lizard.`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper') {
      displayMessage.textContent = `Player 2 wins! Lizard eats Paper.`
      player1Choice = ''
      player2Choice = ''
    }
  }

  //spock
  function handlePlayer1Spock(event) {
    player1Choice = 'Spock'
  }
  function handlePlayer2Spock(event) {
    player2Choice = 'Spock'
    if (player2Choice === player1Choice) {
      displayMessage.textContent = `Draw! Both players chose ${player2Choice}!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Lizard') {
      displayMessage.textContent = `Player 1 wins! Lizard poisons Spock!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Scissors') {
      displayMessage.textContent = `Player 2 wins! Spock smashes Scissors!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Paper') {
      displayMessage.textContent = `Player 1 wins! Paper disproves Spock!`
      player1Choice = ''
      player2Choice = ''
    } else if (player1Choice === 'Rock') {
      displayMessage.textContent = `Player 2 wins! Spock vaporizes Rock.`
      player1Choice = ''
      player2Choice = ''
    }
  }

  function resetGameClick(event) {
    let displayMessage = document.querySelector('h2.results')
    displayMessage.textContent = ''
    player1Choice = ''
    player2Choice = ''
  }

  //event listeners:
  document
    .querySelector('button.reset')
    .addEventListener('click', resetGameClick)

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

  //if you click on p1 lizard:
  document
    .querySelector('section.player1 button.lizard')
    .addEventListener('click', handlePlayer1Lizard)

  //if you click on p2 lizard:
  document
    .querySelector('section.player2 button.lizard')
    .addEventListener('click', handlePlayer2Lizard)

  //if you click on p1 spock:
  document
    .querySelector('section.player1 button.spock')
    .addEventListener('click', handlePlayer1Spock)

  //if you click on p2 spock:
  document
    .querySelector('section.player2 button.spock')
    .addEventListener('click', handlePlayer2Spock)
}

document.addEventListener('DOMContentLoaded', main)
