//sync
//Async
//kho khan
//giai quyet
//ex
// bat dong bo//setTimeout, setInterval, clearTimeout, clearInterval, fetch, xmlHttpRequest
// doc file (file reading javascript)

// setTimeout(function () {
//   console.log("hello");
// },3000);
// console.log("hello1");


//kho khan callback hell
// kim tu thap // pyramid of doom

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var err = 'loi'
var pro = new Promise(

  function (resolve, reject) {
    //khi vd dk giai quyet thi goi den resolve
    //khi vd k dk giai quyet thi goi den reject
    resolve(arr);
  }
)
pro
  .then(function (arr) {// khi xu ly loi thanh cong
    console.log(arr)
    return new Promise(function (resolve) {// phai doi khi xu li ham nay xong moi den ham tiep theo
      setTimeout(function () {
        resolve(arr1);
      }, 1000);
    });
  })
  .then(function (arr1) {// khi xu ly loi thanh cong
    console.log(arr1)
    return new Promise(function (resolve) {// phai doi khi xu li ham nay xong moi den ham tiep theo
      setTimeout(function () {
        resolve(arr2);
      }, 1000);
    });
  })
  .then(function (arr2) {// khi xu ly loi thanh cong
    console.log(arr2);
  })
  .catch(function (err) {// khi xu li loi that bai
    console.log(err);
  })
  .finally(function () {// ca thanh cong lan that bai deu chay .finally()
    console.log("done");
  })


// ket qua luon thanh cong hoac luon that bai
var promise = Promise.resolve("sus!");
//var promise = Promise.reject('err')
promise
  .then(function (ok) {
    console.log(ok);
  })
  .catch(function (err) {
    console.log(err);
  })


// promise.all chay song song cac promise
var pro1 = new Promise(function (resolve) {
  setTimeout(function(){resolve([1]) }, 2000)
});
var pro2 = new Promise(function (resolve ) {
  setTimeout(function(){resolve([2, 3]) }, 5000);
})

Promise.all([pro1, pro2]).then(function (arr) {// khi pro1 va pro 2 xong thi moi vao cai ham nay
 var rel1 = arr[0];
 var rel2 = arr[1];
return console.log(rel1.concat(rel2));;
})
