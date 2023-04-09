"use strict"

// задача 1

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;

  if (d < 0) {
  	arr = [];
  } else if (d === 0) {
  	arr.push(-b/(2*a));
  } else {
  	arr.push((-b + Math.floor(Math.sqrt(d)))/(2*a));
  	arr.push((-b - Math.floor(Math.sqrt(d)))/(2*a));
  }
  
  return arr;
}

// задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// проверка на число
	for (let arg of arguments) {
		arg = Number(arg);
		if (typeof arg !== 'number' || isNaN(arg)) {
			return false;
		}
	}

	let percentConvert = (percent / 100) / 12;
	let creditSum = amount - contribution;
  	let payment = creditSum * (percentConvert + (percentConvert / (((1 + percentConvert)**countMonths) - 1)));
  	let totalPayment = +(payment * countMonths).toFixed(2); 

  	return totalPayment; 
}