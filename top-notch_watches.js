"use strict"
const div = document.querySelectorAll('div')
const colors = document.querySelectorAll('img')
const colorSelectors = document.getElementById('colors').querySelectorAll('button')
const redClock = colors[1]
const blackClock = colors[2]
const lilyClock = colors[3]
const purpleClock = colors[4]
const blackColor = colorSelectors[0]
const redColor = colorSelectors[1]
const lilyColor = colorSelectors[2]
const purpleColor = colorSelectors[3]
const featureButtons = document.getElementById('features_buttons').querySelectorAll('button')
const timeButton = featureButtons[0]
const heartRateButton = featureButtons[1]
const buyButton = document.getElementById('buy_it').querySelector('button')

blackColor.addEventListener('click', ()=>{
    blackClock.style.zIndex = '1'
    redClock.style.zIndex = '0'
    lilyClock.style.zIndex = '0'
    purpleClock.style.zIndex = '0'
})
redColor.addEventListener('click', ()=>{
    redClock.style.zIndex = '1'
    lilyClock.style.zIndex = '0'
    purpleClock.style.zIndex = '0'
    blackClock.style.zIndex = '0'
})
lilyColor.addEventListener('click', ()=>{
    lilyClock.style.zIndex = '1'
    redClock.style.zIndex = '0'
    blackClock.style.zIndex = '0'
    purpleClock.style.zIndex = '0'
})
purpleColor.addEventListener('click', ()=>{
    purpleClock.style.zIndex = '1'
    lilyClock.style.zIndex = '0'
    redClock.style.zIndex = '0'
    blackClock.style.zIndex = '0'
})
const h1 = document.querySelectorAll('h2')
const h2 = h1[0]
h2.classList.add('hidden')
console.log(h2);
timeButton.addEventListener('click', ()=>{
    setInterval(function(){
        let hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
        let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
        let seconds = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
        h2.textContent = hours + ':' + minutes + ':' + seconds  
    }, 1000)
    h2.classList.remove('hidden')
    heartRatio.classList.add('hidden')
    heart.classList.add('hidden')
})
timeButton.addEventListener('dblclick', ()=>{
    h2.classList.add('hidden')
})
const heart = div[2]
const heartRatio = h1[1]
heartRatio.classList.add('hidden')
console.log(h1);
console.log(heartRatio);
console.log(heart);
heartRateButton.addEventListener('click', ()=>{  
    heart.classList.add('heartrate')
    heart.classList.remove('hidden')
    h2.classList.add('hidden')
    heart.style.animationName = 'heartbeat'
    heart.style.animationDuration = '1s'
    heartRatio.classList.remove('hidden')
    heart.style.animationIterationCount = 'infinite'  
})
heartRateButton.addEventListener('dblclick', ()=>{
    heart.classList.add('hidden')
    heartRatio.classList.add('hidden')
})
buyButton.addEventListener('click', ()=>{
    window.open('https://ebay.com')
})



