//  JSON: JavaScript Object Notation (JSON)
// number, boolean, null, array, object,string
// mã hóa encode và giải mã decode
var a = '1';//number
var b = '["1", "2"]'; // array
var c = ' {  "name": "dat", " age": 20}';
var d = '"name"';//string
console.log(JSON.parse(a));// json to JavaScript type
console.log(JSON.stringify("dat"));//  JavaScript type to json 

