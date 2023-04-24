function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
  	this.age = age; 
  	this.marks = []; 
}

let student1 = new Student('Иван', 'мужской', 18);
let student2 = new Student('Евгений', 'мужской', 22);
let student3 = new Student('Мария', 'женский', 19);
let student4 = new Student('Анна', 'женский', 20);

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	if (this.marks) {
     this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
	if ('marks' in this && this.marks.length !== 0) {
		return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length; 
  	} else {
  		return 0;
  	}
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}