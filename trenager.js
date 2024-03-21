// // Полезные заметки:
// // можно открыть подсказку по флексбоксам через f1 и вбить CSS Flexbox Cheatsheet

// // 1. ОПЕРАТОРЫ:
// let num = 124
// let str = 'Kykylaco'
// let strNum = '111'
// let strNot = ''
// let bul = true
// let bulNot = false

// res = num < strNum || (bul && bulNot && 1 && !null) || null
// res ? 'Ура!' : console.log('NOOOOO!')

// console.log(res ?? 'Error')

// // 2. ЦИКЛЫ:
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

// // 3. ФУНКЦИИ:
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

// // 4. ОБЪЕКТЫ:
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

// // конструктор объекта:
// function UserInfo(name, age, work) { // пишется с заглавной буквы имя функции создания объекта
//     this.name = name;
//     this.age = age;
//     this.work = work
// }

// console.log(new UserInfo('Goga', 132, 'admin'))

// // 5. ЧИСЛА:
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

// // 6.СТРОКИ
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

// // 7.МАССИВЫ

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

// // методы push и pop выполняются быстро, потому что им не нужно ничего менять; в свою очередь, метод unshift и shift выполняются медленно, потому что им нужно добавить элемент в начало массива, затем переназначить индекс всех элементов массива и изменить свойство length (длинна массива)

// delete matrix[2]

// console.log(matrix)
// console.log(matrix.length)

// // splice позволяет удалять, добавлять и изменять элементы массива
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

// // создание нового массива:
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

// // Поиск по объектам внутри массивов:
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

// // Сортировка массивов:
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

// // Преобразование массива:
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

// // Перебор массива
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

// // Домашнее задание:
// let arrDz = ['Ваня', 'Иштван']
// arrDz.push('Оля')
// arrDz.splice(1, 1, 'Petya')
// dz = arrDz.slice(0, 1)
// arrDz.slice(0, 1)
// arrDz.unshift('Masha', 'Pasha')
// console.log(dz)
// console.log(arrDz)

// // 8. DOM - дерево

// const bodyElement = document.body // получить доступ к DOM дереву
// const firstChildNode = bodyElement.firstChild // получить доступ к первому потомку элемента
// const lastChildNode = bodyElement.lastChild // получить доступ к последнему потомку элемента

// console.log(bodyElement)
// console.log(firstChildNode)
// console.log(lastChildNode)

// const childNodes = bodyElement.childNodes // получить доступ к коллекции DOM дерева (некий массив, но не массив)
// console.log(childNodes)
// console.log(bodyElement.hasChildNodes())

// // поиск по конкретным селекторам и классам:

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

// // живая коллекция:
// const elems = document.getElementsByTagName('p') // поиск по тегу (возвращает живую коллекцию)
// console.log(elems)

// elems = document.getElementsByClassName('container2') // поиск по классу (возвращает живую коллекцию)
// console.log(elems)

// elems = document.getElementsByName('container1') // поиск по атрибуту (возвращает живую коллекцию)
// console.log(elems)

// // живая коллекция отличается от обычной, что она содержит в себе динамически-меняющуюся коллекцию с актуальными данным

// // 8.1 методы проверки:
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

// const text = document.querySelector('.container1')
// const list = text.nextElementSibling // можно применить свой-ва навигации по DOM (пример: firstChild и lastChild, parentNode,  previousSibling и nextSibling (все описаны выше))
// console.log(list)

// // 8.2 Изменение DOM:
// const textElement = document.querySelector('.welcome') // получение узла по классу
// const textElementContent = textElement.innerHTML // получаем содержимое объекта
// console.log(textElementContent)

// textElement.innerHTML =	`<p class="welcome">Пошли от сюда нафиг, да побыстрее!</p>` //заменяем содержимое
// textElement.outerHTML = `<p class="welcome">Пошли от сюда нафиг, да побыстрее!</p>` //заменяем полностью элемент
// textElement.textContent = `<p class="welcome">Пошли от сюда нафиг, да побыстрее!</p>` //заменяем содержимое и просто перевод всего в текст

