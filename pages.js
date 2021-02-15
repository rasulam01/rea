'use strict'

const navElement = document.querySelector('nav')

navElement.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target.tagName === "A") {
        e.target.classList.add('active')
        console.log(location.pathname)
    }
})
let currentPath = location.pathname
currentPath = currentPath.slice(currentPath.lastIndexOf('/'))
console.log(currentPath);
const currentLink = document.querySelector('a[href$="' + currentPath + '"]')
console.log(currentLink);

currentLink.classList.add('active')

