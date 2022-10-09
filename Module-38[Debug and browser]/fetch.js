
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))

console.log('This will be the first runner');
setTimeout(() => console.log("Hello"), 5000);
console.log('This will be the second runner');
console.log('This will be the third runner');