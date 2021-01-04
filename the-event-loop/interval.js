let count = 3;
const id = setInterval(timer,1100);

function timer() {
  if(count === 0) {
    console.log('Blast off!');
    clearInterval(id);
    count = 3;
  } else (
    console.log(count)
  )
  count--;
}
