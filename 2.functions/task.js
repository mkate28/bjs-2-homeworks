// задача №1
function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	let avg = +(sum / arr.length).toFixed(2); 
	return { min: min, max: max, avg: avg };
}

// задача №2 

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let summ = 0;
	for (let elem of arr) {
		summ += elem;
  	}
  	return summ;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
  	let sumOddElement = 0;
  	for (let elem of arr) {
  		if (elem % 2 === 0) {
  			sumEvenElement += elem;
    	} else {
      		sumOddElement += elem;
    	}
  	}
  	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
  	let countEvenElement = 0;
  	for (let elem of arr) {
  		if (elem % 2 === 0) {
  			sumEvenElement += elem;
      		countEvenElement++;
    	}
  	}
  	return sumEvenElement / countEvenElement;
}

// задача №3

function makeWork (arrOfArr, func) {
	let makeWorkerResult = -Infinity;
	for (let elem of arrOfArr) {
		const result = func(...elem);
		if (result > makeWorkerResult) {
			makeWorkerResult = result;
		}
  	}
  	return makeWorkerResult;
}