function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty("marks")) {
		for (let i = 0; i < [...marks].length; i++) {
			this.marks.push(marks[i]);
		}
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") && this.marks.length !== 0) {
		return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}