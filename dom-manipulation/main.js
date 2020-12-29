var buttonClicks = 0;
var $hot = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
$hot.addEventListener('click', function(aClick) {
  buttonClicks ++;
});

$hot.addEventListener('click', function(aClick){
  clickCount.textContent = 'Click: ' +buttonClicks;
})

function setColor(count) {
  if(buttonClicks < 4) {
    $hot.className = 'hot-button cold';
  } else if (buttonClicks < 7) {
    $hot.className = 'hot-button cool';
  } else if (buttonClicks < 10) {
    $hot.className = 'hot-button tepid';
  } else if (buttonClicks < 13) {
    $hot.className = 'hot-button warm';
  } else if (buttonClicks , 16) {
    $hot.className = 'hot-button hot';
  } else {
    $hot.className = 'hot-button nuclear';
  }
}

$hot.addEventListener('click', setColor);
