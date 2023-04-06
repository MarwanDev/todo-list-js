const tasksArray = [];

function addTask(task) {
  tasksArray.push(task);
  return tasksArray;
}

function removeTask(index) {
  tasksArray.splice(index, 1);
  return tasksArray;
}

exports.addTask = addTask;
exports.removeTask = removeTask;
