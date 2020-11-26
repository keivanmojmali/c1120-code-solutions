var spanIndex = 0;
var $harp = document.querySelectorAll('span');
var keysCount = 0;
var $try = document.querySelector('#try');
var $tryText = document.querySelector('.count-words');
var $harpLength = $harp.length - 1;



document.addEventListener('keydown', function(clicks) {
  keysCount++;
  if($harp[spanIndex].textContent === clicks.key) {
    $harp[spanIndex].className = 'green';
    spanIndex++;
    $harp[spanIndex].className = 'underline';

    if (spanIndex === $harpLength) {
      var score = Math.round(($harpLength / keysCount) * 100);
      $tryText.textContent = 'You scored a '+ score + "% !";
      $try.className = 'on';
    }

  } else if ($harp[spanIndex].textContent !== clicks.key) {
    $harp[spanIndex].className = 'red underline';

  }
})
