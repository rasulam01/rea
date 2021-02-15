"use strict"

const beau = 125
const beaucoup = beau
const coup = 135
console.log(beau * (coup / 90));
console.log(beaucoup);
console.log('5' == 5);
console.log('5' === 5);




const screen = document.body
let black = document.querySelector('#pit')
let sky = document.querySelector('#urdak')
let filth = document.querySelector('#nekravol')
black.addEventListener('click', function() {
    screen.classList.toggle('darkrealm')
    
})
sky.addEventListener('click', function() {
    screen.classList.toggle('urdak')
})
filth.addEventListener('click', function() {
    screen.classList.toggle('nekravol')
})







