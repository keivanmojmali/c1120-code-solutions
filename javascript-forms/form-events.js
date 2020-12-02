function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);

}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $name = document.querySelector('#user-name');
var $email =  document.querySelector('#user-email');
var $message = document.querySelector('#user-email');


$name.addEventListener('focus',handleFocus);
$name.addEventListener('input', handleInput);
$name.addEventListener('blur', handleBlur);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('input', handleInput);
$email.addEventListener('blur', handleBlur);


$message.addEventListener('focus', handleFocus);
$message.addEventListener('input', handleInput);
$message.addEventListener('blur', handleBlur);
