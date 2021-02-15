"use strict"


// let columns = document.querySelector('p')
// let arr = columns.textContent.split(' ')

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 8) arr[i] = '<span>' + arr[i] + '</span>'

// }

// console.log(arr);

// columns.innerHTML = arr.join(' ')

// const lar = document.querySelector('p')
// console.log(lar);
// const style = window.getComputedStyle(lar, ':first-letter').getPropertyValue('font-size');
// console.log(style);

// console.log(getComputedStyle(columns, ':first-letter').content)

// const sar = columns.textContent.split('')
// console.log(sar);

// for (let i = 0; i < sar.length; i++) {
//     if (sar[i] === '!') sar[i] = '😲'
// }

// const ser = sar.join('')
// console.log(ser);

// const lis = document.createElement('li')
// const lisItem = document.createTextNode('List Item')
// const lisItemText = document.textContent('li')


// const data = [
//     {
//         id: 1,
//         title: 'List Item 1',
//         href: 'https://google.com'
//     },
//     {
//         id: 2,
//         title: 'List Item 2',
//         href: 'https://google.com'
//     },
//     {
//         id: 3,
//         title: 'List Item 3',
//         href: 'https://google.com'
//     },
// ]

// // const list = document.getElementById('list');
// // list.id = 'list'
// // for (let i = 0; data.length; i++) {
// //     const listItem = document.createElement('li');
// //     listItem.id = 'item' + data[i].id;
// //     const link = document.createElement('a')
// //     link.href = data[i].href
// //     link.className = 'link'
// //     listItem.textContent = data[i].title;
// //     list.append(listItem)

// // }

// const list = document.getElementById('list')
// // list.removeChild(list.lastElementChild)
// // list.removeChild(list.firstElementChild)
// // list.firstElementChild.remove()
// // list.lastElementChild.remove()

// for (let i = list.children.length - 1; i>=0; i--) {
//     list.children[i].remove() 
// }
// console.log(list);
// const del = document.getElementById('delete')
// const btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//    const listItem = document.createElement('li')
//    listItem.id = 'List Item ' + Number(list.childElementCount + 1);
//    listItem.textContent  = 'List Item ' + Number(list.childElementCount + 1)
//    list.append(listItem)
// })


// del.addEventListener('click', ()=>{
//     if (list.children.length > 0) list.lastElementChild.remove()
// })


// const article1 = document.createElement('article')
// const heading1 = document.createElement('h2')
// heading1.textContent = "avicii - without you"

// article1.append(heading1)

// const div1 = document.createElement('div')
// div1.className = 'album-cover'

// const img1 = document.createElement('img')
// img1.className = 'thumbnail'
// img1.src = "source of img"
// img1.alt = "alt name"

// div1.append(img1)
// article1.append(div1)

// const audio1 = document.createElement('audio')
// audio1.controls = true
// const source1 = document.createElement('source')
// source1.src = 'source of src'
// source1.type = 'audio/mp3'


// audio1.append(source1)

// articleItem1.append(article1)

// const articles = document.createElement('articles')
// articles.append(articleItem1)

//   ^^
//   ||
//   ||
//   ||
//   ||
// massive.map(item=>({


//   data


// })


// const inputElement = document.querySelector('input')

// const text = document.getElementById('text').querySelector('span')
// const length = document.getElementById('length').querySelector('span')

// inputElement.addEventListener('input', (words)=>{
//     text.textContent = words.target.value
//     length.textContent = words.target.value.length
// })

// const hideButton = document.getElementById('hide')
// hideButton.addEventListener('click', ()=>{
//     text.classList.toggle('transparent_transition')
//     setTimeout(()=>{
//         text.classList.toggle('transparent_transition_reverse')
//     }, 1500)
// })

// const pressButton = document.getElementById('press')
// const list = document.querySelector('ul')
// pressButton.addEventListener('click',()=>{
//     list.classList.toggle('see')

// })

// let seconds = document.getElementById('count').querySelector('span')
// const startButton = document.getElementById('clock_start')
// const resetButton = document.getElementById('clock_reset')
// const stopButton = document.getElementById('clock_stop')
// let CountUp
// startButton.addEventListener('click', ()=>{
//     CountUp = setInterval(() => {
//         seconds.innerHTML++

