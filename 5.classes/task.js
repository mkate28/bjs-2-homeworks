// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state (newState) {
    if (newState === 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
  	let foundBook = this.books.find(function(item) {
  		return item[type] === value;
  	});

  	if (foundBook !== undefined) {
  		return foundBook;
  	} else {
  		return null;
  	}
  }

  giveBookByName(bookName) {
  	let rightBook = this.books.find(function(item) {
  		return item.name === bookName;
  	});

  	if (rightBook !== undefined) {
  		let bookIndex = this.books.indexOf(rightBook);
  		let bookToGive = this.books[bookIndex];
  		this.books.splice(bookIndex, 1);
  		return bookToGive;
  	} else {
  		return null;
  	}
  }
}

// Задача №3

class Student {
	constructor(name) {
		this.name = name; 
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		} else if (subject in this.marks) {
			this.marks[subject].push(mark);
		} else {
			this.marks[subject] = [];
        	this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (subject in this.marks) {
			let summ = this.marks.reduce((acc, item) => acc + item, 0);
			return summ / this.marks.length;
		} else {
			return 0;
		}
	}

	getAverageBySubject(subject) {
    	if (subject in this.marks) {
	      	let summ = this.marks[subject].reduce((acc, item) => acc + item, 0);
	      	return summ / this.marks[subject].length;
	    } else {
	    	return 0;
	    }
  	}

  	getAverage() {
  		let subjectArr = Object.keys(this.marks);
  		let summAvg = 0;
  		if (subjectArr.length > 0) {
  			for (let item of subjectArr) {
  				let subjectAverage = this.getAverageBySubject(item);
  				summAvg += subjectAverage;
  			}
  			return summAvg / subjectArr.length;
  		} else {
  			return 0;
  		}
  	}
}