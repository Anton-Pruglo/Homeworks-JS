

	function MyArray() {
	this.length = 0;
}

MyArray.prototype.push = function push() {
	for (let i = 0; i < arguments.length; ++i) {
		this[this.length++] = arguments[i];
	}
	return this.length;
};

MyArray.prototype.forEach = function forEach(callback) {
	for (let i = 0; i < this.length; ++i) {
		callback(this[i], i, this);
	}
};

MyArray.prototype.forEach = function forEach(callback) {
	for (let i = 0; i < this.length; ++i) {
		callback(this[i], i, this);
	}
};

MyArray.prototype.filter = function filter(callback) {
	const newArray = new MyArray();
	for (let i = 0; i < this.length; ++i) {
		const isMatch = callback(this[i], i, this);
		if (isMatch) {
			newArray.push(this[i]);
		}
	}
	return newArray;
};

MyArray.isMyArray = function isMyArray(obj) {
	return obj instanceof MyArray;
};

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
console.table(user);
console.table(test2);
console.log(arrClass);
/*	set age(value) {
		if (typeof value !== 'number') {
			throw new TypeError(`Value is not a number.`);
		}
		if (value < 0 || value > 150 || !Number.isInteger(value)) {
			throw new RangeError(`Age must be an integer in [0, 150] range.`);
		}
		this.#age = value;
	}

	get age() {
		return this.#age;
	}

	// virtual properties
	get isAdult() {
		return this.#age >= 18;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(value) {
		if (!/^[a-z]+ [a-z]+$/i.test(value)) {
			throw new TypeError('value is not match full name patter');
		}
		const fullNameItems = value.split(' '); // ['Ivan','Ivanov'];
		this.firstName = fullNameItems[0];
		this.lastName = fullNameItems[1];
	}

	static isUser(obj) {
		return obj instanceof this;
	}
}
*/












