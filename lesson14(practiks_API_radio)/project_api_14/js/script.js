fetch('https://api.openweathermap.org/data/2.5/weather?q=Хабаровск,ru&appid=d0db13a6c2cef9cd83e17d46c677c948')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data)
		document.querySelector('.weather__cityname').textContent = data.name
		document.querySelector('.weather__deg').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
		document.querySelector('.weather__text').textContent = data.weather[0].description
		document.querySelector('.cloud').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
		document.querySelector('.wings').innerHTML = ` Ветер: ${data.wind.speed} м/с`

	})