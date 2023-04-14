function compareArrays(arr1, arr2) {
	return arr1.every((item, index) => arr1.length === arr2.length && item === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(person => person.gender === gender).reduce((acc, item, index, arr) => {
		acc += item.age;
	    if (index === arr.length - 1) {
	      return acc / arr.length;
	    }
	    return acc;
	}, 0);
  	return result;
}