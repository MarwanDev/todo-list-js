import './styles/main.scss';

const todoTasks = [
  {
    index: 1,
    desc: 'Complete MV Task',
    isComplete: false,
  },
  {
    index: 2,
    desc: 'Complete MV Task',
    isComplete: false,
  },
];

const tasksList = document.getElementById('listContainer');

const tasksDisplay = () => {
  todoTasks.forEach((task) => {
    const tasksHtml = (index, desc) => `        <div class="task-container">
    <input type="checkbox" id="checkBox-${index}"></input>
    <h2 class="task-desc" id="taskDesc">${desc}</h2>
    <span>&#8942;</span> 
    </div>`;
    const htmlToAdd = tasksHtml(task.index, task.desc, task.isComplete);
    tasksList.insertAdjacentHTML('afterbegin', htmlToAdd);
  });
};

tasksDisplay();