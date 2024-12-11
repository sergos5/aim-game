'use strict'

const screens = document.querySelectorAll('.screen')
const startBtn = document.querySelector('#start')
const timeBtns = document.querySelector('#time-list')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let interval

const startGame = () => {
    interval = setInterval(decreaseTime, 100000)
    createRandomCircle()
    showTime(time)
}

const decreaseTime = () => {
    let current = --time
    if (current === 0) {
        current = '00'
        finichGame()
    } else if (current < 10) {
        current = `0${current}`
    }
    console.log(current);
    showTime(current)
}

const showTime = (value) => {
    timer.innerHTML = `00.${value}`
}

const finichGame = () => {
    clearInterval(interval)
}

const createRandomCircle = () => {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.width = '20px'
    circle.style.height = '20px'
    board.append(circle)
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up')
        startGame()
    }
})






