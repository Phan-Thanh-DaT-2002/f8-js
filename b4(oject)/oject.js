//oject
let oject = {
  name: 'dat',
  age: 12,
  getname : function(){
    return this.name
  }
}
oject.hello = 'hello mm'
console.log(oject)

delete oject.hello
console.log(oject)
console.log(oject.getname())

// contructer

 var user = function(firstname, lastname, age){
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}
 
var hao = new user('do', 'van hao', 20)// them cac thuoc tinh vao tung doi tuong rieng biet
let cong = new user('phung', 'ba cong' , 20.1)

hao.hello = 'xin chao'
cong.xin_chao = 'hello'
console.log(hao, cong)


//oject prototype them thuoc tinh vao tat ca doi tuong

user.prototype.class = 'cntt'
user.prototype.getclass = function(){
  return this.class
}

console.log(hao.class)
console.log(hao.getclass())


//math
var rand = Math.floor(Math.random()*8);
var poit = [ 
  '10 coin',
  '20 coin',
  '30 coin',
  '40 coin',
  '50 coin',
  '60 coin',
  '70 coin',
  '80 coin',
]

console.log(poit[rand])