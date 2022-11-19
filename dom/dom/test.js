var a = document.querySelector('.container');
console.log([a])
console.log(a.style)
Object.assign(a.style, {
  height: '100px',
  width: '100px',
  backgroundColor: 'green'
});

var inputelm = document.querySelector('#ten');
inputelm.onchange = function (e) {// onchange event thay doi khi bo chuot khoi o
  console.log(e.target.value);
}
var ipadr = document.querySelector('#adr');

ipadr.oninput = function (e) {// oninput event nhan ket qua khi nhanh thay bat cu su thay doi nao // run de biet
  console.log(e.target.value);
}


var ipcheck = document.querySelector('input[type=checkbox]');


ipcheck.onchange = function (e) {
  console.log(e.target.checked);
}// checked return true or false

var ipselect = document.querySelector('select');

ipselect.oninput = function (e) {
  console.log(e.target.value);
}

//keybroad event  keyup kedown
var keybroad = document.querySelector('#ten');

keybroad.onkeydown = function (e) {
  console.log(e);
}
document.parentDefault// ngan chan hanh vi mac dinh ma binh thuong no xay ra nhu vay
//document.stopPronagation() // 