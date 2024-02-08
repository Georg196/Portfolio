document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burgerMenu').addEventListener('click', function () {
		document.querySelector('.container__menu').classList.toggle('open')
	})
})
