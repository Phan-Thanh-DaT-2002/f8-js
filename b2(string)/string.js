var mystring = 'xin chao cac ban nho nhan xin xin!';
console.log('có một chuỗi như sau: ' + mystring);
console.log('độ dài của chuỗi là: ' + mystring.length)
//1 TÌM KIẾM
  console.log(mystring.includes('xin chao', 4)) // kierm tra tu vi tri so 4
  console.log('chữ \'xin\' ở vị trí số(bắt đầu tìm từ vị trí số 6): ' + mystring.indexOf('xin', 6))
  //  mystring.indexOf('xin'): tìm chữ xin từ vị trí đầu của chuỗi
  //  mystring.indexOf('xin', 6): tìm chữ xin từ vị trí thứ 6 của chuỗi
  //  mystring.lastIndexOf('xin'): tìm chữ xin từ vị trí cuối của chuỗi
  // không tìm được thì kết quả trả về -1
  //  mystring.search('xin'): tìm chữ xin từ vị trí đầu của chuỗi
// 2 CẮT CHUỖI
  console.log(''+ mystring.slice(4))// cat chuỗi từ vị trí số 4 đến hết
  console.log(''+ mystring.slice(4, 8))// cat chuỗi từ vị trí số 4 đến 6
  console.log(''+ mystring.slice(-4, -1))// cat chuỗi từ vị trí cuối danh sách
// // thay thế
//   console.log(''+ mystring.replace("xin", 'haha'))// thay thế chữ xin đầu tiên thành chữ hâha
//   console.log(''+ mystring.replace(/xin/g, 'haha'))// thay thế mọi chữ xin thành chữ hâha
// //VIET HOA VIET THUONG
  // console.log(''+ mystring.toUpperCase())
  // console.log(''+ mystring.toLowerCase())
//HAM TRIM  loại bỏ khoảng trắng 2 đầu chuỗi
  console.log(''+ mystring.trim())
 // console.log(''+ mystring.toUpperCase())
 //CẮT CHUỖI THÀNH MẢNG CÓ ĐIỂM CHUỖI
  console.log(mystring.split(' '))
 //TRẢ VỀ KÍ TỰ CỦA CHUỖI
  console.log(mystring.charAt(4))

var mystring2 = 123456789.123;
console.log(Number.isFinite(mystring2)); // true Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
console.log(Number.isFinite(mystring2)); // true
console.log(Number.isFinite(mystring2)); // true

console.log(Number.isInteger(999999999)); // true Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
console.log(Number.isInteger(0.2));       // false
console.log(Number.isInteger(Math.PI));   // false

console.log(Number.parseFloat('10')) // 10 Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
console.log(Number.parseFloat('10.00')) // 10
console.log(Number.parseFloat('238,21') )// 238
console.log(Number.parseFloat('237.22')) // 237.22
console.log(Number.parseFloat('34 56 78')) // 34
console.log(Number.parseFloat(' 37 ')) // 37
console.log(Number.parseFloat('18 is my age')) // 18

console.log(Number.parseInt('10')) // 10 Chuyển đổi chuỗi đã cho thành một số nguyên
console.log(Number.parseInt('10.00')) // 10
console.log(Number.parseInt('238,21')) // 238
console.log(Number.parseInt('237.22')) // 237
console.log(Number.parseInt('34 56 78')) // 34
console.log(Number.parseInt(' 37 ')) // 37
console.log(Number.parseInt('18 is my age')) // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18' Chuyển đổi và trả về số đã cho dưới dạng chuỗi
(17.3).toString();   // '17.3'

