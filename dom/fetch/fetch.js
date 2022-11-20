// goi API lay noi dung duoc luu tru o backend
// API : Application programing inerface
//cong giao tiep giua cac phan mem
// backend - (ulr)API- Fetch- JSON/XML/CSV
// json.parse
var posapi = 'https://jsonplaceholder.typicode.com/users';
fetch(posapi)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) { 
    console.log(data);
    var htmls = data.map(function(datas){
      return `<li>
        <h2>${datas}</h2>
      </li>`
    })
  })
  .catch(function(err){
    console.log('co loi');
  })