class Goods2 extends Goods {
	constructor(a, b, c, d, f = false) {
		super(a, b, c, d)
		this.sale = f
	}
	draw(e) {
		let div = document.createElement('div')
		div.classList.add('task3div')
		let inSales = (this.sale == false) ? 'НЕТ' : "ДА"
		div.innerHTML = `<p><img src=${this.image}></p><br><p>${this.name}</p><br><p>${this.count}</p><p>Учавствует в распродаже: ${inSales}</p>`
		document.querySelector(e).appendChild(div)
	}
}