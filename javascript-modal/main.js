var buttonclicks = 0;
var $container = document.querySelector('.container');
var $modal = document.querySelector('.modal');
var $open = document.querySelector('.open-button');
var $no = document.querySelector('.no-button');
var $modalDiv = document.querySelector('.modal-div');

$open.addEventListener('click', function(clicks) {
  buttonclicks++;
  if(buttonclicks % 2 === 0) {
    $modalDiv.className = 'modal-div';
    $modal.className = 'modal';
  } else {
    $modalDiv.className = 'modal-div on';
    $modal.className = 'modal on';
  }
})

$no.addEventListener('click', function (clicks) {
  buttonclicks++;
  if (buttonclicks % 2 === 0) {
    $modalDiv.className = 'modal-div';
    $modal.className = 'modal';
  } else {
    $modalDiv.className = 'modal-div on';
    $modal.className = 'modal on';
  }
})
