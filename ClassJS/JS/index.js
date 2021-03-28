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
const user2 = new User({ fullName:'Ivan Ivanov', age: 12,gender: 'Man', email:'test@gmail.com', country: 'Uganda' });
const user3 = new User({ fullName:'Timur Tramp', age: 34,gender: 'Man', email:'test@gmail.com', country: 'Ukraine' });
const user4 = new User({ fullName:'Don Karleon', age: 57,gender: 'woman', email:'test@mail.ru', country: 'China' });
const worker = new Employee({ fullName:'Petr Petrov', age: 45,gender: 'Man', email:'test@mail.com', country: 'Germany', salary: 1050, position: 'clerc', department: 'meneger' });
const worker2 = new Employee({ fullName:'Vera Bregneva', age: 25,gender: 'woman', email:'bla-bla@gmail.com', country: 'Ukraine', salary: 600, position: 'junior', department: 'ITprogrammers' });
const worker3 = new Employee({ fullName:'Larisa Lil', age: 12,gender: 'woman', email:'test@mail.ru', country: 'Ukraine', salary: 1200, position: 'boss', department: 'HUGO-BOSS' });

const arrayClass = [user, user2, user3, user4, worker, worker2, worker3];

const arrayUsers = arrayClass.filter(item => !(item instanceof Employee));


function getAverageAge(array) {
	const averageAge = array.reduce((previusValue, item) => previusValue + item.age, 0) / array.length;
	return Math.round(averageAge);
}

function getAverageAgeMinors(array) {
	const averageAge = array.reduce((previusValue, item) => (item.age < 18) ? previusValue + item.age : previusValue, 0) / array.length;
	return Math.round(averageAge);
}
function getAverageSalaryDepartment(array) {
	const filterUser = array.filter(item => (item instanceof  Employee));
	const departmentSalary = filterUser.reduce(function (previusValue, item, index, array) {
		if(Array.isArray(previusValue[item.department])) {
			previusValue[item.department].push(item.salary);
		} else {
			previusValue[item.department] = new Array;
			previusValue[item.department].push(item.salary);
		}
	return previusValue;
	}, {});
	const averageSalaryDepartment = array.reduce((previusValue, item) => previusValue + array.salary, 0) / array.length;
	return Math.round(averageSalary);*/
}
function getUserIsGmail(array) {
    return array.filter(item => item.email.includes('gmail.com'));
}
function getEmail(array)  {
	const getFilterUser =  array.filter(item => (item instanceof Employee) && item.gender == 'woman' &&  (item.age >= 18 && item.age <= 30 ) && item.country == 'Ukraine');
	return getFilterUser.map(item => item.email);
}



console.log(arrayClass);
console.log(arrayUsers);
const a = getUserIsGmail(arrayClass);
console.log(a);
const b = getAverageSalaryDepartment(arrayClass);
console.log(b);













