//for in => lay key
// for off => lay value

let arr = [ 'hello', 'hi', 'konnichiwa']
for (key in arr) {
  console.log(key)// lay chi so (key)
}
for (key in arr) {
  console.log(arr[key]) // lay gia tri(value)
}
for (value of arr) {
  console.log(value) // lay gia tri(value)
}

let string = 'hello world'
for (key in string) {
  console.log(key)
}
for (key in string) {
  console.log(arr[key])
}
for (value of string) {
  console.log(value) // lay gia tri(value)
}