// let newText = document.createTextNode('Hello!') // создание текстового узла (текст)

// const textElement = document.querySelector('.container1') // получение узла по классу
// const newElement = document.createElement('div') // создание элемента (тег)
// newElement.innerHTML = `<div class="container2"> ... Загрузка ⏳ </div> `

// // синтаксис: элемент взаимодействия.позицию(элемент для вставки)
// textElement.before(newElement) // вставить новый элемент перед объектом
// textElement.after(newElement) // вставить новый элемент после объектом
// textElement.prepend(newElement) // вставить новый элемент внутрь объекта перед всем содержимым
// textElement.append(newElement) // вставить новый элемент внутрь объекта после всего содержимого

// textElement.insertAdjacentHTML( // позволяет вставить элемент, HTML, узел, текст в документ
// 	'afterend', // позиция куда вставляет (так же 4 как выше)
// 	`<div class="container2"> AааааааааААааААААааа! Вечная загрузка!!! ⏳ ⏳ ⏳ </div> ` //контент который вставляется
// )

// // все методы вставки автоматически удаляют эл со старых мест
// const lessonBlock = document.querySelector('.container1') // контеинер внутри которого перенос осуществляется
// const title = document.querySelector('h1') // элемент который переносят
// lessonBlock.append(title) // перенос объекта в HTML

// // 8.3 клонирование объекта:
// const textElement = document.querySelector('.skills')
// // const cloneElement = textElement.cloneNode() // клонирование оболочки (пустые)
// const cloneElement = textElement.cloneNode(true) // глубокое клонирование со всем содержимым
// const lessonBlock = document.querySelector('.container1')
// lessonBlock.prepend(cloneElement)

// cloneElement.remove() // удаление объекта

// // 8.4 Изменение классов:
// const element = document.querySelector('.welcome')
// const elementClassName = element.className // получение всех возможных классов элемента
// console.log(elementClassName)

// element.className = 'Goodbye' // метод, который затирает все классы и присваивает новый
// // метод classList позволяет получить доступ к атрибуту класс:
// element.classList.add('active') // добавляет новый класс
// element.classList.remove('active') // удаляет класс
// element.classList.toggle('active') // добавляет новый класс, если его нет / удаляет класс если он есть
// element.classList.contains('active') // позволяет проверить, существует ли такой класс у данного элемента

// if (element.classList.contains('welcome')) { // если у элемента есть нужный класс, то применяет код
//     console.log('У элемента есть класс welcome!')
// }

// for (let className of element.classList) { // позволяет перебрать все классы объекта
//     console.log(className)
// }

// // 8.5 Изменение стилей
// // обязательно свойство писать через CamelCase, а в "значение"
// element.style.color = 'red'
// element.style.marginBottom = '50px'
// element.style.zIndex = '10'
// console.log(element.style.marginBottom) // чтобы получить значение свойства класс

// // полная перезапись стилей:
// element.style.cssText = `
//  margin-bottom: 100px;
//  color: red;
//  `

// // стиль элемента
// console.log(element.style.margin) // у данного класса нет отдельного значения, поэтому проверка даст пустую строку
// const elementStyle = getComputedStyle(element) // возвращает вычисленные стили элемента
// console.log(elementStyle.margin) // получаем его значение

// // стиль псевдоэлемента
// const elementBeforeStyle = getComputedStyle(element, '::before') // возвращает вычисленные стили псевдоэлемента
// console.log(elementBeforeStyle.backgroundColor) // получаем его значение

// console.log(parseInt(element.style.marginBottom)) // получаем значение свойства margin-bottom в виде числа (parseInt)

// // 9. Атрибуты и свойства:

// const link = document.querySelector('.btn')
// const input = document.querySelector('.input')
// console.log(link.href) // если элемент-тег ссылка, можно получить его значение через href
// console.log(input.href) // будет undefined
// console.log(input.value) // если элемент-тег импут, можно получить его значение через value
// console.log(link.value) // будет undefined
// console.dir(link) // список всех доступных свойств
// console.dir(input) // список всех доступных свойств

