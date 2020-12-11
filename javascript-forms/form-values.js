var $contact = document.querySelector('#contact-form');


var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-email');
var $theName = $contact.elements.name.value;
var $theEmail = $contact.elements.email.value;
var $theMessage = $contact.elements.message.value;



$contact.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = $contact.elements.name.value;
  var email = $contact.elements.email.value;
  var message = $contact.elements.message.value;
  var $theValues = {name,email,message};
  console.log('Values',$theValues);
  $contact.reset();
})
