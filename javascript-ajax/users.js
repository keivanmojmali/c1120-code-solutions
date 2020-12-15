var $user = document.querySelector('#user-list');

var newXhr = new XMLHttpRequest();
newXhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
newXhr.responseType = 'json';
newXhr.addEventListener('load',function(){
  console.log(newXhr.status);
  console.log(newXhr.response);
  for(var i = 0; i < newXhr.response; i++){
    var el = document.createElement('li');
    el.textContent = JSON.parse(newXhr.response[i].name);
    $user.appendChild('el');
  }
})
newXhr.send();
