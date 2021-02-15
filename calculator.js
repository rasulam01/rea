"use strict"

const calculator = document.getElementById('calculator')
const calculatorDisplay = document.querySelector('textarea')
const calculatorKeys = document.getElementById('calculator_keys').querySelectorAll('button')
const calculatorKeyNumbers = document.getElementById('calculator_keys').getElementsByClassName('key_number')

const plus = document.getElementsByClassName('key_operator')[0]
const minus = document.getElementsByClassName('key_operator')[1]
const multiply = document.getElementsByClassName('key_operator')[2]
const divide = document.getElementsByClassName('key_operator')[3]

const seven = document.getElementsByClassName('key_number')[0]
const eight = document.getElementsByClassName('key_number')[1]
const nine = document.getElementsByClassName('key_number')[2]
const four = document.getElementsByClassName('key_number')[3]
const five = document.getElementsByClassName('key_number')[4]
const six = document.getElementsByClassName('key_number')[5]
const one = document.getElementsByClassName('key_number')[6]
const two = document.getElementsByClassName('key_number')[7]
const three = document.getElementsByClassName('key_number')[8]
const zero = document.getElementsByClassName('key_number')[9]

const clean = document.getElementById('key_clear')
const equal = document.getElementById('key_equal')

plus.addEventListener('click', ()=>{
    calculatorDisplay.textContent += plus.innerHTML
})
minus.addEventListener('click', ()=>{
    calculatorDisplay.textContent += minus.innerHTML
})
multiply.addEventListener('click', ()=>{
    calculatorDisplay.textContent += multiply.innerHTML
})
divide.addEventListener('click', ()=>{
    calculatorDisplay.textContent += divide.innerHTML
})
seven.addEventListener('click', ()=>{
    calculatorDisplay.textContent += seven.innerHTML
})
eight.addEventListener('click', ()=>{
    calculatorDisplay.textContent += eight.innerHTML
})
nine.addEventListener('click', ()=>{
    calculatorDisplay.textContent += nine.innerHTML
})
four.addEventListener('click', ()=>{
    calculatorDisplay.textContent += four.innerHTML
})
five.addEventListener('click', ()=>{
    calculatorDisplay.textContent += five.innerHTML
})
six.addEventListener('click', ()=>{
    calculatorDisplay.textContent += six.innerHTML
})
one.addEventListener('click', ()=>{
    calculatorDisplay.textContent += one.innerHTML
})
two.addEventListener('click', ()=>{
    calculatorDisplay.textContent += two.innerHTML
})
three.addEventListener('click', ()=>{
    calculatorDisplay.textContent += three.innerHTML
})
zero.addEventListener('click', ()=>{
    calculatorDisplay.textContent += zero.innerHTML
})

clean.addEventListener('click', ()=>{
    calculatorDisplay.textContent = ""
})

equal.addEventListener('click', ()=>{
    const equation = calculatorDisplay.textContent
    const result = eval(equation)
    calculatorDisplay.textContent = "" + result
    if (result < 0) calculatorDisplay.style.backgroundColor = 'red'; calculatorDisplay.style.transitionDuration = '.5s'; 
    if (result > 0) calculatorDisplay.style.backgroundColor = 'lightskyblue'; calculatorDisplay.style.transitionDuration = '.5s'  
})

const input = addEventListener('keydown', function(event){
    const key = event.key
    if (key === "Backspace") calculatorDisplay.textContent = ""
})

console.log(calculator);
console.log(calculatorKeys);
console.log(calculatorDisplay);





