// 1. ОПЕРАТОРЫ:
// let num = 124
// let str = 'Kykylaco'
// let strNum = '111'
// let strNot = ''
// let bul = true
// let bulNot = false

// res = num < strNum || (bul && bulNot && 1 && !null) || null
// res ? 'Ура!' : console.log('NOOOOO!')

// console.log(res ?? 'Error')

// 2. ЦИКЛЫ:
// let number = 0

// while (number <= 5) {
// 	console.log(number)
// 	number++
// }

// for (i=0; i<=10; i++){
//     if (i==3) continue //прерывает итерацию, но продолжает выполнение
//     console.log(i)
//     if (i==7) break // полностью завершает выполнение цикла
// }

// console.log(`Work is stop i = ${i}`)

// 3. ФУНКЦИИ:
// let mas = 'OOO';

// function glagolName (x) {
//     let mas = 'AAAAA'
//     console.log(x)
//     return mas
// }
// setTimeout(glagolName, 3000, 'Hi');

// glagolName('kok')
// console.log(glagolName('Da'))

// let strela = (text, name) => text + ',' + name +'!';
// console.log(strela('Hi', 'Goga'))

// // в скобках у функции и условий — это инструкции
// // бывают переменные и параметры (аргументы) функции (let, 1)

// 4. ОБЪЕКТЫ:
// let myObj = {
// 	name: 'Goga',
// 	age: 12,
// 	address: {
// 		city: 'asf',
// 		street: 'Russia',
// 	},
// 	// parents: {
//     //     mom: 'Fani'
//     // }
// }

// myObj.work = 'admin'
// delete myObj.address

// let user = Object.assign({}, myObj)
// delete user.age
// delete user.name

// console.log(myObj?.parents?.mom)
// console.log(user)

// конструктор объекта:
// function UserInfo(name, age, work) { // пишется с заглавной буквы имя функции создания объекта
//     this.name = name;
//     this.age = age;
//     this.work = work
// }

// console.log(new UserInfo('Goga', 132, 'admin'))

// 5. ЧИСЛА:
// let num = 1e6 // 1 / 1000000
// console.log(num)
// console.log(num.toString(8)) // конвертация в 2, 8, 16-ричную систему

// num = 1e-6
// console.log(num)

let numOne = Math.floor(5.2)
let numTwo = Math.floor(-5.2)

numOne = Math.ceil(5.2)
numTwo = Math.ceil(-5.2)

numOne = 1.0005 + Number.EPSILON;
numOne += Math.round(5.251361 * 10) / 10
console.log(+numOne.toFixed(1)) // преобразование строки в число путем "+"
console.log(Number(numOne.toFixed(1))) // преобразование строки в число
