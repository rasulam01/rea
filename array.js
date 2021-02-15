"use strict"
//  let car = {
//      brand: 'BMW',
//      year: 2016,

// }
//  car.steeringWheel = true
//  console.log(car);

//  let obj = new Object()
//  console.log(obj);

//  obj.arr = ['slan', 'griffith']
//  console.log(obj);

//  obj.color = 'grim dark'
//  car.style = obj
//  car.style.color = 'lighthearted blue'
//  console.log(car);

// car.go = function(speed) {
//     console.log(`Скорость автомобиля - ${speed} км/ч`);
// }
// car.go(160)


// let massive = [3, 6, 12, 24, 48]
// console.log(massive.splice(1, 2, 'faggot', 'loser'));
// console.log(massive.join(', '));
// console.log(massive.reverse());
// let array = ['sexist!', 'transphobic', 'homophobic']
// console.log(massive.concat(array));
// console.log(massive.slice(1));
// massive.unshift('bigot')  
// massive.push('misogynist')

// console.log(massive);
// massive.shift()
// massive.pop()
// massive.slice()
// massive.splice() 
// delete massive[]

// let humanbeingBase = {
//     'Лев' : 2002,
//     'Тигриный' : 1999,
//     'Нереальный' : 1996,
//     'Бескомпромисный' : 2005,
//     'Typical Extraterrestrial Combat Soldier' : 2040,
// }

// alert('In the first age, in the first battle, when the shadows first lengthened, one stood. Burned by the embers of Armageddon, his soul blistered by the fires of Hell, tainted beyond ascension. He chose the path of perpetual torment. In his ravenous hatred he found no peace ')

// console.log(humanbeingBase);

// let letters = ['a', 'b', 'c']
// let numeros = [1, 2, 3]
// console.log(letters.concat(numeros));

// let errrr = [1, 2, 3, 4, 5]
// errrr.splice(3, 0, 'a', 'b', 'c');
// console.log(errrr);

// let insults = [4, 8, 16, 32/5, 2**35, 2**9]

// for (let i = 0; i < insults.length; i++) {

// }
// insults.forEach(function(item) {
//     console.log(item);
// })

// for(let key in car) {
//     console.log(key, car[key]);
// }

// for(let item of insults) {
//     console.log(item);
// }

// fruitList = []

// fruitAmount = +prompt('Сколько у вас любимых фруктов?')
// for (let i = 0; i <= fruitAmount - 1; i++) {
//     fruit = prompt('Каковы же фрукты?')
//     fruitList.push(fruit)
    
// }

// fruitList.forEach(function(item, i) {
//     if (item === 'apple') {
//         fruitList.splice(i, 1)
//     }
// })

// console.log(fruitList.join(', '));

// let humanBeing = {
//     'name' : 'lev',
//     'age' : 22,
//     'favouriteBooks' : ['451', 'War and Peace']
//     'appearanceFeatures' : 'longHair', 'blueEyes', 'hairyHands'

// }

// let s = 5.33
// console.log(Math.ceil(s));
// console.log(Math.floor(s));
// console.log(Math.sqrt(1296));
// console.log(Math.cbrt(27));
// console.log(Math.pow(12, 4));
// console.log(Math.floor(Math.random() * 250));


// let number = Math.ceil(Math.random() * 100);

// function createNumber() {   
//     console.log(number);
// }

// function askAndCompareNumber() {
//     let answer = +prompt('Отгадайте число от 0 до 100:')
//     if (answer < number) {
//         alert('Слишком маленькое число. Попробуйте ещё раз.')
//         askAndCompareNumber()
//     } else if (answer > number) {
//         alert('Слишком больше число. Попробуйте ещё раз.')
//         askAndCompareNumber()
//     } else if (answer === number) {
//         alert('Вы угадали число!')
//         break
//     } 
// }

// function randomNumber() {
//     createNumber()
//     askAndCompareNumber()
// }

// randomNumber()

// let ar = [1, 2, 3, 4, 5]

