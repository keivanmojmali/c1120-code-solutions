var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function(e) {
  console.log('Event Target: ',e.target);
  console.log('Event Target Tag Name: ',e.target.tagName);
  var buttons = document.querySelector('button');
  if (e.target === buttons) {
    var eventTask = e.target.closest('.task-list-item');
    console.log('Event Target Task', eventTask);
    eventTask.remove();
  }
})
