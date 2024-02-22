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

// let numOne = Math.floor(5.2)
// let numTwo = Math.floor(-5.2)

// numOne = Math.ceil(5.2)
// numTwo = Math.ceil(-5.2)

// numOne = 1.0005 + Number.EPSILON;
// numOne += Math.round(5.251361 * 100) / 100 // округляет число до целого
// console.log(+numOne.toFixed(1)) // преобразование строки в число путем "+"
// console.log(Number(numOne.toFixed(1))) // преобразование строки в число

// console.log(isNaN(25+'Hello')) // NaN никогда не равно NaN

// let valueOne = +'150'
// console.log(valueOne)
// console.log(typeof valueOne)

// let valueTwo = +'150px'
// valueTwo = parseInt('150.58px') // возвращает целое число
// valueTwo = parseFloat('150.58px') // возвращает число с плавающей точкой
// console.log(valueTwo)
// console.log(typeof valueTwo) // получить тип данных

// console.log((Math.random()*100).toFixed(0)) // возвращает случайное число, мое дополнение округление до целого числа
// console.log(Math.max(5, 85, -49)) // получает максимальное значение
// console.log(Math.min(5, 85, -49)) // получает минимальное значение
// console.log(Math.abs(-58)) // возвращает абсолютное значение числа
// console.log(Math.pow(5,2)) // возводит число в степень (число, степень)

// function getRandomInt(min, max) { // функция для случайного числа от min до max
// 	min = Math.ceil(min)
// 	max = Math.floor(max)
// 	return console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// }
// getRandomInt(1, 20)

// // Домашка!!!
// let num = Math.round(1.005 * 100) / 100
// console.log(num) // нужно прорешать!

// let sourseNum = 1.005 + Number.EPSILON
// let numOne = Math.round(sourseNum * 100) / 100
// console.log(numOne)
// // Домашка!!!

// 6.СТРОКИ
// let mes = 'What is it:'
// let str = `${mes}\nlive?\n\tlie?\n\t\tlove?` // \n позволяет перенести строку, \t добавить табуляцию
// str = `${mes} странный символ \\ и как написать кавычки \""` // чтобы добавить спецсимвол \ и " " нужно добавить еще один \\
// str = "Можно вставлять смайлики \u{1f60d}" // смайлики через utf 16
// console.log(str.length) // чтобы получить длинну строки
// console.log(str[2]) // чтобы получить конкретный символ строки
// console.log(str[str.length -1]) // чтобы получить последний символ строки

// for (const char of str) {
//     console.log(char)
// }

// let text = 'Hello world I love you!'
// console.log(text.toLocaleUpperCase()) // чтобы сделать всю строку в верхнем регистре
// console.log(text.toLocaleLowerCase()) // чтобы сделать всю строку в нижнем регистре

// console.log(text.indexOf('Hel')) // поиск совпадений в строке
// console.log(text.indexOf('Hel', 1)) // поиск совпадений в строке с конкретного номера буквы
// console.log(text.includes('Hel')) // поиск совпадений в строке но выдает true \ false

// console.log(text.slice(1, 4)) // вырезать часть строки
// console.log(text.slice(-4, -1)) // вырезать часть строки
// console.log(text.slice(2)) // вырезать часть строки

// 7.МАССИВЫ

// let mas = [ 	// в массив можно добавлять любой элемент, объект, значение
// 	'George',
// 	true,
// 	function () {
// 		console.log('Hello')
// 	},
// 	136,
// 	(newObject = {
// 		type: 'JS',
// 		age: 36,
// 		address: {
// 			city: 'asf',
// 			street: 'Russia',
// 		},
// 	}),
// 	[1, 2, 3],
// ]
// mas[2]() // чтобы вызвать функцию из массива, нужно указать индекс элемента и задать значения функции
// console.log(mas[4].age) // вызов элемента массива, если объект, можно вызвать конкретное значение

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// matrix[0] = 'Aaaa!' // замена элемента в массиве
// matrix[3] = 'Oooo!' // создание нового если длинна массива = 2

// console.log(matrix[0][0]) // в первых скобках указан индекс элемента массива, во вторых ключ позиции внутри элемента
// console.log(matrix.length) // длина массива