// let people = [
//     {name : 'tiger', age : 5, occupation : 'child'},
//     {name : 'woods', age : 23, occupation : 'golf'},
//     {name : 'michael', age : 43, occupation : 'swim'},
//     {name : 'phelps', age : 21, occupation : 'ssss'},  
// ]

// for loops
// for(let i = 0; i < ar.length; i++) {
//     console.log(ar[i]);
// }

// for(let item of people) {
//     console.log(item);
// }

// ar.forEach((item, i) => console.log(item, i));



// Методы стрелочные =>
// x()
// function x() {
//     alert('x')
// }

// let u = function() {
//     alert('u')
// }
// u()


// let t = () => {
//     alert('r')
// }
// t()



// let sum = 0
// let massive = [6, 32, 55, 77, 91, 102]
// let d = massive.length


// function sumInput() {
//     massive.forEach((item => sum += item))
//     massive.splice((Math.ceil(d) / 2), 0, 'середина')
//     console.log(sum);
//     console.log(massive);

// }
// sumInput()


// Функция map
// Квадраты чисел
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let numsMap = nums.map(Square)

// function Square(num) {
//     return num * num;
// }
// console.log(nums);
// console.log(numsMap);

// // Длины элементов
// let elementTable = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']
// let elementTableMap = elementTable.map(Length)

// function Length(word) {
//     return word.length
// }
// console.log(elementTable);
// console.log(elementTableMap);


// let words = ['Ceb', 'Ceeb', 'Ceeeb', 'Ceeeeb', 25, 59, 80, 99]
// let loop = words.filter(word => typeof word !== 'string');
// console.log(loop);

// let school = [
//     {name: 'Kate', age: 30, status: 'teacher'},
//     {name: 'Lilu', age: 13, status: 'schoolgirl'},
//     {name: 'John', age: 28, status: 'teacher'},
//     {name: 'Ivan', age: 35, status: 'rector'},
// ]

// let fil = school.filter(person => person.age >= 30)
// console.log(fil);

// let nu = [3, 42, 12, 8, 9, 10, 12, 20, 23, 27, 1, 4]

// console.log(nu.find(number => number % 2 === 0));
// console.log(nu.findIndex(number => number % 2 === 0));

// console.log(nu.some(number => number < 0));
// console.log(nu.every(number => number >= 0));

// способы обратиться к элементу в js
// .getElement
// const headline = document.querySelector('#headline')
// console.log(headline);
// const paragraph = document.querySelector('[title="параграф"]')
// console.log(paragraph);
// const text = document.querySelectorAll('.text')
// console.log(text);
// headline.style.color = 'lime'
// paragraph.style.fontSize = '52px'

// setTimeout(() => {
//     text.forEach(item => item.style.background = 'coral')
//     text.forEach(item => item.style.color = 'plum')
//     headline.style.color = 'turquoise'
//     paragraph.style.fontWeight = '900'
    
// }, 3000);

// // headline.setAttribute('title', 'idiot')
// // console.log(headline.getAttribute('title'));
// headline.classList.add('p')

// const noo = document.querySelector('[title="noob"]')
// console.log(noo);
// noo.style.fontSize = '50px'

const list = document.querySelectorAll('.collection'),
element = document.querySelectorAll('.elem')
const head = document.querySelector('h2')
// head.insertAdjacentText('beforebegin', 'trouve')
// head.insertAdjacentText('beforeend', 'oui')
// head.insertAdjacentText('afterbegin', 'terre')
// head.insertAdjacentText('afterend', 'tant')
// head.insertAdjacentElement('beforebegin', element[0])
// head.insertAdjacentElement('afterbegin', element[1])
// head.insertAdjacentElement('beforeend', element[2])
// head.insertAdjacentElement('afterend', element[3])

console.log(list, element);
const d = document.querySelector('.call')

d.insertAdjacentHTML('beforebegin', '<i>non</i>')
d.insertAdjacentHTML('beforeend', '<del>oui</del>')
d.insertAdjacentHTML('afterbegin', '<u>terre</u>')
d.insertAdjacentHTML('afterend', '<b>trouve</b>')


