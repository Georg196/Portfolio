document.addEventListener('DOMContentLoaded', async function () {
	document.getElementById('burgerMenu').addEventListener('click', function () {
		document.querySelector('.container__menu').classList.toggle('open')
	})
})