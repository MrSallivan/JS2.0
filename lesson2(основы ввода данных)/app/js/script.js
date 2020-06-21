let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in'); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function () {
	let getValue = +inputIn.value // value - то что введено в инпут; +перевод в число
	inputIn.value = ''
	div.innerHTML = getValue
}