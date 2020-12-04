class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.marks = [5,4,4,5];
		this.active = true;
	}

	getInfo(){
		console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
	}

	getAverageMark(){
		if (this.active){
			return this.marks.reduce((sum,element)=>{
			sum += element;
			return sum;
			},0)/this.marks.length;
		}
		else {
			return null;
		}
		
	}

	dismiss(){
		this.active = false;
	}

	recover(){
		this.active = true;
	}

	get mark(){
		if (this.active){
			return this.marks;
		}
		else {
			return null;
		}
	}

	set mark(num){
		if (this.active){
			this.marks.push(num);
		}
	}
}

class BudgetStudent extends Student{
	constructor(university, course, fullName){
		super(university, course, fullName);
		this.scholarship = 1400;
		setInterval(()=>{
			if(this.getAverageMark()>=4 && this.active){
				console.log(`Ви отримали ${this.scholarship} грн стипендії`);
			}
		},3000);
	}
}

const roman = new BudgetStudent('КІтУ НАУ',7,'Грицаєнко Роман Ігорович');
roman.getInfo();

roman.mark = 5;
console.log(roman.mark);
console.log(roman.getAverageMark());

roman.dismiss();

roman.mark = 5;
console.log(roman.mark);
console.log(roman.getAverageMark());

roman.recover();

roman.mark = 5;
console.log(roman.mark);
console.log(roman.getAverageMark());
