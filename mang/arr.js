var khoa_hhoc = [
  'lol1',
  'lol2',
  'lol3',
  'lol4',
  'lol5',
  null,
  123,
  function(){}
];
var khoa_hhoc1 = [' lollllllll']
console.log(khoa_hhoc);
console.log(typeof khoa_hhoc);
console.log(Array.isArray(khoa_hhoc));// kiem tra xem co phai mang hay khong
console.log(khoa_hhoc[5]);
console.log(khoa_hhoc.toString());// chuyen mang qua chuoi
console.log(khoa_hhoc.join(' '));//chuyen mang qua chuoi them dau cach vao giua moi phan tu
console.log(khoa_hhoc.pop());// xoa phan tu cuoi mang va tra ve phan tu da xoa
console.log(khoa_hhoc.push(' lol6', ' lol7')); // them phan tu cuoi mang va tra ve so phan tu hien co phan tu 
console.log(khoa_hhoc.push());// tra ve so phan tu hien co
console.log(khoa_hhoc.shift()); // xoa phan tu dau va tra ve phan tu do
console.log(khoa_hhoc.unshift('lolll', ' lolll1')); //them phan tu dau va tra ve so phan tu cua mang do
khoa_hhoc.splice(1, 2); //dat con tro vao vi tri so 1, tu vi tri 1 xoa di 2 phan tu
khoa_hhoc.splice(1, 2, 'hello' ,'hello 1'); //dat con tro vao vi tri so 1, tu vi tri 1 xoa di 2 phan tu, chem chuoi 'hello' va hello 1 vao vi tri do(thay the) 
console.log(khoa_hhoc);
console.log(khoa_hhoc.concat(khoa_hhoc1));// hop nhat vao mang khoa_hhoc
console.log(khoa_hhoc.slice(1, 3));// cat mang tu vi tri 1-3
console.log(khoa_hhoc.slice(-3, -1));// cat mang tu vi tri cuoi mang














