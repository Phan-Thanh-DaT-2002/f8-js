let a = 
    document.querySelector('.containe');
  console.log(a.innerText);// lay noi dung 
  console.log(a.textContent);// lay noi dung 
  console.log(a.innerHTML);// lay noi dung ben trong the hien co
  console.log(a.outerHTML);// lay noi dung cua ca the hien co luon
  a.innerHTML = '<span>hello</span>';
  a.outerHTML = '<span>world</span>';
  a.innerText = 'chao xin cac  ban'//thay doi noi dung
  let b = document.querySelector('.box')
  b.innerHTML = '<h1> xin chao ne </h1>'