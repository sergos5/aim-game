'use strict'

const screens = document.querySelectorAll('.screen')
const startBtn = document.querySelector('#start')
const timeBtns = document.querySelector('#time-list')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0
let interval

const startGame = () => {
    interval = setInterval(decreaseTime, 1000)
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
    timer.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

const createRandomCircle = () => {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    board.append(circle)
}

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
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

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})





