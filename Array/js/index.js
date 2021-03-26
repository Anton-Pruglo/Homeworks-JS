function MyArray() {
	this.length = 0;
}
MyArray.prototype.push = function(value) {
	this[this.length] = value;
	return ++this.length;
};
MyArray.prototype.forEach = function (callback) {
	for(let i = 0; i < this.length; ++i) {
		callback(this[i], i, this)
	}
};
MyArray.prototype.filter = function (callback) {
	const newArray = new MyArray();
	for(let i = 0; i < this.length; ++i) {
		const isCorrect = callback(this[i], i, this);
		if(isCorrect) {
			newArray.push(this[i]);
		}
	}
};
MyArray.prototype.pop = function () {
	if(!this.length){
		return;
	};
	const lastElement = this.length - 1;
	const valueDel = this[lastElement];
	delete this[lastElement];
	--this.length;
	return valueDel;
};
MyArray.prototype.some = function (callback) {
	for(let i = 0; i < this.length; ++i) {
		if(callback(this[i], i, this)) {
			return true;
		}
	}
	return false;
};
MyArray.prototype.every = function (callback) {
	for(let i = 0; i < this.length; ++i) {
		if(!callback(this[i], i, this)) {
			return false;
		}
	}
	return true;
};
MyArray.prototype.map = function (callback) {
	const newArray = new MyArray();
	for(let i = 0; i < this.length; ++i) {
		newArray.push(callback(this[i], i, this))
	}
	return newArray;
};
MyArray.prototype.reduce = function (callback, currentValue) {
	let accumulator = (currentValue === undefined) ? this[0] : currentValue;
		for (let i = ((accumulator === this[0]) ? 1 : 0); i < this.length; ++i) {
			accumulator = callback(accumulator, this[i], i, this);
		}
	return accumulator;
};

MyArray.prototype.flat = function () {
	return this.reduce((accumulator, this[i]) => accumulator.concat(this[i]), []);
};

