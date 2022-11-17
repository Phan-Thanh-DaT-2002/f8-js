var ngon_ngu = [ 
  'hello',
  123,
  null,
  '123'
]

console.log(ngon_ngu)
console.log(Array.isArray(ngon_ngu))// kiem tra xem co phai la mang hay khong
console.log(Array.isArray({}))

console.log(ngon_ngu.toString())
console.log(ngon_ngu.join('_ '))// chuyen thanh string va co phan cach
console.log(ngon_ngu.pop())// xoa phan tu cuoi va tra ve phan tu do
console.log(ngon_ngu)

console.log(ngon_ngu.push('hello1', 'hello2'))// them vao cuoi mang va tra ve so phan tu hien co
console.log(ngon_ngu.shift())// them vao dau mang va tra ve phan tu hien co
console.log(ngon_ngu)

console.log(ngon_ngu.unshift('hello3'))//them phan tu vao dau mang 
console.log(ngon_ngu)

console.log(ngon_ngu.splice(2, 1))// xoa 1 phan tu tu vi tri so 2
console.log(ngon_ngu  )

console.log(ngon_ngu.splice(2, 0, 'hello mn'))// xoa 0 phan tu tu vi tri so 2 sau do chen 'hello mn' vao vi tri do
console.log(ngon_ngu  )

console.log(ngon_ngu.splice(2, 1, 'hello mn1'))// thay the phan tu trong mang
console.log(ngon_ngu  )

let ngon_ngu_1 = [ 'xin chao', 'minh la nguoi viet']
console.log(ngon_ngu.concat(ngon_ngu_1))// noi 2 mang voi nhau


var ngon_ngu_2 = [
  {
    thoi_gian_hoc : 4,
    ten : 'tieng_nhat',
    diem :0
  },
  {
    thoi_gian_hoc : 5,
    ten : 'tieng_trung',
    diem : 0
  },
  {
    thoi_gian_hoc : 5,
    ten : 'tieng_anh',
    diem : 0
  },
  {
    thoi_gian_hoc : 6,
    ten : 'tieng_han',
    diem : 0
  },
  {
    thoi_gian_hoc : 7,
    ten : 'tieng_ha_lan',
    diem : 0  
  },
  {
    thoi_gian_hoc : 11,
    ten : 'tieng_trung',
    diem : 0
  },
  {
    thoi_gian_hoc : 10,
    ten : 'tieng_trung',
    diem : 0
  }
];
//lap duyet qua mang tra ve mang
ngon_ngu_2.forEach(function(key, value){
  console.log(key, value);
})

//lap duyet qua mang tra ve bol neu nhu 1 dk k thoa man thi tra ve false
  let is_liet_1 = ngon_ngu_2.every(function(value,key){
    return value.diem === 0
  })
  console.log(is_liet_1)

  //lap duyet qua mang tra ve bol neu nhu 1 dk thoa man thi tra ve true
  let is_liet_2 = ngon_ngu_2.some(function(value,key){
    return value.diem === 1
  })
  console.log(is_liet_2)


 // lap qua mang va tra ve chinh phan tu do(1 phan tu dau tien)
  var ham_find = ngon_ngu_2.find(function(ham_find){
    return ham_find.ten === 'tieng_trung';
  });
  console.log(ham_find)


   // lap qua mang va tra ve chinh phan tu do(tat ca cac phan tu thoa man)
   var ham_find_1 = ngon_ngu_2.filter(function(ham_find_1){
    return ham_find_1.ten === 'tieng_trung';
  });
  console.log(ham_find_1)

  //map() duyet mang va tao ra 1 mang moi 
  var new_mang = ngon_ngu_2.map(function(ngon_ngu_2){
    return ngon_ngu_2.ten;
  })
  console.log(new_mang)

  // reduce truyen vao 1 function + 1 đối số duyet qua mang tra ve 1 ket qua
  var reduce_mang = ngon_ngu_2.reduce(function(){

  }, 0)

  console.log(ngon_ngu_2.includes('tieng trung', 4)) // kierm tra tu vi tri so 4
/// vd mang
var ngon_ngu_3 = [ 'tieng_kinh', 'tieng thai'];
ngon_ngu_3.length = 10;
for (var i = 0; i < ngon_ngu_3.length; i++) {
  console.log(ngon_ngu_3[i]);
}

for ( var index in ngon_ngu_3){
  console.log(ngon_ngu_3[index]);
}
var m = new Array(10)// mang co 10 phan tu
var n = new Array(10,11)// mang co 2 phan tu la 10 va 11
console.log(m,n)


