function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var $button = document.querySelector('.click-button');


$button.addEventListener('click',handleClick);



function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
