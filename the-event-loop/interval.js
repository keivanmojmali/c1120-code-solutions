let count = 3;
const timeoutId = setInterval(timer,1100);

function timer() {
  if(count = 0) {
    console.log('Blast off!');
    setInterval(timeoutId);
    count = 3;
  } else (
    console.log(count)
  )
  count--;
}
