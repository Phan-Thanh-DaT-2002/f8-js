function Course(name, price) {
  this.name = name;
  this.price = price;
  const test = 'aaaa'
  this.getTest = function () {
    return test
  }
}

const phpcourse = new Course(" php", 1022)
console.log(phpcourse.getTest())


// tao bang class
class Course1 {
  constructor(name, price, test) {
    this.name = name;
    this.price = price;
    this.test = 'test';
  }
  getName() {
    return this.name;
  }


}

const jscourse = new Course1(" js", 1022)
console.log(jscourse.getName())