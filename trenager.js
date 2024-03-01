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

// console.log(text.splice(1, 4)) // вырезать часть строки
// console.log(text.splice(-4, -1)) // вырезать часть строки
// console.log(text.splice(2)) // вырезать часть строки

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

// методы push и pop выполняются быстро, потому что им не нужно ничего менять; в свою очередь, метод unshift и shift выполняются медленно, потому что им нужно добавить элемент в начало массива, затем переназначить индекс всех элементов массива и изменить свойство length (длинна массива)

// delete matrix[2]

// console.log(matrix)
// console.log(matrix.length)

// splice позволяет удалять, добавлять и изменять элементы массива
// let arrOne = ['Goga', 'Alena', 'Sonia', 'Nick', 'Natalia']
// arrOne.splice(1, 1) // позволят удалять элемент (индекс позиции, кол-во удаляемых эл.)
// console.log(arrOne)

// let removed = arrOne.splice(1, 2) // позволяет вырезать и передать в новую переменную элемент
// console.log(removed)

// removed.splice(0, 1, 'Tereza') //заменяет одно один элемент
// console.log(removed)

// arrOne.splice(0, 0, 'Tereza', 'Gala') //добавляет два элемента перед (позиция эл, обязательно 0 — значит добавление)
// console.log(arrOne)

// arrOne.splice(-1, 1) // удаляет последний элемент массива (-1 с конца, кол-во эл.)
// console.log(arrOne)

// создание нового массива:
// let arrOne = ['Goga', 'Alena', 'Sonia', 'Nick', 'Natalia']
// let arrTwo = arrOne.slice(1, 2) // вырезает часть массива и передает его новой переменной
// console.log(arrTwo)
// console.log(arrOne)

// let arrThree = arrOne.slice(-2, -1) //в новой переменной дает значение вырезаемой предпоследний эл массива
// console.log(arrThree)

// let arrFour = arrOne.slice() //полностью вырезаем массив и передает его значение новой переменной
// console.log(arrFour)

// let arrOne = ['Goga', 'Alena', 'Sonia', 'Nick', 'Natalia']
// let arrTwo = arrOne.concat('Rusya') // создает дубликат массива и дополняет его значение
// console.log(arrTwo)

// console.log(arrOne.indexOf('Goga')) // поиск в массиве, показывает индекс позиции
// console.log(arrOne.indexOf('Basya')) // выдаст -1 если нет значения
// console.log(arrOne.lastIndexOf('Goga', 1)) // также -1 если оно указано с конкретного индекса, после которого уже нет элемента; поиск идет с права на лев

// console.log(arrOne.includes('Goga')) // поиск в массиве, выдает true или false
// console.log(arrOne.includes('Basya')) // выдаст false если нет значения
// console.log(arrOne.includes('Goga', 1)) // также false если оно указано с конкретного индекса, после которого уже нет элемента

// Поиск по объектам внутри массивов:
// let arr = [
//     {name: 'Goga', age: 27},
//     {name: 'Kola', age: 2},
//     {name: 'Alena', age: 'NaN'},
// ]

// let resOne = arr.find(function (item, index, array){ // функция для возврата целого объекта из массива
//     return item.age === 2
// })

// let resOne = arr.find(item => item.age === 2) // такая же как и верхняя, только стрелочная
// console.log(resOne)

// let resTwo = arr.findIndex(item => item.age === 27) // возвращает позицию элемента
// console.log(resTwo)

// let resThree = arr.filter(item => item.age <=27) // возвращает массив элементов удовлетворяющих данное условие
// console.log(resThree)

// Сортировка массивов:
// let arrOne = [
// 	'Сарра',
// 	'Миэль',
// 	'Лили',
// 	'Гуга',
// 	'Мара',
// 	'Браум',
// 	'Утер',
// 	'Бардин',
// 	'Эийя',
// ]
// console.log(arrOne.sort()) // сортирует по алфавиту
// console.log(arrOne.reverse()) // сортирует по алфавиту в обратном порядке

// let arrTwo = [4, 64, 72, 2, 7, 4, 9, 10, 1, 23]
// console.log(arrTwo.sort()) // неверное сортирует
// console.log('9' > '72') // возвращает true потому что другая система измерения
// console.log(arrTwo.sort((a,b) => a-b)) // стрелочная функция, которая позволяет верно сортировать массив чисел

// Преобразование массива:
// let arrOne = [
// 	'Сарра',
// 	'Миэль',
// 	'Лили',
// 	'Гуга',
// 	'Мара',
// 	'Браум',
// 	'Утер',
// 	'Бардин',
// 	'Эийя',
// ]

// let result = arrOne.map(item => item[0]) // преобразовывает массив и вызывает функцию для каждого элемента массива (выводит 0 индекс каждого элемента)
// console.log(arrOne)
// console.log(result)

// let str = 'Дядя | Ваня | хрен столовый'
// let arr = str.split('|') // позволяет преобразовать строку в массив .split(указать заданный разделитель элементов массива (могу быть , / | . и т.п.))
// arr = str.split('|', 2) // цифра ограничивает количество элементов
// console.log(arr)

