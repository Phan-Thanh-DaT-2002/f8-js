var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
  console.log('clic');
}
)

function viec1(){
  console.log('clic1');
}
btn.addEventListener('click', viec1)
btn.addEventListener('click', function (e) {
  console.log('clic2');
}
)

setTimeout(function(){
  btn.removeEventListener('click', viec1)// sau 3s huy lang nghe viec 1
},3000);