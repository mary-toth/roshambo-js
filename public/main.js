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

  function handleDrawClick1(event) {
    player1Choice = 'Rock'
    // player2Choice = 'rock'

    if (player1Choice === player2Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
    }
  }
  function handleDrawClick2(event) {
    player2Choice = 'Rock'
    if (player2Choice === player1Choice) {
      window.alert(`Draw! Both players chose ${player1Choice}!`)
    }
  }

  document
    .querySelector('section.player1 button.rock')
    .addEventListener('click', handleDrawClick1)

  document
    .querySelector('section.player2 button.rock')
    .addEventListener('click', handleDrawClick2)
}

document.addEventListener('DOMContentLoaded', main)
