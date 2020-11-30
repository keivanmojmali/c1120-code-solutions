var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function(e) {
  console.log('Event Target: ',event.target);
  console.log('Event Target Tag Name: ',event.target.tagName);
})

  taskList.addEventListener('click', function(e) {
  var eventTask = event.target.closest('.task-list-item');
  console.log('Event Target Task',eventTask);
  eventTask.remove();
})
