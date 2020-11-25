var buttonClick = 0;
var $light = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');

$light.addEventListener('click',function(clicks){
  buttonClick++;
  if(buttonClick %2 === 0) {
    $light.className = 'light-bulb';
    $container.className = 'container';
  } else {
    $light.className = 'light-bulb off';
    $container.className = 'container off'

  }
})
