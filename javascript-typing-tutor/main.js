var spanIndex = 0;
var $harp = document.querySelectorAll('span');
var $keyHold = [];
var $try = document.querySelector('.off');
var $tryText = document.querySelector('.count-words');
var score = $harp.length / $keyHold.length

console.log($harp.length);
console.log(spanIndex);

document.addEventListener('keydown', function(clicks) {
  $keyHold.push(clicks.key);
  if($harp[spanIndex].textContent === clicks.key) {
    $harp[spanIndex].className = 'green';
    spanIndex++;
    $harp[spanIndex].className = 'underline';
    if (spanIndex === $harp.length) {
      $tryText.textContent = 'You scored a ' + score + "% !";
      $try.className = 'on';
    }

  } else if ($harp[spanIndex].textContent !== clicks.key) {
    $harp[spanIndex].className = 'red underline';


  }
})
