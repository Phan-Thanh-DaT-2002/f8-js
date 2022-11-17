// // callback 
// 1 là hàm
// 2 được truyền qua đối số
// 3 được gọi lại

let a = [ 'hello', 'hi', 'konnichiwa', 'xin chao']

let b = a.map(function(x){
  return x
})  
console.log(b)
// giong nhau
function goi_lai(x){
  return x
}
let c = a.map(goi_lai)
console.log(c)
