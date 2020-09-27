class Goods {
	constructor(a, b, c, d) {
		this.name = a,
		this.amount = b,
		this.image = c,
		this.count = d
	}
	draw(e) {
		let div = document.createElement('div')
		div.classList.add('task3div')
		div.innerHTML = `<p><img src=${this.image}></p><br><p>${this.name}</p><br><p>${this.count}</p>`
		document.querySelector(e).appendChild(div)
	}
}