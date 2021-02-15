'use strict'

// const board = document.body.firstElementChild
// console.log(board);

// for (let i = 0; i < board.rows.length; i++) {
//     let row = board.rows[i];
//     row.cells[i].style.backgroundColor = 'red'
// }




// lot.forEach(item => {
//     console.log(item.firstChild)
// })

// const lot = document.body.querySelectorAll('li')

// const lots = []
// lot.forEach(item => {
//     lots.push(item.firstChild.textContent.trim())
// })

// console.log(lots);




let ten = document.body.querySelector('div')
ten.style.fontSize = '100px'
ten.style.fontFamily = 'Permanent Marker'
ten.style.textAlign = 'center'

let ben = setInterval(() => {
    ten.innerHTML--
    if (ten.innerHTML == -1) {
    ten.innerHTML = 10
    // clearInterval(ben)
    }

}, 950)



// const imp = document.querySelector('input')
// imp.classList.add('ethereal')
// imp.classList.remove('battleship')
// imp.classList.toggle('uber') // (true, false)
// imp.classList.contains('uber')
// console.log(imp.classList.item(0));




// console.log(imp);
// console.log(imp.classList);
// console.log(imp.classList.value);
// console.log(imp.classList.length);

// let user = document.getElementById('users')

// console.log(user);
// user.className = 'example for you'
// console.log(user);
// user.classList.add('changed')
// console.log(user);
// user.classList.remove('for')
// console.log(user);
// user.classList.toggle('show')
// console.log(user);
// user.classList.contains('for')
// console.log();
// user.classList.contains('example')
// console.log();
// console.log(user.classList.length);
// setInterval()
// clearInterval()

// const arr = [1, 2, 3, 4, 5]


// function summary() {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//         console.log(result);
//     }
// }

// console.log(summary(arr));




// const reducer = arr.reduce(function(a, b) {
//     return a + b;
// })

// console.log(reducer);



// const genObject = (name, value) => {
//     return {
//         [name]: value
//     }
// }

// console.log(genObject('name', [1, 4, 7, 10]));


// const mass = [
//     {id: 10, color: 'red'},
//     {id: 20, color: 'blue'},
//     {id: 30, color: 'green'}
// ]

// const arrToObj = (id, color) => {
//     let ob = {}
//     for (let i = 0; i < mass.length; i++) {
//         ob.id = mass[i].id
//         ob[[i][id]] = mass[i].color
//         console.log(ob);
//     }
// }

// console.log(arrToObj(mass));

// const obj = {
//     "1": 5,
//     "2": 6,
// }

// const ar = []

// for (let key in obj) {
//     ar.push([key, obj[key]])
    
// }
// console.log(ar);

// 1 задача
// const users = {
//     user1: 'Michel',
//     user2: 'John',
//     user3: 'James'
// }

// for (let key in users) { 
//     console.log(key + ' => ' + users[key]);
// }

// delete users.user1
// console.log(users);

// users.newUser = 'Spider Man'
// console.log(users);

// for (let key in users) {
//     if (key.startsWith('u')) delete users[key]  
// }
// console.log(users);

// 2 задача
// const person = {
//     name: 'Leonardo',
//     birthYear: 1986,
//     city: 'Los Angeles',
//     job: 'Pilot'
// }

// const getAge = () => {
//     return 2021 - person.birthYear
// }
// console.log(getAge());

// const getName = () => {
//     return 'My name is ' + person.name 
// }
// console.log(getName());

// const getCity = () => {
//     return 'I am from ' + person.city
// }
// console.log(getCity());

// 3 задача
// const cars = ['audi', 'bmw', 'bentley', 'honda', 'jeep', 'kia', 'infiniti', 'jaguar']
// const noB = cars.filter(function(bStart){
//     return bStart.indexOf('b') !== 0
// })
// console.log(noB)

// 4 задача
// const numero = [77, 22, 90, 35, 76]
// const numeroPlusCent = []
// for (let i = 0; i < numero.length; i++) {
//     numeroPlusCent.push(numero[i])
//     numeroPlusCent[i] += 100
// }
// console.log(numeroPlusCent);


// 5 задача
// const deux = [20, 11, 77, 99, 105]
// const onzeDivide = []
// for (let i = 0; i < deux.length; i++) {
//     if (deux[i] % 11 === 0) onzeDivide.push(deux[i])
    
// }
// console.log(onzeDivide);

// const elevenDivide = deux.filter(function(eleven){
//     return eleven % 11 === 0
// })
// console.log(elevenDivide);

// 6 задача
// const types = [NaN, 0, 15, false, -22, undefined, 47, null]
// for (let i = 0; i < types.length; i++) {
//     console.log(typeof types[i]);
//     if (typeof types[i] !== 'number' || types[i] !== types[i]) delete types[i]
// }
// console.log(types);

// const onlyNumbers = types.filter(function(verifiedNumber){
//     return typeof verifiedNumber === 'number' && verifiedNumber === verifiedNumber
// })
// console.log(onlyNumbers);

// const filterArray = (arr) => {
//     for (let item of arr) {
//         if (typeof item === 'number' || item === item) return item
//     }
// }
// console.log(filterArray(types));

// 7 задача
// const set = [8, 2, 1, 4, 5, 1, 6, 5, 7, 8]
// for (let i = 0; i < set.length; i++) {
//     if (set.indexOf(set[i]) !== i) delete set[i]
// }
// console.log(set);

// const noRepeat = set.reduce(function(x, y){
//     if (set.indexOf(x) !== y) x = 0
// })
// console.log(noRepeat);

// const regex = 'Это круглый мяч. этот мяч используется для футбола.'
// const reg = /мяч/g;
// console.log(regex.match(reg));
// console.log(regex.match(reg).length);
// const reg1 = /это/gi
// const result = regex.match(reg1)
// console.log(regex.match(reg1));
// console.log(result.length);
// console.log(regex.match(/ /g).length);
// console.log(regex.replace(/\./, '!'));
// // regex = regex.replace(/\./, '!');
// console.log(reg.test(/мяч/g));

// const part = 'Главное - участие, а не76  победа!! Участие77 оставляет78 некий полезный опыт.'

// const victory = /победа/g;
// const participate = /участие/gi
// const space = / /g
// const doubleExclamation = /!!/g
// const doubleSpace = /  /g
// console.log(part.match(victory));
// console.log(part.match(participate));
// console.log(part.match(space));
// console.log(part.replace(doubleExclamation, '!'));
// console.log(part.replace(doubleSpace, ' '));

// const teleNumber = "+7(903)-123-45-67"
// console.log(teleNumber.match(/\d/g))
// console.log(teleNumber.match(/\D/g));

// const done = 'Hello, my name is John! Привет, меня зовут Джон! Мне 25 лет.'
// console.log(done.match(/\S[a-zA-Z]/g))
// console.log(done.match(/\S[а-яА-Я]/g));
// console.log(done.match(/\D/g));




