//     }, 1000)   
// })
// resetButton.addEventListener('click', ()=>{
//     seconds.innerHTML = 0
//     clearInterval(CountUp)
// })
// stopButton.addEventListener('click', ()=>{
//     clearInterval(CountUp)
// })
// startButton.addEventListener('click', ()=>{
//     setInterval(()=>{
//         seconds + 1
//     }, 1000)
// })

// const formElement = document.querySelector('form')
// const inputElement = document.querySelector('input[type="text"]')
// const log = document.querySelector('e')
// const passwordElement = document.querySelector('input[type=password]')



// formElement.addEventListener('submit', (a)=>{
//     a.preventDefault()
// })

// formElement.addEventListener('input', (a)=>{
//     console.log(a.target.value);
// })

// formElement.addEventListener('change', (a)=>{
//     console.log(a.target.value);
// })

// formElement.addEventListener('focus', (a)=>{
//     console.log(a.target.value);
// })

// formElement.addEventListener('blur', (a)=>{
//     console.log(a.target.value);
// })


// passwordElement.addEventListener('input', (e)=>{
//     if (e.target.value.length >=8 ) document.querySelector('p').style.color = 'blue'

//     else document.querySelector('p').style.color = 'darkred'
//     }
// )

// inputElement.addEventListener('input', (log)=>{
//     if (log.target.value.length >=3) log.style.color = 'blue'

//     else log.style.color = 'darkred'
//     }
// )


// const sideOperator = document.querySelector('button')
// const totalNumber = document.querySelector('span')

// sideOperator.addEventListener('click', ()=>{
//     const sideA = parseInt(document.getElementById('aSide').value)
//     const sideB = parseInt(document.getElementById('bSide').value)
//     const sideC = parseInt(document.getElementById('cSide').value)
//     const p = (sideA + sideB + sideC) / 2;
//     totalNumber.textContent = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC))

// })

// addEventListener('keydown',(n)=> {
//     console.log(n);
// })

// addEventListener('keyup', (a)=>{
//     console.log(a.key);
//     console.log(a.code);
// })

// const logIn = document.getElementById('logIn')
// const overlay = document.getElementById('overlay')
// const form = document.getElementById('form')


// logIn.addEventListener('click', ()=>{   
//     overlay.style.display = "block"
//     form.style.display = "block"
// })

// document.addEventListener('keyup', (e)=>{
//     if (e.key === 'Escape' && overlay.style.display !== 'none' && form.style.display !== 'none') {
//     overlay.style.display = "none"
//     form.style.display = "none"
//     }
// })

// const centuryCounter = document.querySelector('button')
// const string = document.querySelector('span')
// const centuryYears = 100
// centuryCounter.addEventListener('click', ()=>{
//     const data = parseInt(document.getElementById('aSide').value)
//     const century = Math.ceil(data/centuryYears)
//     string.textContent = 'Этот год относится к ' + century + '-му' + ' веку.'
//     console.log(string.textContent);   
// })

// const navlisa = document.querySelectorAll('a')

// function removeClass(list) {
//     for (let item of list) {
//         item.classList.remove('active')
//     }
// }   


// for (let navi of navlisa) {
//     navlisa.addEventListener('click', (e)=>{
//         e.preventDefault();
//         removeClass(link)
//         navi.classList.add('active')


//     })
    
// }

// const navy = document.querySelector('nav')

// navy.addEventListener('click', (e)=>{
//     e.preventDefault();
//     document.querySelector('.active').classList.remove('active')   
//     e.target.classList.add('active')
// })

// const listy = document.getElementById('list')
// listy.addEventListener('click', (a)=>{
//     if (a.target.tagName === 'IMG') {
//         a.target.parentElement.remove()
//     }
// })

// const tree = document.getElementById('tree')
// tree.addEventListener('click',(e)=>{
//     if (e.target.tagName === 'LI' && e.target.querySelector('ul')) {
//         e.target.querySelector('ul').classList.toggle('hide') 
//     return false
//     }
// })



















