"use strict"

// const man = {
//     name: 'me',
//     year: 2003,
//     city: 'Maine',
//     getName: function() {
//         return this.name
//     },
//     getYear: function() {
//         return 2021 - this.year
//     },
//     getCity: function() {
//         return this.city
//     }
// }

// const mage = {
//     name: 'Harry',
//     surname: 'Slasher',
//     fullName: function() {       
//         return 'My name is ' + this.name + ' ' + this.surname
//     }
// }

// console.log(mage.fullName());

// let John = 1200;
// let Margareth = 2500;
// let Marie = 2400;
// let James = 2300;

// function getAvSalary() {
//   return (John + Margareth + Marie + James) / 4
// }

// console.log(getAvSalary());

// const salaries = {
//     John: 1200,
//     Margareth: 2500,
//     Marie: 2400,
//     James: 2300,
//     avgSalary: function() {
//     let ovr = 0;
//     let workers = 0;
//     for (let se in this) {
//         if (typeof this[se] === 'number') {
//             ovr += this[se]
//             workers++ 
//         } 
//     }
//     return ovr / workers
//     }
// }

// console.log(salaries.avgSalary());

// function whoAmI() {
//     return this.name
// }

// const user = {
//     name: 'User'
// }

// const admin = {
//     name: 'Admin'
// }

// user.func = whoAmI;
// admin.func = whoAmI;

// console.log(user.func());
// console.log(admin.func());

// function getPropsAndValues() {
//     for (let prop in this) {
//         console.log(prop + ' => ' + this[prop]);
//     }
// }



// const person = {
//     name: 'John',
//     age: 12,
//     city: 'New York',
//     getPropsAndValues: myFunc 
// }

// function myFunc() {
//     for (let prop in this) {
//         console.log(prop + ' => ' + this[prop]);
//     }
// }

// person.getPropsAndValues()

// const ob = {
//     _name: 'John',
//     getName: function() {
//         return this._name
//     },
//     setName: function(name) {
//         if (typeof name === 'string' && name.length >= 7) this._name = name
//     }
// }


// console.log(ob.getName());
// ob.setName('James')
// console.log(ob);

const me = {
    name: 'me',
    age: 32,
    job: 'anitor'
}

function Being(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job
    this.sayHi = function() {
        return 'Greetings, i am ' + this.name  
    }
}

const lad = new Being('Lad', 33, 'Janitor')
const john = new Being('John', 25)
john.job = 'Waiter'
john.at = 'Japanese restaurant'
john.specialties = 'Maths and Physics'
john.experience = '12 years'
console.log(john.sayHi());
console.log(lad.sayHi());
console.log(lad);
console.log(john);


function Student(name, surname, year) {
    this.name = name
    this.surname = surname
    this.year = year
    // this.getFullName = function() {
    //     return this.name + ' ' + this.surname
    // }
    // this.getCourse = function() {
    //     return 2021 - this.year
    // }
}

Student.prototype.getFullName = function() {
    return this.name + ' ' + this.surname
}
Student.prototype.getCourse = function() {
    return new Date().getFullYear() - this.year
}

const snooze = new Student('Jim', 'Carrey', 2018)

console.log(snooze);
console.log(snooze.getFullName());
console.log(snooze.getCourse());



function Calculator() {
    this.read = function() {
        this.firstNum = +prompt('First number:')
        this.secondNum = +prompt('Second number:')
    }
    this.summary = function() {
        return this.firstNum + this.secondNum
    }
    this.multiply = function() {
        return this.firstNum * this.secondNum
    }
}

// function Accumulator() {
//     this.list = []
//     this.sum = 0
//     this.read = function(){
//         let n
//         do {
//             n = +prompt('Enter the number:')
//             this.list.push(n)
//             this.sum += n
//         } while (n)
//     }
//     this.total = function(){
//         this.end = new Object()
//         this.end.list = 'List: ' + '[' + [this.list] + ']'
//         this.end.sum = 'Summary: ' + this.sum 
//         return this.end
//     }
// }

// const acc = new Accumulator()
// acc.read()
// console.log(acc.total());

// const calc = new Calculator()
// calc.read()
// console.log(calc.summary());
// console.log(calc.multiply());

const h2 = document.querySelector('h2')
let date = new Date()

setInterval(function(){
    let hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    let seconds = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
    h2.textContent = hours + ":" + minutes + ":" + seconds;
}, 1000)



const user = {
    eats: true,
    getName() {
        return this.name
    }
}

const johnny = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

johnny.__proto__ = user
console.log(johnny);
console.log(johnny.getName());
console.log(johnny.eats);

const johnnyWork = {
    place: 'Cafe'
}

johnnyWork.__proto__ = johnny
console.log(johnnyWork);


const animal = {
    jumps: null
};
const rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);
delete rabbit.jumps;

console.log(rabbit.jumps);


const person = {
    eats: true,
    walks: true
}

const Johndo = {
    __proto__: person,
    name: 'Johndo',
    swims: true,
    age: 27,
    job: 'Teacher'
}

console.log(Johndo.eats);
console.log(Johndo.walks);
console.log(Johndo.hasOwnProperty('eats'));
console.log(Johndo.hasOwnProperty('walks'));
console.log(Johndo);


const a = new Being('a', 10)
const b = new Being('b', 15)
const c = new Being('c', 20)

console.log(a);
console.log(b);
console.log(c);

Being.prototype.sayHi = function() {
    return 'I am ' + this.name
}

console.log(a.sayHi());
console.log(b.sayHi());
console.log(c.sayHi());

console.log(a.__proto__ === Being.prototype);

 


function MyString(str) {
    this.str = str
}

let str = new MyString();

MyString.prototype.reverse = function(str){
    let spl = str.split("");
    let rev = spl.reverse();
    let joy = rev.join("");
    return joy
}
MyString.prototype.ucFirst = function(str){
    let joy = str[0].toUpperCase() + str.slice(1, str.length)
    
    return joy

}
MyString.prototype.ucWords = function(str){
    return str.split(' ').map(item => {
        return item[0].toUpperCase() + item.slice(1, str.length)
    }).join(' ')
    

}

console.log(str.reverse('extraterrestrial combat'));
console.log(str.ucFirst('extraterrestrial combat'));
console.log(str.ucWords('extra terrestrial combat'));


















