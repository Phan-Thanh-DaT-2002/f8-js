 const a = function my_function(x){
  console.log(x);
}
//function mui ten
//c1
const b = x =>{
  console.log(x);
}
a('hell');
b('hell1');

//c2

const sum = (a, b) => a+b;// return khoi code trong {}
console.log(sum(1,5));
//c3
const rt = (a, b) => ({a:a, b:b}); //return Object
console.log(rt(1,5));
//c4
const csl = ip => console.log(ip);// 1 tham so
csl("hh")