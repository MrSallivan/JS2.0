//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
	let out = ''
	let outTask = document.querySelector('.out-1')
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 3; k++) {
			out += '*'
		}
		out += '_'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
	let out = ''
	let outTask = document.querySelector('.out-2')
	for (let i = 0; i < 3; i++) {
		out += (i + 1) + '<br/>'
		for (let k = 0; k < 3; k++) {
			out += '*_'
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
	let out = ''
	let outTask = document.querySelector('.out-3')
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 3; k++) {
			out += '*_'
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
	let out = ''
	let outTask = document.querySelector('.out-4')
	for (let i = 0; i < 3; i++) {
		out += (i + 1) + '_'
		for (let k = 0; k <= 4; k++) {
			out += (k + 1) + ' '
		}

	}
	outTask.innerHTML = out
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
	let out = ''
	let outTask = document.querySelector('.out-5')
	for (let i = 0; i < 3; i++) {
		for (let k = 1; k <= 6; k++) {
			if ((k % 2) !== 0) {
				out += '1'
			} else {
				out += "0"
			}
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
	let out = ''
	let outTask = document.querySelector('.out-6')
	for (let i = 0; i < 3; i++) {
		for (let k = 1; k <= 6; k++) {
			if ((k / 3 == 1) || (k / 3 == 2)) {
				out += 'x'
			} if ((k / 2 == 1) || (k /2 == 2)) {
				out += '0'
			} if ( (k == 1) || (k / 5 == 1)) {
				out += "1"
			} 
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
	let out = ''
	let outTask = document.querySelector('.out-7')
	for ( i = 0; i < 5; ++i) {
		for ( k = 0; k < i; k++) {
			out += '*'
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
	let out = ''
	let outTask = document.querySelector('.out-8')
	for ( i = 4; (i < 5) && ( i >= 0); i--) {
		for ( k = i; (k < 6) && ( k >= 0 ); k--) {
			out += '*'
		}
		out += '<br/>'
	}
	outTask.innerHTML = out
}


document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
	let out = ''
	let outTask = document.querySelector('.out-9')
	let outIn = ' '
	for ( let i = 0; i < 5; i++ ) {
		if (i == 0 ) {
			for (let k = 1; k < 2; k++) {
			outIn += k + ' '
		}
	}
		if (i == 1 ) {
			for (let k = 2; k < 3; k++) {
			outIn += k + ' '
		}}
		if (i == 2 ) {
			for (let k = 3; k < 4; k++) {
			outIn += k + ' '
		}}
		if (i == 3 ) {
			for (let k = 4; k < 5; k++) {
			outIn += k + ' '
		}}
		if (i == 4 ) {
			for (let k = 5; k < 6; k++) {
			outIn += k + ' '
			}
		}
		out += outIn + '<br />'
	}
	outTask.innerHTML = out
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
	let outTask = document.querySelector('.out-10');
	let out, outIn, outIn1, outIn2, outIn3, outIn4 = ' ';
	for (let i = 0; i < 5; i++) {
		if (i == 0) {
			for ( let k = 1; k < 11; k++) {
				if (k < 10 ) {
					outIn += '0' + k + ' '
				} 
				if (k == 10) {
				outIn += k + ' '
				}
			}
		}
		if (i == 1) {
			for ( let k = 11; k < 21; k++) {
					outIn1 += k + ' '
			}
		}
		if (i == 2) {
			for ( let k = 21; k < 31; k++) {
					outIn2 += k + ' '
				}
			}
		if (i == 3) {
			for ( let k = 31; k < 41; k++) {
					outIn3 += k + ' '
				} 
		}
		if (i == 4) {
			for ( let k = 41; k < 51; k++) {
					outIn4 += k + ' '
		}
	}
	}
	// out = outIn + '<br />' + outIn1 + '<br />' + outIn2 +'<br />' + outIn3 + '<br />' + outIn4 + '<br />'
	outTask.innerHTML = outIn + '<br />' + outIn1 + '<br />' + outIn2 +'<br />' + outIn3 + '<br />' + outIn4 + '<br />'
}

document.querySelector('.b-10').onclick = t10;