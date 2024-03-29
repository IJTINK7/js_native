// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
	return nums.reduce((acc, el) => acc + el, 0)
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c && c === a) {
        return "10"
    }
    if (a === b || b === c || c === a) {
        return "01"
    }
    if ((a <= 0 || a + b < c) || (b <= 0 || c + b < a) || (c <= 0 || c + a < b)) {
        return "00"
    }
	else return "11"
}

console.log(getTriangleType(10, 10, 10))
console.log(getTriangleType(15, 10, 15))
console.log(getTriangleType(10, 12, 13))
console.log(getTriangleType(-10, 12, 13))
console.log(getTriangleType(1, 2, 13))


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
	let sum = 0;
	const numberAsArray = Math.abs(number).toString().split("");
	for (const digit of numberAsArray) {
		const digitToNumber = parseInt(digit);
		sum += digitToNumber;
	}
	return sum;
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return true
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return []
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return 0
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return [1]
}