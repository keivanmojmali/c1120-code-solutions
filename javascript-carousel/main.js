var $img = document.querySelector('#image');
var count = 1;
var intervalId = null;
var $circles = document.querySelectorAll('#circles');
var $data = document.querySelectorAll('[data-view');
var $arrow = document.querySelectorAll('#arrow');

function renderImage(number) {
  if(number === 1){
    $img.src = "./images/001.png";
  } else if (number === 2) {
    $img.src = "./images/004.png";
  } else if(number === 3) {
    $img.src = "./images/007.png";
  } else if(number === 4) {
    $img.src = "./images/025.png";
  } else if(number === 5) {
    $img.src = "./images/039.png"
  }
}

function controller() {
  count ++;
  renderImage(count);
  changeCircle(count);
  console.log(count);
}

function changeCircle(number) {
  var circleIndex = number - 1;

  for(var i = 0; i < 5; i++){
    $circles[i].className = 'far fa-circle';
  }
  if (count === 6) {
    $circles[0].className = 'fas fa-circle';
    count = 1;
    renderImage(1);
    return;
  } else {
    $circles[circleIndex].className = 'fas fa-circle';
  }
}

function manualClick(number) {
  renderImage(number);
  changeCircle(number);
  count = number;
  clearInterval(intervalId);
  intervalId = setInterval(controller, 3000);
}

document.addEventListener('click', function(e) {
  console.log(event.target);
  var newCount = e.target.dataset.num;
  var newNum = parseInt(newCount);
  if(e.target.id !== 'circles') {
    return;
  }
  manualClick(newNum);
});

document.addEventListener('click',function(e){
  if(e.target.id !== 'arrow') {
    return;
  }

  if(e.target.dataset.direction === 'next') {
    if(count === 5 ) {
      manualClick(1);
      return;
    } else {
      manualClick(count + 1);
    }
  }
  if(e.target.dataset.direction === 'previous') {
    if(count === 1) {
      manualClick(5);
      return;
    } else {
      manualClick(count - 1);
    }
  }
})

intervalId = setInterval(controller, 3000);
