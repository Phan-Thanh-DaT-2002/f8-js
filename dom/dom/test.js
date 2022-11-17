var a = document.querySelector('.container');
console.log([a])
console.log(a.style)
Object.assign(a.style,  {
  height:'100px',
  width: '100px',
  backgroundColor:'green'
});