// let obj = {}
// let arr = ['Goga', 'Kola', 'Alena']
// let str = arr.join('|') // преобразование массива в строку с указанием разделителем
// console.log(str)

// console.log(typeof obj) // в обоих случаях он покажет, что это объекты
// console.log(typeof arr)

// if (Array.isArray(arr)) { // проверка на массив
//     console.log('Is Array')
// } else {
//     console.log('Is not Array')
// }

// Перебор массива
// let arr = ['Сарра', 'Миэль', 'Лили', 'Гуга', 'Мара', 'Браум']

// for (i = 0; i < arr.length; i++) { // перебор массива, каждого элемента
// 	console.log(arr[i])
// }

// for (let arrItem of arr) { // также перебор, но новая переменная arrItem берет перебирает значения массива
//     console.log(arrItem)
// }

// arr.forEach((item, index, array) => { // метод перебора массива, скорее всего item, index, array являются зарезервированными словами
//     console.log(`${item} находится на ${index} позиция в массиве: "${array}"`)
// })

// Домашнее задание:
// let arrDz = ['Ваня', 'Иштван']
// arrDz.push('Оля')
// arrDz.splice(1, 1, 'Petya')
// dz = arrDz.slice(0, 1)
// arrDz.slice(0, 1)
// arrDz.unshift('Masha', 'Pasha')
// console.log(dz)
// console.log(arrDz)


// 8. DOM 

// const bodyElement = document.body // получить доступ к DOM дереву
// const firstChildNode = bodyElement.firstChild // получить доступ к первому потомку элемента
// const lastChildNode = bodyElement.lastChild // получить доступ к последнему потомку элемента

// console.log(bodyElement)
// console.log(firstChildNode)
// console.log(lastChildNode)

// const childNodes = bodyElement.childNodes // получить доступ к коллекции DOM дерева (некий массив, но не массив)
// console.log(childNodes)
// console.log(bodyElement.hasChildNodes())

// поиск по конкретным селекторам и классам:

// const elemsOne = document.querySelectorAll('.container2') // поиск по классу
// console.log(elemsOne)

// const elemsTwo = document.querySelectorAll('span') // поиск по тегу
// console.log(elemsTwo)

// const elemsThree = document.querySelectorAll('p.welcome') // поиск по тегу с конкретным классом
// console.log(elemsThree)

// const elemsFour = document.querySelectorAll('.skill>span') // поиск по первого дочернего эл по классу
// console.log(elemsFour)

// const elemsFive = document.querySelectorAll('.container1, .container2') // поиск всех указанных классов
// console.log(elemsFive)

// const elemsSix = document.querySelectorAll('.container1 .skills') // поиск по вложенным классам
// console.log(elemsSix)

// const elemsSeven = document.querySelectorAll('#canvas3d') // поиск по id
// console.log(elemsSeven)

// const elemsEight = document.querySelectorAll('[alt="VK"]') // поиск по атрибуту с конкретным значением
// console.log(elemsEight)

// const elemsNine = document.querySelectorAll('[alt]') // поиск по атрибуту (все)
// console.log(elemsNine)
// console.log(elemsNine[1]) // получаем конкретный объект

// for (const item of elemsNine) { //перебор коллекции
//     console.log(item)
// }

// elemsNine.forEach(item=>{console.log(item)}) // перебор коллекции через метод массива (но это не массив)

// const subList = document.querySelectorAll('.container1') // поиск внутри класса
// const subItems = subList[0].querySelectorAll('a') // все теги только внутри класса container1
// console.log(subItems)

// const lessonListAll = document.querySelectorAll('span')[3] // поиск конкретного span
// const lessonList = document.querySelector('span') // поиск конкретного span (первого)
// console.log(lessonList)

// const elem = document.getElementById('canvas3d') // поиск по id
// console.log(elem)

// живая коллекция:
// const elems = document.getElementsByTagName('p') // поиск по тегу (возвращает живую коллекцию)
// console.log(elems)

// elems = document.getElementsByClassName('container2') // поиск по классу (возвращает живую коллекцию)
// console.log(elems)

// elems = document.getElementsByName('container1') // поиск по атрибуту (возвращает живую коллекцию)
// console.log(elems)

// живая коллекция отличается от обычной, что она содержит в себе динамически-меняющуюся коллекцию с актуальными данным

// методы проверки: 
// const elem = document.querySelector('.skill') 
// const parentList = elem.closest('.container1') // поиск родителя конкретного элемента
// console.log(parentList)

// const elems = document.querySelectorAll('.container1') 
// for (let elem of elems) {
//     if (elem.matches('[class$="welcome"]')) {
// 			// метод позволяющий найти внутри класса тот же класс + нужный доп класс (если container1 и welcome не будут записаны рядом, ничего не найдется )
// 			console.log('Все окей, добро пожаловать')
// 		} else if (elem.matches('[class$="skills"]')) {
//         console.log('Все окей, скиловый парень')
// 		}
// }





// ——————————————————————————————————————————————————————————————————————————————————————
// остановился на 24:51
// можно открыть подсказку по флексбоксам через f1 и вбить CSS Flexbox Cheatsheet