// const element = document.querySelector('.welcome')
// element.hasAttribute('name') // проверяет, существует ли атрибут name
// element.getAttribute('name') // возвращает значение атрибута name
// element.setAttribute('name', 'value') // устанавливает значение атрибута name
// element.removeAttribute('name') // удаляет атрибут name

// element.setAttribute('id', 'hello')
// if (element.hasAttribute('id')) { // проверяет, существует
//     console.log('У элемента есть атрибут id')
// }

// // синхронизация между атрибутами и свойствами
// const el = document.querySelector('.welcome')
// el.setAttribute('id', 'hello') // устанавливает значение атрибута id
// console.log(el.id)
// el.id = '12155' // перезаписывает значение атрибута id
// console.log(el.getAttribute('id'))

// el.setAttribute('data-size-text', '1058') // устанавливает значение атрибута data-size
// console.log(el.dataset.sizeText) // возвращает значение атрибута data-size, все имена с префексами data зарезервированн
// el.dataset.sizeText = '2030' // перезаписывает значение атрибута data-size
// console.log(el.dataset.sizeText)

// console.log(el.tagName) // возвращает тег элемента
// el.hidden = true // устанавливает значение атрибута hidden (скрывает элемент)
// console.log(el.hidden)

// // 10. Прокрутка и окно браузера:

// const mainElement = document.documentElement

// const mainElementWidth = mainElement.clientWidth // получаем ширину элемента (не включает в себя полосы прокрутку)
// const mainElementHeight = mainElement.clientHeight // получаем высоту элемента (не включает в себя полосы прокрутку)
// console.log(mainElementWidth)
// console.log(mainElementHeight)

// const windowWidth = window.innerWidth // получаем ширину браузера (включая полосы прокрутки)
// const windowHeight = window.innerHeight // возвращаем высоту браузера (включая полосы прокрутки)
// console.log(windowWidth)
// console.log(windowHeight)

// // получить максимальную высоту и ширину браузера
// let scrollWidth = Math.max( // получаем максимальное значение ширины браузера
// 	document.body.scrollWidth,
// 	document.documentElement.scrollWidth,
// 	document.body.offsetWidth,
// 	document.documentElement.offsetWidth,
// 	document.body.clientWidth,
// 	document.documentElement.clientWidth
// )
// console.log( // для просмотра всех значений ширины
// 	document.body.scrollWidth,
// 	document.documentElement.scrollWidth,
// 	document.body.offsetWidth,
// 	document.documentElement.offsetWidth,
// 	document.body.clientWidth,
// 	document.documentElement.clientWidth
// )
// console.log(scrollWidth)

// let scrollHeight = Math.max( // получаем максимальное значение высоты браузера
// 	document.body.scrollHeight,
// 	document.documentElement.scrollHeight,
// 	document.body.offsetHeight,
// 	document.documentElement.offsetHeight,
// 	document.body.clientHeight,
// 	document.documentElement.clientHeight
// )
// console.log( // для просмотра всех значений высоты
// 	document.body.scrollHeight,
// 	document.documentElement.scrollHeight,
// 	document.body.offsetHeight,
// 	document.documentElement.offsetHeight,
// 	document.body.clientHeight,
// 	document.documentElement.clientHeight
// )
// console.log(scrollHeight)

// // получение значения скролла
// const windowScrollTop = window.pageXOffset
// const windowScrollLeft = window.pageYOffset
// console.log(windowScrollTop)
// console.log(windowScrollLeft)

// // управление прокруткой страницы по px
// function setScrollBy() {
// 	window.scrollBy(0, 50) // значения (горизонтальная прокрутка, вертикальная прокрутка) +50px к актуальной позиции
// 	const windowScrollTop = window.pageYOffset
// 	console.log(windowScrollTop)
// }

// function setScrollToOptions() {
// 	window.scrollTo({
// 		top: 100, // скролит на 100px от самого верху
// 		left: 0,
// 		behavior: 'smooth', // smooth, instant, auto (плавная прокрутка, не плавная, автоматическая прокрутка)
// 	})
// }