//  element[4].remove()
// list[1].append(element[3])
// list[1].prepend(element[2])
// list[0].before(element[5])
// list[0].after(element[5])

element[0].textContent = "Earth"
element[1].textContent = "Exultia"
element[2].textContent = "Hebeth"
element[3].textContent = "Sentinel Prime"
element[4].textContent = "Taras Nabad"
element[5].textContent = "Nekravol"

// element[0].innerHTML = '<a href="">HyperReference</a>'
const btn = document.querySelector('#button')


btn.addEventListener('click', function() {
    btn.style.padding = '24px'
})
btn.addEventListener('click', function() {
    btn.style.border = '5px double lime'
})

const small = document.querySelector('h3')
const bright = document.querySelector('#theme')
const body = document.body
bright.addEventListener('click', function() {
    body.classList.toggle('darktheme')
})

small.addEventListener('click', function() {
    small.style.background = 'black',
    small.style.color = 'white'
})

const gallery = document.querySelector('.pics')
const pic = document.querySelectorAll('.pic')
const ceb = document.querySelector('#noceb')


ceb.addEventListener('click', function() {
    pic[pic.length - 1].remove()
})

// const myFunc = () => {}
// const secondFunc = x => console.log(x);

 
// const biggestNumber = (arr) => {
//       let num = arr[0]
//       for (let i = 0; i < arr.length; i++) {
//          if (num < arr[i]) num = arr[i]
       
        
       
//      }
//      return num
// }

// console.log(biggestNumber([3, 6, 4, 1]));

// // console.log({} === {});
// // console.log([] === []); /// False: сами объекты и массивы разные, пусть их содержимое идентично.


// const findTen = (massive, ten) => {
//     let number = massive[0]
//     for (let i = 0; i < massive.length; i++) {
//         if (massive[i] === ten) return i
        
        
//     }
    
//     return 'No 10-s found.'
// }

// console.log(findTen([2, 9, 3, 10], 10));

// const n = 25
// function twoDigitsSum(n) {
//     return n[0] + n[1]
// }

// console.log(twoDigitsSum(n));

// const massive = [4, 5, 7, 15]
// function swapElements(massive) {
//     const first = massive[0]
//     const last = massive[massive.length - 1]
//     massive[0] = last
//     massive[massive.length - 1] = first 
//     return massive
// }
// console.log(swapElements(massive));

// const colon = [5, 6, 7, 8, 9, 13, 22, 35]
// let value = 0
// function MassiveAverage(colon) {
//     for (let i = 0; i < colon.length; i++) {
//         value += colon[i]

//     }
//     const average = value / colon.length
//     return average
// }

// console.log(MassiveAverage(colon));

// const num = 30
// function twentyFiveDifference(num) {
//     if (num < 25) {
//         const lesser = 25 - num
//         return lesser
//     } else if (num > 25) {
//         const bigger = num - 25
//         return bigger * bigger
//     }
// }
// console.log(twentyFiveDifference(num));

// const temp = 30
// const cel = (temp - 32) * 5/9
// const fah = (temp * 9/5) + 32

// function toCels(cel) {
//     return cel
// }
// console.log(toCels(cel));

// function toFahr(fah) {
//     return fah
// }
// console.log(toFahr(fah));

// const key = 75
// function isNatural(key) {
//     if (isNaN(key)) return 'That is not a number.'
//     else if (key <= 0) return 'The number is less than 0.'
//     else if (key === Infinity) return 'The number is infinite.'
//     else if (key !== parseInt(key)) return 'The number is a float.' 
//     else return true     
// }

// console.log(isNatural(key));

// const num = 35.5
// function customRound(num) {
//     if (isNaN(num)) return 'Not a number.'
//     if (parseInt(num) === num) return 'Not a float.' 
//     num = String(num)
//     let dot = num.indexOf('.')
//     let after = num[dot+1]
//     if (after >= 5) return Number(num.slice(0, dot)) + 1    
//     return Number(n.slice(0, dot))
    
// }

// console.log(customRound(num));

