
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
	let val = document.querySelector('.i-1').value
	document.querySelector('.out-1').textContent = val
	return val
}

document.querySelector('.i-1').onkeyup = t1

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
	document.querySelector('.out-2').textContent += e.keyCode + " "
	return event.keyCode
}

document.querySelector('.i-2').onkeydown = t2


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
	let val = e.code
	if (val.indexOf('Key') !== -1) {
		document.querySelector('.out-3').innerHTML = true
	} else {
		document.querySelector('.out-3').innerHTML = false
	}
}

document.querySelector('.i-3').onkeypress = t3


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
	let val = document.querySelector('.i-4').value
	val = val.toLowerCase()
	document.querySelector('.out-4').textContent = val
}

document.querySelector('.i-4').onkeyup = t4

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
	let val = document.querySelector('.i-5').value
	val = val.toUpperCase()
	document.querySelector('.out-5').textContent = val

}
document.querySelector('.i-5').onkeyup = t5

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let out6 = ''
function t6(e) {
	if (e.keyCode >= 97) {
		out6 += e.key
	}
	document.querySelector('.i-6').value = out6
	return false
}

document.querySelector('.i-6').onkeypress = t6


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
	const a7 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 1, 2, 34, 4, 5, 6, 7, 8, 9, 0];
	out = ''
	let ran = Math.floor(0 + Math.random() * ((a7.length - 1) + 1 - 0))
	out = a7[ran]
	document.querySelector('.out-7').textContent += out
}

document.querySelector('.i-7').oninput = t7

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
	let out = ''
	let val = e.key
	if (e.key == 'i') {
		val = '1'
	} else if (e.key == 'o') {
		val = '0'
	} else if (e.key == 'l') {
		val = '7'
	}
	document.querySelector('.out-8').textContent += val

}
document.querySelector('.i-8').onkeyup = t8


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
var a = 0
function t9(e) {
	let val = e.key
	if (val == "ArrowDown") {
		a = a + 1
		document.querySelector('.out-9').textContent = a
	}

}
document.querySelector('.i-9').onkeyup = t9


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let count = 64
let count2 = 64
function t10(e) {
	console.log(e)
	count++
	if ((e.key == 'ArrowRight') || (e.key == 'ArrowLeft')) {
		document.querySelector('.div-10 img').style.width = count + 'px'
	}
	if ((e.key == 'ArrowUp') || (e.key == 'ArrowDown')) {
		count2++
		document.querySelector('.div-10 img').style.height = count2 + 'px'
	}
}

document.querySelector('.i-10').onkeyup = t10

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

document.querySelector('.keyboardUpper__btn').onclick = () => {
	document.querySelector('.keyboard').classList.toggle('keyboard--hidden')
}

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 92, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32]

function init() {
	let out = ''
	for (let i = 0; i < keyboard.length; i++) {
		if ( keyboard[i] == 92) {
			out += '<button class=keyboard__key data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</button>'+'<div class=clearfix></div>'
		}else if (keyboard[i] == 93) {
			out += '<button class=keyboard__key data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</button>'+'<div class=clearfix></div>'
		}else if (keyboard[i] == 13) {
			out += '<button class=keyboard__key data="' + keyboard[i] + '">' + 'ENTER' + '</button>'+'<div class=clearfix></div>'
		}else if (keyboard[i] == 47) {
			out += '<button class=keyboard__key data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</button>'+'<div class=clearfix></div>'
		}
		else {
		out += '<button class=keyboard__key data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</button>'
		}
	}
	document.querySelector('.keyboard').innerHTML = out
}

init()


document.querySelector('.i-11').onkeypress = function (event) {

	document.querySelector('.keyboard .keyboard__key[data="' + event.keyCode + '"]').classList.add('active')
}
document.querySelector('.i-11').onkeyup = function (event) {
	document.querySelectorAll('.keyboard .keyboard__key').forEach(function (element) {
		element.classList.remove('active')
	})

}
var out11 = ''

document.querySelectorAll('.keyboard .keyboard__key').forEach(function (element) {
	element.onmousedown = function (e) {
		element.classList.add('active')
	}
	element.onmouseup = function (e) {
		let code = this.getAttribute('data')
		this.classList.remove('active')
		out11 += String.fromCharCode(code)
		document.querySelector('.i-11').value = out11
	}
})


