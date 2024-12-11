'use strict'

const screens = document.querySelectorAll('.screen')
const startBtn = document.querySelector('#start')
const timeBtns = document.querySelector('#time-list')

let time = 0

const startGame = () => {
    screens[1].classList.add('up')
}


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        startGame()
    }
})





