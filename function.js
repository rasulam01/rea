'use strict'

// let checkType = function(data) {
//     console.log(data);
//     console.log(typeof data);
// }
// checkType(-34)
// checkType('dodo bird')
// checkType([])
// checkType(true)

// let DataTypesHelp = function() {
//     document.write('String' + '<br>' + 'Number' + '<br>' + 'NaN' + '<br>' + 'Null' + '<br>' + 'Object' + '<br>' + 'Undefined' + '<br>' + 'Boolean' + '<br>' + 'Symbol')
// }

// DataTypesHelp()


// let wwwww = function(n) {
//     for (let i = 1; i <= n; i++) {
    
//         if (i % 3 === 0) {
//             console.log('fizz')
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// wwwww()

// let income = prompt('Введите месячный доход, если это не составляет вашу личную тайну, конечно же:') / 30 
// let dailyIncomeLevel = function (income)  {
//     if (income <= 500) {
//         // console.log('Уровень дохода слишком низок!')
//         return 'Уровень дохода слишком низок!'
//     } else {
//         return 'Средний уровень дохода, нужно больше.' 
//     }
// }
// dailyIncomeLevel()

// function min(a, b, c) {
//     if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c) {
//         return b 
//     } else {
//         return c
//     } 
// }

// console.log(min(650, 325, 100))
// function pow(x, y) {
//     return x ** y
// }
// console.log(pow(6, 4))

function min(a, b) {
    if (a < b) return a
    else if (b < a) return b
    else return 'same'

}

console.log(min(1, 2));
console.log(min(-1, 0));
console.log(min(5, 2));

function pow(x, n) {
    if (x >= 1) return x ** n
    else if (x < 1) return 'Not allowed: only numbers starting from 1.'
}

console.log(pow(12, 3)); 
const blight = document.querySelector('#complexe')
const core = document.body

blight.addEventListener('click', function() {
    core.classList.toggle('sky')
})
