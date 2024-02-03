const portfolioSettings = {
	tagsMap: {
		all: {
			id: 'all',
			tagName: 'all',
			title: 'Все',
		},
		web: {
			id: 'web',
			tagName: 'web',
			title: 'Веб-дизайн',
		},
		flyers: {
			id: 'flyers',
			tagName: 'flyers',
			title: 'flyers',
		},
		bcards: {
			id: 'bcards',
			tagName: 'bcards',
			title: 'bcards',
		},
		new: {
			id: 'new',
			tagName: 'new',
			title: 'Новое',
		},
	},
}

const myPortfolio = [
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.bcards,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.bcards,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.bcards,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.bcards,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.bcards,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.flyers,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.flyers,
	},
	{
		src: '/material/portfolio/1111.png',
		alt: '',
		tagName: portfolioSettings.tagsMap.flyers,
	},
]


window.addEventListener('DOMContentLoaded', function () {
	initPortfolioGallery(myPortfolio)
    initPortfolioButtons(portfolioSettings)
})

// 

function initPortfolioButtons(portfolioSettings) {
	let portfolioParentElTool = document.getElementById('tbar')

    for (const key in portfolioSettings.tagsMap) {
        const item = portfolioSettings.tagsMap[key];
        const btnEl = document.createElement('button')
        btnEl.className = `btn fil-cat`
        btnEl.innerHTML = `${item.title}`
        btnEl.setAttribute('data-rel', item.tagName)

        portfolioParentElTool.appendChild(btnEl)
        console.log(btnEl)
    }

	initCategoryBtns(portfolioSettings)
}

function initCategoryBtns(portfolioSettings) {
	// отрендерить кнопки
	for (let btn of document.getElementsByClassName('fil-cat')) {
		btn.addEventListener('click', function () {
			const classToShow = this.getAttribute('data-rel')
			const portfolioEl = document.getElementById('portfolio')

			for (let el of portfolioEl.querySelectorAll('div')) {
				el.style.display = 'none'
			}

			for (let el of portfolioEl.getElementsByClassName(classToShow)) {
				el.style.display = 'block'
			}
		})
	}
}

// генерация div-картинок 

function initPortfolioGallery(portfolioArray) {
	let portfolioParentEl = document.getElementById('portfolio')

	portfolioArray.forEach(item => {
		const newDiv = document.createElement('div')
		newDiv.className = `tile scale-anm all ${item.tagName.title}`
		newDiv.innerHTML = `<img src="${item.src}" alt="${item.alt}" />`

		portfolioParentEl.appendChild(newDiv)
		console.log(newDiv)
	})
}




