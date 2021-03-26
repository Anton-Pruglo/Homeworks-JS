class User {
	constructor(options) {
		this.fullName = options.fullName;
		this.age = options.age;
		this.gender = options.gender;
		this.email = options.email;
		this.country = options.country;
	}
}
class Employee extends User {
	constructor(options) {
		super(options);
		this.salary = options.salary;
		this.position = options.position;
		this.department = options.department;
	}
}

const user = new User({ fullName:'Test Testovich', age: 17,gender: 'Man', email:'test@gmail.com', country: 'Canada' });
const test2 = new Employee({ salary: 1000, department: 'BOSS' });
const arrClass= [user, test2];
console.log(user);
console.log(test2);
console.log(arrClass[0]);