// // прокрутка к нужному элементу
// function setScrollIntoView(top) {
//     const lessonSelected = document.querySelector('.lesson-selected')
//     lessonSelected.scrollIntoView(top)
// }

// function setScrollIntoViewOptions(top) {
//     const lessonSelected = document.querySelector('.lesson-selected')
//     lessonSelected.scrollIntoView({
//         behavior:'smooth', // smooth, instant, auto (плавная прокрутка, не плавная, автоматическая прокрутка)
//         block: 'center', // center, start, end, nearest
//         inline: 'center', // center, start, end, nearest
//     })
// }

// // запретить прокрутку
// function setEnableDisableScroll() {
//     // document.body.style.overflow = 'hidden'
//     document.body.classList.toggle('disable-scroll')
// }

// // метрика элементов
// const block = document.querySelector('.object-block')
// const elOffsetParent = block.offsetParent // получаем значение атрибута offset-parent получаем родительский элемент. Если его значение display отсутствует, получаем родительский элемент выше
// console.log(elOffsetParent)

// const elOffsetLeft = block.offsetLeft // получаем значение атрибута left
// const elOffsetTop = block.offsetTop // получаем значение атрибута top
// console.log(elOffsetLeft)
// console.log(elOffsetTop)

// const elOffsetWidth = block.offsetWidth // возвращаем значение атрибута width
// const elOffsetHeight = block.offsetHeight //  возвращаем значение атрибута height
// console.log(elOffsetWidth)
// console.log(elOffsetHeight)

// const elClientTop = block.clientTop //  возвращаем значение внутреннего отступа сверху
// const elClientLeft = block.clientLeft //  возвращаем значение внутреннего отступа слева
// console.log(elClientTop)
// console.log(elClientLeft)

// const elClientWidth = block.clientWidth  //  возвращаем значение внутреннего отступа ширины
// const elClientHeight = block.clientHeight //  возвращаем значение внутреннего отступа высоты
// console.log(elClientWidth)
// console.log(elClientHeight)

// const elScrollWidth = block.scrollWidth  //  возвращаем значение ширины скрола
// const elScrollHeight = block.scrollHeight //  возвращаем значение высоты скрола (невидимой части)
// console.log(elScrollWidth)
// console.log(elScrollHeight)

// block.scrollTop = 150;
// const elScrollLeft = block.scrollLeft  //  возвращаем значение ширины скрола слева
// const elScrollTop = block.scrollTop //  возвращаем значение высоты скрола сверху
// console.log(elScrollLeft)
// console.log(elScrollTop)

// function setElementScrollBy() {
//     block.scrollBy ({
//         top: 100, // скролит на 100px от самого верху
//         left: 0,
//         behavior:'smooth', // smooth, instant, auto (плавная прокрутка, не плавная, автоматическая прокрутка)
//     })
// }

// const item = document.querySelector('.skills')
// const getItemCoords = item.getBoundingClientRect() // получаем координаты элемента
// let getItemCoords1 = item.getBoundingClientRect().top // возвращаем конкретные координаты элемента слева
// let getItemCoords2 = getItemCoords1 + window.pageYOffset // возвращаем конкретные координаты элемента сверх относительно высоты браузера
// console.log(getItemCoords)
// console.log(getItemCoords1)
// console.log(getItemCoords2)

// const el = document.elementFromPoint(200, 100) // получаем элемент по координатам клика
// console.log(el)

// // 11. События в JS:

// // можно писать код в HTML, пример: onclick="console.log('Переход')"
// const btn = document.querySelector('.btn') // получаем доступ через класс btn
// btn.onclick = () => {console.log('Переход!')} // вызываем функцию, которая будет производить действие при клике на кнопку

// function showClick() {
//     console.log('Переход!')
// }
// btn.onclick = showClick // идентичное действие как выше, только функция отдельна; важно писать без круглых скобок, чтобы не вызвать её автоматически сразу (не showClick()!!!)
// // метод выше будет перезаписывать событие, так как он уже существует, btn.onclick будет применяться самое нижнее

