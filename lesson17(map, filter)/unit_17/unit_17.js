let a1_res = [], a2_res = [], a3_res = [], a4_res = [], b1_res = [], b6_res = [], b7_res = [], b8_res = [], b9_num = [], b9_string = [], b10_res;

// Task 1 ============================================
/* <p> Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.</p>  */

function t1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    let out = a1.map(elem => {
        a1_res.push(elem * 2);
    });
    
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Действия должны запускаться при вызове функции t2.</p>  Действия должны
запускаться при вызове функции t2.*/

let a2= [2,3,4,5,10,11,12]
function t2() {
	a2_res = a2.map( elem => elem ** 2)
	console.log(a2_res)
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте новый массив a3_res куда добавьте все элементы приведенные к числу. Действия должны запускаться при вызове функции t3. */
let a3 = [4,"3",6,7,"12",34,"56",78,90,11]
function t3() {
	a3_res = a3.map( elem => {
		if( typeof(elem) == 'string') {
			return +elem
		}
		return elem
	})
	console.log(a3_res)
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте новый массив a4_res куда добавьте только числа из массива a4. Действия должны запускаться при вызове функции t4. Действия должны запускаться при вызове функции t4.*/

let a4 = [4,"3",6,7,"12",34,"56",78,90,11]

function t4() {
	let out = a4.map(elem => {
        if( typeof(elem) == 'number') {
			a4_res.push(elem)
		} 
    })
	// let arr = []
	// let a = 0
 //    for(let value of out) {
 //    	if (value !== undefined) {
 //    		arr[a] = value
 //    		a++
 //    	} else if ( value == undefined ){
 //    		continue;
 //    	}
 //    }
 //    a4_res = arr
	console.log(a4_res)
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте новый b1_res, который содержит только четные числа из b1. Действия должны запускаться при вызове функции t5. */
let b1 = [3, 14, 15, 92]
function t5() {
	b1_res = b1.filter( item => {
		if ( item % 2 == 0 ) {
			return true
		}
	})
	console.log(b1_res)
}

document.querySelectorAll('.b-5').forEach(elem => {
    elem.onclick = t5;
});



// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте новый b6_res, который содержит только числа из b6. Действия должны запускаться при вызове функции t6. */
let b6 = [3, 14, 15, 92, "6", "5", "hello", 32]
function t6() {
	b6_res = b6.filter( item => {
		if( typeof(item) == 'number') {
			return true
		} else {
			return false
		}
	})
	console.log(b6_res)
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте новый b7_res, который содержит только строки из b7, длина которых больше 3. Действия должны запускаться при вызове функции t7. */
let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]
function t7() {
	b7_res = b7.filter( item => {
		if( (typeof(item) == 'string') && (item.length > 3) ) {
			return true
		} else {
			return false
		}
	})
	console.log(b7_res)
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте новый массив b8_res, который содержит индексы четных элементов. Действия должны запускаться при вызове функции t8 */

b8 = [3, 14, 15, 92, "6", "5", "hello", 32]
function t8() {
	let out = b8.filter( (item, index) => {
		if ( (item % 2 == 0) && (typeof(item) !== 'string') ) {
			b8_res.push(index)
		}
	})
	console.log(b8_res)
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b5 и создайте новый массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решить одним filter. Действия должны запускаться при вызове функции t9. */
let b9 = [3, "hello", 4, "world", 5, "hi"]
function t9() {
	b9_num = b9.filter( item => {
		if ( typeof(item) == 'number' ) {
			return true
		} else if ( typeof(item) == 'string') {
			b9_string.push(item)
		}
	})
	
	console.log(b9_num)
	console.log(b9_string)
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте новый b10_res, в который входят вложенные массивы содержащие цифру 3. Действия должны запускаться при вызове функции t10. */
let b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]
function t10() {
	b10_res = b10.filter(item => {
		for (let val of item) {
			if ( val == 3 ) {
				return true
			}
		}
	})
	console.log(b10_res)
}

document.querySelector('.b-10').onclick = t10;