// const pond = 5
// function isInteger(pond) {
//     if (isNaN(pond)) return 'That is not a number.'
//     if (parseInt(pond) !== pond) return 'The entered number is a float.'
//     if (pond === Infinity) return 'Can\'t define Infinity.'
//     else return true
    
    
// }

// console.log(isInteger(pond));

// const sentence = ("This is my test string to practice the JavaScript string function concepts. This is going to be fun.");
// console.log(`${sentence} ${sentence.length}`);
// const dot = sentence.indexOf('.')
// const firstSentence = sentence.slice(0, dot)
// console.log(firstSentence.length);
// const secondSentence = sentence.substring(74)
// console.log(secondSentence.length);
// const firstThis = sentence.indexOf('This')
// console.log(firstThis);
// const secondThis = sentence.lastIndexOf('This')
// console.log(secondThis);
// const beginning = sentence.substring(0, 13)
// console.log(beginning);
// const end = sentence.substring(sentence.length - 13)
// console.log(end);

// let str1 = 'Today is ';
// let str2 = '  A beautiful day  ';
// let str3 = ' In Hawaii.  ';
// let str2Trimmed = str2.trim()
// let str3Trimmed = str3.trim()
// let str2Lower = str2Trimmed.toLowerCase()
// let str3Lower = str3Trimmed.toLowerCase()
// const wholeString = str1 + str2Lower + str3
// console.log(wholeString);

// const object = {
//     name: 'boranija',
//     age: 22,
//     occupation: 'burger',
// }

// const objectCopy = {}



// for (const info in object) {
//     console.log(object[info] + 'bezdarniy');
// }

// for (const info in object) {
//     objectCopy[info] = object[info]
// }
// console.log(objectCopy.hasOwnProperty('occupation'));
// // delete objectCopy.occupation
// console.log(objectCopy);
// console.log(object);
// console.log(objectCopy.hasOwnProperty('occupation'));


// const car = {
//     brand: 'Audi',
//     model: 'Q5',
// }

// console.log(car);


// car.brand = 'Chevrolet'
// car.model = 'Camaro'

// console.log(car);

// delete car.brand

// console.log(car);

// for (const key in object) {
//     console.log(object[key]);
//     console.log(objectCopy[key]);
//     console.log(object[key] === objectCopy[key]);
// }

// function isEmpty(object) {
//     for (const key in object) {
//         return false
//     }
//     return true
// }
// const ob = {}
// console.log(isEmpty(object));
// console.log(isEmpty(objectCopy));
// console.log(isEmpty(ob));
// console.log(isEmpty({}));

// const products = {
//     apples: 55,
//     grapes: 100,
//     bread: 25,
//     water: 10
// }

// let sum = 0
// const productSum = products => {  
//     if (isEmpty(products)) return 'The list is empty.'
//     for (let key in products) sum += products[key]  
//     return sum
// }

// console.log(productSum(products));

// const mass = {
//     massive: 'no',
//     tiny: 'probably',
//     average: 'yes!',
// }

// const listKeys = products => {
//     const massive = []
//     if (isEmpty(products)) return 'The list is empty!'
//     for (const key in products) massive.push(key)
//     return massive
// }

// console.log(listKeys(products));

// const hoodwink = ['regex', 'search', 'beautifulSoup', 'pytz']

// let makeDynamicObject = hoodwink => {
//     if (isEmpty(hoodwink)) return 'The array is empty!'
//     let list = {}
//     for (const name in hoodwink) list += hoodwink[name]
//     return list

// }

// console.log(makeDynamicObject(hoodwink));


// let info = {
//     name: 'raccoon',
//     age : 3.5,
//     attributes: ['striped tail', 'burnt face'],
//     family: {
//         parents: 'father',
//         relatives: 'uncle',
//     },
//     revealInfo: function() {
//         console.log(this.name);
//     }
// }

// info.revealInfo()


// const exploiter = {
//     mane: 'Lev',
//     birthYear: 1995,
//     age: function(birthYear) {
//         return 2020 - birthYear
//     },
//     call: function() {
//         console.log('Bienvenue, ' + this.mane);
//     },
//     information: function() {
//         console.log(this);
//     }
// }
// exploiter.age()
// exploiter.call()
// exploiter.information()