// // Метод, который позволяет навесить множество событий: элемент.addEventListener('событие', имя функции или функцию без имени[, параметры]):
// btn.addEventListener('click', () => {console.log('Биба')})
// btn.addEventListener('click', () => {console.log('Боба')})

// function showClick() {console.log('Боба'); btn.removeEventListener('click', showClick)} // removeEventListener позволяет удалить событие, снимает обработчик прослушивания события
// btn.addEventListener('click', showClick) // идентичное действие как выше, только функция вынесена отдельно

// // параметры addEventListener:
// const options = {
//     'capture': false, // фаза на которой должен сработать обработчик события
//     'once': true, // если true, то событие будет автоматически удалено после выполнения
//     'passive': false // если true, то указывает, что обработчик никогда не вызовет preventDefault()
// }
// btn.addEventListener('click', showClick, options) // в параметры можно записать переменную или сразу же значение

// // 11.1 объект событий:

// function showClick(event) {
//     console.log(event.type) // тип события
//     console.log(event.target) // элемент, на который срабатывает обработчик события
//     console.log(event.currentTarget) // элемент, к которому назначен обработчик события
//     console.log(event.clientX) // координаты клика по оси X (курсора)
//     console.log(event.clientY) // координаты клика по оси Y (курсора)
//     console.log(event) // все детали события
// }

// // 11.2 всплытие:

// const block1 = document.querySelector('.block1') // объект как матрешка вложенный друг в друга
// const block2 = document.querySelector('.block2') // объект как матрешка вложенный, второго уровня
// const block3 = document.querySelector('.block3') // объект как матрешка вложенный, третьего уровня

// block1.addEventListener('click', (event) => {
//     console.log('клик на блок первого уровня')
//     console.log(event.target)
// })

// block2.addEventListener('click', (event) => {
//     console.log('клик на блок второго уровня')
// },{'capture': true}) // позволяет погрузить объект более ниже по уровню z

// block3.addEventListener('click', (event) => {
//     console.log('клик на блок третьего уровня') // изначально, если кликнуть по блоку 3, два предыдущих тоже откликнуться (всплывут)
//     event.stopPropagation() // позволяет остановить всплытие нижних уровней
// })

// // 11.3 делегирование событий:

// const btn = document.querySelectorAll('button')
// function showClick() {
//     console.log('Клик!')
// }
// btn.forEach(btnItem => {btnItem.addEventListener('click', showClick)}) // проходим через метод перебора и навешиваем на каждый элемент btn событие и вызов функцию showClick()
// // данный способ сильно напрягает браузер, поэтому лучше использовать нижний пример

// const lesson = document.querySelector('.skills')

// function showClick() {
//     console.log('Могу, умею, практикую!')
// }

// lesson.addEventListener('click', (event) => {
//     if (event.target.closest('span')) { // если кликнули на спан, тогда выполняем функцию showClick() (получаем объект взаимодействия.проверяем тип элемента(тип элемента))
//         showClick()
//     }
// })

// // 11.4 действия браузера:

// const link = document.querySelector('.btn')

// link.addEventListener('click', (event) => {
//     console.log('Клик!')
//     event.preventDefault() // отменяем стандартное действие браузера
// },{'passive': true}) // позволяет отменить preventDefault и отработать код

// link.onclick = () => {
//     console.log('Клик!')
//     return false // отменяем стандартное действие браузера
// }

// // 11.5 события курсора мыши:

// const btn = document.querySelector('.btn')
// btn.addEventListener('mousedown', event => {
// 	console.log(`Клик ${event.which}!`)
//     event.preventDefault()
// })
// btn.addEventListener('click', event => {
// 	console.log(`Клик основной ПКМ!`)
// 	event.preventDefault()
// })
// btn.addEventListener('contextmenu', event => {
// 	console.log(`Вызвано контекстное меню (не основная кнопка мыши)`)
//     event.preventDefault()
// })

// const blockForMouse = document.querySelector('.container2')
// blockForMouse.addEventListener('mousemove', (event) => {blockForMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`})

