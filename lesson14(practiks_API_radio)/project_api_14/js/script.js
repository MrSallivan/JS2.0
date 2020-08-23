document.querySelector('.form-control__btn').onclick = function () {
	let sel = document.querySelector('.section__wrap')
	sel.style.display = 'flex'
	document.querySelector('.form-control').style.display = 'none'
	document.querySelector('.butplus').style.display = 'block'
	document.querySelector('.butminus').style.display = 'block'
	var city = document.querySelector('.i-18').value

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=d0db13a6c2cef9cd83e17d46c677c948`)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
		console.log(data)
		document.querySelector('.weather__cityname').textContent = data.name
		document.querySelector('.weather__deg').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
		document.querySelector('.weather__text').textContent = data.weather[0].description
		document.querySelector('.cloud').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
		document.querySelector('.wings').innerHTML = ` Ветер: ${data.wind.speed} м/с`
	})
}

var sel = document.querySelector('.popup')
var close = document.querySelector('.popup__close')

function popup() {
	sel.style.display = 'block'
}
function addCard() {
	sel.style.display = 'none'
	let gorod = document.getElementById('sel').value
	let section = document.createElement('section')
	section.classList.add('weather')
	section.innerHTML = `
		<div class="weather__row">
			<div class="weather__column">
				<p class="weather__cityname">${gorod}</p>
				<hr>
				<p class="weather__deg">10&deg;</p>
				<p class="weather__text">Clouds</p>
				<hr>
				<div class="weather__features">
					<div class="weather__featuresitem cloud"></div>
					<div class="weather__featuresitem wings"></div>
				</div>
			</div>
		</div>
	`
	document.querySelector('.section__wrap').append(section)
	console.log(document.querySelector('.section__wrap').lastChild.children[0].children[0].children)

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${gorod},ru&appid=d0db13a6c2cef9cd83e17d46c677c948`)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
		console.log(data)
		document.querySelector('.weather__cityname').textContent = data.name
		document.querySelector('.section__wrap').lastChild.children[0].children[0].children[2].innerHTML = Math.round(data.main.temp - 273) + '&deg;'
		document.querySelector('.section__wrap').lastChild.children[0].children[0].children[3].textContent = data.weather[0].description
		document.querySelector('.section__wrap').lastChild.children[0].children[0].children[5].innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"> <br> <div>Ветер: ${data.wind.speed} м/с</div> `
		// document.querySelector('.section__wrap').lastChild.children[0].children[0].children[5][2].innerHTML = ` <div>Ветер: ${data.wind.speed} м/с</div>`
	})
}

document.querySelector('.butplus').onclick = popup
document.querySelector('.popup__close').onclick = addCard

document.querySelector('.butminus').onclick = () => {
	console.log(document.querySelector('.section__wrap'))
	document.querySelector('.section__wrap').lastChild.remove()
	if(document.querySelector('.section__wrap').children.length == 0) {
		document.querySelector('.form-control').style.display = 'block'
		document.querySelector('.butplus').style.display = 'none'
		document.querySelector('.butminus').style.display = 'none'
	}
}