// const wall = {
//     bricks: 775,
//     cementMixtures: 660,
//     totalCost: function() {
//         return wall.bricks + wall.cementMixtures
//     }
// }

// console.log(wall.totalCost());

// const numbermass = {
//     nubers: [2, 22, 35, 2, 1, -5, 7],
//     calculation: function() {
//         let result = 0
//         for (let i = 0; i < this.nubers.length; i++) {
//         if (this.nubers[i] % 2 === 0) result += this.nubers[i]
//         } 
//         return result * -1
//     }
// }

// console.log(numbermass.calculation());

// const lad = {
//     surname: 'me',
//     getName() {return this.name},
//     setName(name) {this.name = name}
// }


// let user = {
//     a: 15,
//     b: 30,
//     sum() {
//         return user.a + user.b
//     }
// };

// let admin = user;
// user = {}

// console.log(admin.sum());

// let string = "ScRipt is a programming language"
// const space = string.split(' ')
// if (string.toLowerCase().indexOf('script') === 0) {
//     string = 'Java' + string
// }

// if (space[0].toLowerCase() === 'script' && space[0].length === 6) {
//     space[0] = 'JavaScript'
// }

// let s = space.join(' ')
// console.log(s);


// const filmGenres = ['action', 'comedy']
// console.log(filmGenres);
// filmGenres.push('drama')
// console.log(filmGenres);
// filmGenres[Math.floor(filmGenres.length/2)] = 'fantasy'
// console.log(filmGenres);
// filmGenres.shift()
// console.log(filmGenres)
// filmGenres.unshift('horror', 'thriller')
// console.log(filmGenres);


// const fff = [123, 456, 789]
// const matrix = []
// for (let i = 0; i < fff.length; i++) {
//     matrix.push(String(fff[i]).split(''))
// }
// console.log(matrix);

// alert('Take it. It will give you strength, help you on your journey. If you can withstand the power surge.')
// alert('That was pure Argent Energy')

// const can = [1, 3, 6, 10, 15, 21, 28]
// const newCan = can.map((item) => {
//     return item + 2
// })

// console.log(newCan);

// const sponsors = ['Coca-Cola', 'Nike', 'Adidas', 'P&G']
// const sponsorsShort = sponsors.filter((item) => {
//     if (item.length > 4) return item
// })
// console.log(sponsorsShort);

// const nums = [33, 36, 16, 25, 125, 625]
// const numsSqrt = []
// const calculs = nums.map((item) => {
//     numsSqrt.push(Math.sqrt(item))
//     return numsSqrt
// })

// console.log(numsSqrt);


// const positions = [1, 2, 3, 4, 5, 6, 7, 8]
// const positionsSecondHalf = []
// const positionsPurge = positions.filter((item, i) => {
//     return i >= Math.floor(positions.length/2)
// })

// console.log(positionsPurge);


// const warp = ['music', 'Colorado', 'people', 'woman', 'flex']
// const praw = []
// const warpReversed = warp.map((item, i) => {
//     praw.push(warp[i].split('').reverse().join(''))
// })

// console.log(praw);

// const eff = [123, 456, 789]
// const ffe = []
// const fef = eff.map((item) => {
//     return String(item).split('').map(item => Number(item))
// })


// console.log(eff);

// const ids = [
//     {age: 25, name: 'me'},
//     {age: 24, name: 'je'},
//     {age: 29, name: 'qe'},
//     {age: 20, name: 'ae'}
// ]

// ids.sort((a,b)=>a.age - b.age)
// console.log(ids);

// function sortMassive(ids) {
//     return ids.sort((a,b)=>a.age - b.age)
// }

// console.log(sortMassive(ids));

// const eee = eff.reduce((sum,item) => {
//     return sum+=item
// }, 0)
// console.log(eee);

// eff.splice(1, 2, 1222)
// console.log(eff);


// const dup = [1, 1, 2, 3, 2, 1, 4, 5, 5]
// const juxt = dup.filter((item,index) => dup.indexOf(item) === index)
// console.log(juxt)



















































