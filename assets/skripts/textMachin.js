document.addEventListener('DOMContentLoaded', async function () {
	initTextMachine()
})

// печатная машинка

function initTextMachine() {
	let textContent = document.querySelector('#text')
	let text = `Будем знакомы, я Георгий. Мне 27 лет, я живу в Челябинске.
        По образованию повар-технолог, по профессии веб-дизайнер и
        фронтенд-разработчик, по призванию миссионер. У меня довольно
        много друзей, надеюсь и с вами мы познакомимся! У меня есть
        любимая жена и чудесный сын.
        <br /><br />
        <b>Характер:</b> амбиверт, общительный, дружелюбный,
        прямолинейный, тактичный, стрессоустойчивый, быстро нахожу
        решения задач, ответственный, нет вредных привычек. <br /><br />
        <b>Увлекаюсь:</b> настольными и компьютерными играми, D&D,
        фэнтези, фильмами, походами. <br /><br />
        <b>Интересуюсь:</b> литературой связанной с познанием мира,
        пониманием людей и смысла существования. <br /><br />
        <b>Мечта:</b> движусь в сторону того, чтобы в ближайшем времени
        довести навыки фронтенд-разработчика до совершенства, чтобы
        стать работником мечты. <br /><br />
        <b>Любимые цитаты:</b><dfn>
        "В жизни все по настоящему стоящее дается
        нелегким трудом"</dfn>`

	// debugger;

	let text2 = ''
	let input = i => {
		setTimeout(() => {
			text2 += text[i]
			textContent.innerHTML = text2 + `<span class="cursor">|</span>`
		}, 5 * i)
	}

	for (let i = 0; i < text.length; i++) {
		input(i)
	}

	setTimeout(() => {
		textContent.innerHTML += `<button id="a"><a href="../../source/pages/index_design.html" class="animateButton">Навыки работы →</a></button>`
	}, 5 * text.length)
}

// —— Вариант жени в вызове функции:
// const text = `Будем знакомы, я Георгий. Мне 27 лет, я живу в Челябинске.
// По образованию повар-технолог, по профессии веб-дизайнер и
// фронтенд-разработчик, по призванию христианин. У меня довольно
// много друзей, надеюсь и с вами мы подружимся! У меня есть
// любимая жена и чудесный сын.
// <br /><br />
// <b>Характер:</b> амбиверт, общительный, дружелюбный,
// прямолинейный, тактичный, стрессоустойчивый, быстро нахожу
// решения задач, ответственный, нет вредных привычек. <br /><br />
// <b>Увлекаюсь:</b> настольными и компьютерными играми, D&D,
// фэнтези, фильмами, походами. <br /><br />
// <b>Интересуюсь:</b> литературой связанной с познанием мира,
// пониманием людей и смысла существования. <br /><br />
// <b>Мечта:</b> движусь в сторону того, чтобы в ближайшем времени
// довести навыки фронтенд-разработчика до совершенства, чтобы
// найти работу мечты. <br /><br />
// <b>Любимые цитаты:</b><dfn>
// "В жизни все по настоящему стоящее дается
// нелегким трудом"</dfn>`

// await initTextMachine(document.querySelector('#text'), text)
// printBtn()

// function printBtn() {
// 	setTimeout(() => {
// 		document.querySelector(
// 			'#text'
// 		).innerHTML += `<button id="a"><a href="/source/pages/index_design.html" class="animateButton">Дальше →</a></button>`
// 	}, 20)
// }

// —— Вариант Жени:
// async function initTextMachine(domElement, text = '') {
// 	await typeAnimatedText(text)

// 	async function typeAnimatedText(text) {
// 		let result = ''
// 		for (let i = 0; i < text.length; i++) {
// 			result += await getNextCharByIndex(text, i)
// 			domElement.innerHTML = result
// 		}
// 	}

// 	function getNextCharByIndex(textString, i) {
// 		return new Promise(resolve => {
// 			setTimeout(() => {
// 				resolve(textString[i])
// 			}, 20)
// 		})
// 	}
// }

//  — загрузка анимации при скроле

// let options = {
// 	root: document.querySelector('#scrollArea'),
// 	rootMargin: '0px',
// 	threshold: 1.0,
// }

// let callback = function (entries, observer) {
// 	entries.forEach(entry => {
// 		entry.time // a DOMHightResTimeStamp indicating when the intersection occurred.
// 		entry.rootBounds // a DOMRectReadOnly for the intersection observer's root.
// 		entry.boundingClientRect // a DOMRectReadOnly for the intersection observer's target.
// 		entry.intersectionRect // a DOMRectReadOnly for the visible portion of the intersection observer's target.
// 		entry.intersectionRatio // the number for the ratio of the intersectionRect to the boundingClientRect.
// 		entry.target // the Element whose intersection with the intersection root changed.
// 		entry.isIntersecting // intersecting: true or false
// 	})
// }

//  — на будущее сделать класс с добавлением текста:

// class TypingContent {
// 		constructor(domElement) {
//             this.root = domElement;
//         }

// 		addTag(tagName, attributes) {
//             const elemtn = createNode(tagName)
//             this.root.insertAdjacentHTML('afterEnd', elemtn)
//             return new TypingContent(elemtn)
//         }

// 		async typeAnimatedText(text) {
//             await initTextMachine(this.root, text)
//         }
// 	}

// const typingContent = new TypingContent(document.querySelector('.text__containet'))

// await (async () => {
//     const p = typingContent.addTag('p', [])
//     const b = p.addTag('b');
//     await b.typeAnimatedText('Характеристики:')
//     await p.typeAnimatedText('Я [ороший')
// })()

// await (async () => {
//     const p = typingContent.addTag('p', [])
//     const b = p.addTag('b');
//     await b.typeAnimatedText('О,о мне:')
//     await p.typeAnimatedText('Я [ороший')
// })()
// await initTextMachine(document.querySelector('#text2'), 'text')

// let observer = new IntersectionObserver(callback, options)
