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
			title: 'Вебдизайн',
		},
		design: {
			id: 'design',
			tagName: 'design',
			title: 'Дизайн',
		},
		front: {
			id: 'front',
			tagName: 'front',
			title: 'Верстка',
		},
		// new: {
		// 	id: 'new',
		// 	tagName: 'new',
		// 	title: 'Новое',
		// },
	},
}

const myPortfolio = [
	{
		src: '../../assets/images/portfolio/Design/trening.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/Trening_slaid.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Web/AgroVkus.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Front/Calc.png',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.front,
	},
	{
		src: '../../assets/images/portfolio/Web/Dom_kulturi.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Front/Template.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.front,
	},
	{
		src: '../../assets/images/portfolio/Web/Goldray.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Design/Back_to_hte_camp.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/Back_to_hte_camp_pes.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Web/O-mobile.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Web/LeMank.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Design/Email_ras.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/Illustration_TIHH.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/LitleCamp.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/Wireframe-2.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Web/OMG.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Web/Salbero.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Design/Narnia_roz.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Design/Narniabaner.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Web/Tirs.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Web/TulisovMed.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.web,
	},
	{
		src: '../../assets/images/portfolio/Design/banners_3.jpg',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.design,
	},
	{
		src: '../../assets/images/portfolio/Front/MyFace.png',
		alt: '',
		description: 'Lorem100',
		tagName: portfolioSettings.tagsMap.front,
	},
	// {
	// 	src: '../../assets/images/portfolio/Front/To_do_list.png',
	// 	alt: '',
	// 	description: 'Lorem100',
	// 	tagName: portfolioSettings.tagsMap.front,
	// },
]

window.addEventListener('DOMContentLoaded', function () {
	initPortfolioGallery(myPortfolio)
	initPortfolioButtons(portfolioSettings)
})

function initPortfolioButtons(portfolioSettings) {
	let portfolioRootElTool = document.getElementById('tbar')

	for (const key in portfolioSettings.tagsMap) {
		const item = portfolioSettings.tagsMap[key]
		const btnEl = document.createElement('button')
		btnEl.className = `btn fil-cat`
		btnEl.innerHTML = `${item.title}`
		btnEl.setAttribute('data-rel', item.tagName)

		portfolioRootElTool.appendChild(btnEl)
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

			for (let el of portfolioEl.querySelectorAll('[data-card]')) {
				el.style.display = 'none'
			}

			for (let el of portfolioEl.getElementsByClassName(classToShow)) {
				el.style.display = 'block'
			}
		})
	}
}

// генерация div-картинок

async function initPortfolioGallery(portfolioArray) {
	let portfolioRootEl = document.getElementById('portfolio')

	setGridLoaderToEl(portfolioRootEl, true)
	const items = await fetchPortfolioItems()
	setGridLoaderToEl(portfolioRootEl, false)
	renderItems(items)

	async function fetchPortfolioItems() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(myPortfolio)
			}, 1000)
		})
	}

	function renderItems(items) {
		items.forEach(item => {
			const newDiv = document.createElement('div')
            newDiv.setAttribute('data-card', 'true');
			newDiv.className = `tile scale-anm all ${item.tagName.tagName}`
			newDiv.style.marginBottom = '20px';
			newDiv.innerHTML = `
                <div style="position: relative">
                    <img src="${item.src}" alt="${item.alt}" />
                </div>
            `
			portfolioRootEl.appendChild(newDiv)
		})
	}
}

function setGridLoaderToEl(domElement, isLoading) {
	const generateSkeleton = count => {
		return [...new Array(count)]
			.map((_, index) => {
				return `<div class="skeleton frame-${index % 2 ? '1' : '2'}"></div>`
			})
			.join('\n')
	}

	domElement.innerHTML = isLoading ? generateSkeleton(13) : ''
}

// function setGridBtnToEl(domElement, isLoading) {
//     const generateSkeletonBtn = (count) => {
//         return [...new Array(count)].map((_, index) => {
//             return `<div class="skeleton skeleton__btn mr-2"></div>`
//         }).join('\n')
//     }

// 	domElement.innerHTML = isLoading ? generateSkeletonBtn(13) : ''
// }


// ;<div style='position: absolute; bottom: 0; left: 0'>
// 	<p class='...'>${item.description}</p>
// </div>

// Функция для открытия модального окна с данными из выбранной картинки
function openModalWithData(event) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const clickedImage = event.target;

    // Вставка данных из атрибутов выбранной картинки
    const imageSrc = clickedImage.getAttribute('src');
    const imageAlt = clickedImage.getAttribute('alt');
    const description = clickedImage.getAttribute('data-description');
    const image = `<img src="${imageSrc}" alt="${imageAlt}">`;
    const descriptionHtml = `<p>${description}</p>`;
    modalContent.innerHTML = image + descriptionHtml;

    modal.style.display = "block";
}

// Обработчик события для открытия модального окна при клике на картинку
document.getElementById('portfolio').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        openModalWithData(event);
    }
});

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Обработчик события для закрытия модального окна при клике на фон
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});
