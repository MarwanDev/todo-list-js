const tasksArray = [];

function addTask(task) {
  tasksArray.push(task);
  return tasksArray;
}

function removeTask(index) {
  tasksArray.splice(index, 1);
  return tasksArray;
}

const testTaskArray = [
  {
    description: 'test desc',
    completed: false,
  },
];

function editTask(task, newDesc) {
  const newArray = testTaskArray.map((element) => {
    if (task.index === element.index) {
      return {
        description: newDesc,
        completed: element.completed,
      };
    }
    return element;
  });
  return newArray;
}

function clearComplete(testTaskArray) {
  const newArray = testTaskArray.filter((task) => task.completed === false);
  return newArray;
}

function changeCompleteState(task) {
  const newArray = testTaskArray.map((element) => {
    if (task.index === element.index) {
      return {
        description: element.description,
        completed: !element.completed,
      };
    }
    return element;
  });
  return newArray;
}

exports.addTask = addTask;
exports.removeTask = removeTask;
exports.editTask = editTask;
exports.clearComplete = clearComplete;
exports.changeCompleteState = changeCompleteState;
