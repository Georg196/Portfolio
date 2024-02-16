document.addEventListener('DOMContentLoaded', async function () {
	document.getElementById('burgerMenu').addEventListener('click', function () {
		document.querySelector('.container__menu').classList.toggle('open')
	})
    socialBar()
})


function socialBar() {
    const socialContent = document.querySelector('.net')
    let content = `<div class="social"><a href="https://vk.com/georg.rccx"><img src="../../assets/images/V_copy.svg" alt="VK"/></a><a href="https://t.me/Georg196"><img src="../../assets/images/T_copy.svg" alt="TG"/></a><a href="//wa.me/+79507448857"><img src="../../assets/images/W_copy.svg" alt="WT"/></a></div>`
    socialContent.innerHTML = content
}