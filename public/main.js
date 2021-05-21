function main() {
  //Variables

  let player1Choice = ''
  let player2Choice = ''

  let displayMessage = ''

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
      window.alert(`Player 1 wins! Paper covers Rock.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Rock' && player1Choice === 'Scissors') {
      window.alert(`Player 2 wins! Rock crushes Scissors.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Rock' && player1Choice === 'Lizard') {
      window.alert(`Player 2 wins! Rock crushes Lizard.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Rock' && player1Choice === 'Spock') {
      window.alert(`Player 1 wins! Spock vaporizes Rock.`)
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
      window.alert(`Draw! Both players chose ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Rock') {
      window.alert(`Player 1 wins! Rock crushes Scissors.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Paper') {
      window.alert(`Player 2 wins! Scissors cuts Paper.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Spock') {
      window.alert(`Player 1 wins! Spock crushes Scissors.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Scissors' && player1Choice === 'Lizard') {
      window.alert(`Player 2 wins! Scissors decapitates Lizard.`)
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
      window.alert(`Player 1 wins! Scissors cuts Paper.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Paper' && player1Choice === 'Rock') {
      window.alert(`Player 2 wins! Paper covers Rock.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Paper' && player1Choice === 'Lizard') {
      window.alert(`Player 1 wins! Lizard eats Paper.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Paper' && player1Choice === 'Spock') {
      window.alert(`Player 2 wins! Paper disproves Spock.`)
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
      window.alert(`Draw! Both players chose ${player2Choice}!`)
    } else if (player2Choice === 'Lizard' && player1Choice === 'Rock') {
      window.alert(`Player 1 wins! Rock crushes Lizard.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Lizard' && player1Choice === 'Spock') {
      window.alert(`Player 2 wins! Lizard poisons Spock.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Lizard' && player1Choice === 'Scissors') {
      window.alert(`Player 1 wins! Scissors decapitates Lizard.`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Lizard' && player1Choice === 'Paper') {
      window.alert(`Player 2 wins! Lizard eats Paper.`)
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
      window.alert(`Draw! Both players chose ${player2Choice}!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Spock' && player1Choice === 'Lizard') {
      window.alert(`Player 1 wins! Lizard poisons Spock!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Spock' && player1Choice === 'Scissors') {
      window.alert(`Player 2 wins! Spock smashes Scissors!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Spock' && player1Choice === 'Paper') {
      window.alert(`Player 1 wins! Paper disproves Spock!`)
      player1Choice = ''
      player2Choice = ''
    } else if (player2Choice === 'Spock' && player1Choice === 'Rock') {
      window.alert(`Player 2 wins! Spock vaporizes Rock.`)
      player1Choice = ''
      player2Choice = ''
    }
  }

  //event listeners:

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
