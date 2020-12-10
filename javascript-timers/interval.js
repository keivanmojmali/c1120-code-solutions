var $count = document.querySelector('#count');
var count = 4;
var intervalID = setInterval(countDown,1000)

function countDown() {
  count = count - 1;
  if(count === 0) {
    $count.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
    return;
  }
  $count.textContent = count;
}
