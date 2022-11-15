var string = "xin chao \"\" helo\\ xin   " 
console.log(string)
console.log(string.length)// do dai cua chuoi

var string1 = "cac ban  nho"

console.log(`toi la :${string} + ${string1}`)

console.log(string.indexOf('in'))// tra ve vi tri cua chuoi
console.log(string.indexOf('in', 4))// tra ve vi tri cua chuoi tim kiem bat dau tu vi tri thu 4
console.log(string.indexOf('acb'))// tra ve -1 neu k thay
console.log(string.slice(4,8))// cat chuoi tu vi tri thu 4 den vi tri thu 8
console.log(string.slice(4))// cat chuoi tu vi tri thu 4 den vi tri cuoi cung
console.log(string.slice(-3, -1))// cat chuoi tu vi tri cuoi chuoi
console.log(string.replace('xin', 'xinn'))// thay the chuoi (chi thay the chu dau tien tim thay)
console.log(string.replace(/xin/g, 'xinn'))// thay the chuoi thay tat ca chuoi tim thay duoc
console.log(string.toLowerCase())// viet thuong
console.log(string.toUpperCase())// viet hoa
console.log(string.trim())// xoa khoang trang o dau va cuoi
var khoa_hhoc = ' php, nihon, lam giau'
console.log(khoa_hhoc.split(', '))// array of strings