// blockForMouse.addEventListener('mouseover', event => {
// 	blockForMouse.innerHTML = 'Курсор над элементом'
// 	console.log(event.target) // позволяет отследить курсор над элементом
// 	console.log(event.relatedTarget) // позволяет отследить куда переходит курсор с элемента
// })
// blockForMouse.addEventListener('mouseout', event => {
// 	blockForMouse.innerHTML = 'Курсор уходит с элемента'
// 	console.log(event.target) 
// 	console.log(event.relatedTarget)
// })
// blockForMouse.addEventListener('mouseenter', event => { // позволяет отследить курсор над элемента, не вызывает всплывание дочерних элементов
// 	blockForMouse.innerHTML = 'Курсор над элемента'
// })
// blockForMouse.addEventListener('mouseleave', event => { // позволяет отследить когда курсор уходит с элемента, не вызывает всплывание дочерних элементов
// 	blockForMouse.innerHTML = 'Курсор уходит с элемента'
// })

// const blockForMouse = document.querySelector('.container2')
// blockForMouse.addEventListener('mouseover', event => {
// 	console.log(event.target) // элемент на который курсор перешёл (для события mouseover)
// 	console.log(event.relatedTarget) // элемент с которого курсор ушёл (для события mouseover)
// } )

// blockForMouse.addEventListener('mouseout', event => {
// 	console.log(event.target) // элемент с которого курсор ушёл (для события mouseout)
// 	console.log(event.relatedTarget) // элемент на который курсор перешёл (для события mouseout)
// } )

// blockForMouse.addEventListener('mouseenter', event => { console.log('Курсор над элементом')} ) // события, которые не всплывают (при наведении на дочерний объект)
// blockForMouse.addEventListener('mouseleave', event => { console.log('Курсор уходит с элемента')} )

// позволяет через всплытие организовать делегирование, чтобы не вешать на каждый тег <p> событие: 
// blockForMouse.addEventListener('mouseover', event => {
//     let target = event.target.closest('p')
//     if (!target) return
//     target.style.cssText = 'background-color: #111'
// })
// blockForMouse.addEventListener('mouseout', event => {
//     let target = event.target.closest('p')
//     if (!target) return
//     target.style.cssText = ''
// })

// 11.6 события клавиатуры:

// document.addEventListener('keydown', event => {
//     console.log(`Нажата клавиша ${event.code} (${event.key})`)
// })

// document.addEventListener('keyup', event => {
//     console.log(`Нажата клавиша ${event.code} (${event.key})`)
// })

// document.addEventListener('keydown', event => {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         console.log('Отмена действия')
//     }
// })

// const txtItem = document.querySelector('#textarea')
// const txtItemLimit = txtItem.getAttribute('maxlength')
// console.log(txtItemLimit)
// const txtContent = document.querySelector('.textarea__counter span')
// txtContent.innerHTML = txtItemLimit

// txtItem.addEventListener('keyup', txtSetCounter)
// txtItem.addEventListener('keydown', event => {if(event.repeat) txtSetCounter()})
// function txtSetCounter() {
//     const txtCounterResult = txtItemLimit - txtItem.value.length
//     txtContent.innerHTML = txtCounterResult
// }

// 11.7 события скролла:

// window.addEventListener('scroll', event => {console.log(`${scrollY}px`)})

// 11.8 события загрузки страницы:

// есть три возможных значения:
// 'loading' - документ загружается
// 'interactive' - документ был полностью прочитан
// 'complete' - документ был полностью прочитан и все ресурсы (изображения) были загружены

// document.addEventListener('DOMContentLoaded', readyDom)
// window.addEventListener('load', readyLoad)

// function readyDom() {
//     const image = document.querySelector('.image')
//     console.log(document.readyState)
//     console.log('ДОМ загружен')
//     console.log(image.offsetWidth)
// }

// function readyLoad() {
//     console.log(document.readyState)
//     const image = document.querySelector('.image')
//     console.log('Загрузка завершена')
//     console.log(image.offsetWidth)
// }


window.addEventListener('beforeunload', beforeUnLoad)

function beforeUnLoad(event) {
    event.preventDefault()
    event.returnValue = ''
}



// // остановился на 38:40
