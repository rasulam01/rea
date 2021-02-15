"use strict"


const inputs = document.querySelectorAll('input')
const emailInput = inputs[0]
const passwordInput = inputs[1]
const logButton = document.getElementById('log_in')
const spans = document.querySelectorAll('span')

spans[1].style.color = 'red'
spans[2].style.color = 'yellow'
spans[3].style.color = 'red'
spans[4].style.color = 'red'
spans[5].style.color = 'red'
spans[6].style.color = 'red'
spans[7].style.color = 'red'

let characterThreshold = false
let numberExist = false
let upperCase = false
let lowerCase = false
let nonAlphaNumeric = false
let readyForSubmission = false

emailInput.addEventListener('input', (e)=>{
    if (e.target.value.length >= 3 && !characterThreshold) {
        spans[1].style.color = 'green'; spans[1].style.transitionDuration = '.2s'
        characterThreshold = true
    } else if (e.target.value.length < 3 && characterThreshold) {
        characterThreshold = false
        spans[1].style.color = 'red'; 
    }
})

emailInput.addEventListener('input', (e)=>{
    if (e.target.value.match(/\d/) && !numberExist) {      
        spans[2].style.color = 'green'; spans[2].style.transitionDuration = '.2s'
        numberExist = true
    } else if (!e.target.value.match(/\d/) && numberExist) {
        spans[2].style.color = 'yellow'
        numberExist = false
    }   
})

passwordInput.addEventListener('input', (e)=>{
    if (e.target.value.length >= 8 && !characterThreshold) {
        spans[3].style.color = 'green'; spans[3].style.transitionDuration = '.2s'
        characterThreshold = true
    } else if (e.target.value.length <= 8 && characterThreshold) {
        spans[3].style.color = 'red'
        characterThreshold = false
    }
})

passwordInput.addEventListener('input', (e)=>{
    if (e.target.value.match(/\d/) && !numberExist) {      
        spans[4].style.color = 'green'; spans[4].style.transitionDuration = '.2s'
        numberExist = true
    } else if (!e.target.value.match(/\d/) && numberExist) {
        spans[4].style.color = 'red'
        numberExist = false
    } 
})

passwordInput.addEventListener('input', (e)=>{
    if (e.target.value.match(/[A-Z]/g) && !upperCase) {
        spans[5].style.color = 'green'; spans[5].style.transitionDuration = '.2s'
        upperCase = true
    } else if (!e.target.value.match(/[A-Z]/g) && upperCase) {
        spans[5].style.color = 'red'
        upperCase = false
    }
})

passwordInput.addEventListener('input', (e)=>{
    if (e.target.value.match(/[a-z]/g) && !lowerCase) {
        spans[6].style.color = 'green'; spans[6].style.transitionDuration = '.2s'
        lowerCase = true
    } else if (!e.target.value.match(/[a-z]/g) && lowerCase) {
        spans[6].style.color = 'red'
        lowerCase = false
    }
})

passwordInput.addEventListener('input', (e)=>{
    if (e.target.value.match(/[^a-zA-z0-9]/gm) || e.target.value.match(/\^/) || e.target.value.match(/\[/) || e.target.value.match(/\]/) || e.target.value.match(/\\/) || e.target.value.match(/\`/) && !nonAlphaNumeric) {
        spans[7].style.color = 'green'; spans[7].style.transitionDuration = '.2s'
        nonAlphaNumeric = true
    } else if (!e.target.value.match(/\[_W]/) && nonAlphaNumeric) {
        spans[7].style.color = 'red'
        nonAlphaNumeric = false
    }
})

emailInput.addEventListener('input', ()=>{
    if (characterThreshold && numberExist) {
        emailInput.style.boxShadow = '0 0 12px green'
    } else if (characterThreshold && !numberExist) {
        emailInput.style.boxShadow = '0 0 12px yellow'
    } else emailInput.style.boxShadow = '0 0 12px navy'
    
})

passwordInput.addEventListener('input', ()=>{
    if (characterThreshold && numberExist && upperCase && lowerCase && nonAlphaNumeric && !readyForSubmission) {
        passwordInput.style.boxShadow = '0 0 12px green'
        logButton.style.transitionDuration = '1s'
        logButton.style.boxShadow = '0 0 12px green' 
        logButton.style.backgroundColor = 'green'
        logButton.style.animationName = 'heartbeat'
        readyForSubmission = true
    } else if (!characterThreshold || !numberExist || !upperCase || !lowerCase || !nonAlphaNumeric && readyForSubmission) {
        passwordInput.style.boxShadow = '0 0 12px navy'
        logButton.style.boxShadow = '0 0 12px navy'
        logButton.style.backgroundColor = 'royalblue'
        logButton.style.animationName = ''
        readyForSubmission = false
    }
})

logButton.addEventListener('click', (e)=>{
    if (characterThreshold && numberExist && upperCase && lowerCase && nonAlphaNumeric) {
        window.open('https://google.com')
    } else {
        e.preventDefault()
        alert('Your username or password does not meet the criteria mentioned below.')
    }
})

function whoAmI() {
    return this.name
}

const user = {
    name: 'User'
}

const admin = {
    name: 'Admin'
}

user.func = whoAmI;
admin.func = whoAmI;


console.log(user.func());
console.log(admin.func());
