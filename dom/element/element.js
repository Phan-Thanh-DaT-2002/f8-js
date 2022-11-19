// lay element: ID, class, tag, CSS selector, HTML collection
var a = document.getElementById('h1')
console.log(a)

var b = document.getElementsByClassName('h2')[0]
console.log(b)

var c = document.getElementsByTagName('p')
console.log(c)

var d = document.querySelector('.h2')
d.className = 'h2'// thêm class 'h2' vào element h2 
d.setAttribute('data', 'h3')//thêm class 'data' vào element h2 (thêm hững thuộc tính không hợp lệ)
console.log(d.getAttribute('h2'))// lấy thuộc tính h2(lấy được những thuộc tính không hợp lếj)

var e = document.querySelectorAll('.h2')
console.log(e)
console.log(e[1])


//class list prototype
var helo = document.querySelector('.helo')
  helo.classList.add('red', 'green', ' ...')// add 1 class vao trong 1 the
  helo.classList.remove('red', 'green', '...')// remove 1 class vao trong 1 the
  helo.classList.toggle('red', 'green', '...')// neu trong element co class thi xoa no con khong co thi them vaof
  helo.classList.contains(' red')// kiem tra xem co class trong element hay k
