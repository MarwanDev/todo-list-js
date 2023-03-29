import Task from './task.js';

export default class Tasks {
  constructor() {
    this.tasksList = document.getElementById('listContainer');
    this.taskDesc = document.getElementById('desc');
    this.tasksArray = [];
    if (localStorage.getItem('TaskStorage')) {
      this.tasksArray = JSON.parse(localStorage.getItem('TaskStorage'));
      this.tasksDisplay();
    }
  }

  addTask = () => {
    const desc = this.taskDesc.value;
    const isComplete = false;
    const task = new Task(desc, isComplete);
    this.tasksArray.push(task);
    this.tasksDisplay();
    this.saveToLocalStorage();
    this.taskDesc.value = '';
  };

  saveToLocalStorage = () => {
    localStorage.setItem('TaskStorage', JSON.stringify(this.tasksArray));
  };

  tasksDisplay = () => {
    this.tasksArray.forEach((task, index) => {
      this.tasksHtml = (desc) => `        <div class="task-container">
      <input type="checkbox" id="checkBox"></input>
      <h2 class="task-desc" id="taskDesc">${desc}</h2>
      <span id="removeBtn">&#8942;</span> 
      </div>`;
      const htmlToAdd = this.tasksHtml(task.desc, task.isComplete);
      this.tasksList.insertAdjacentHTML('afterbegin', htmlToAdd);
      this.checkBox = document.getElementById('checkBox');
      this.checkBox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
          this.tasksArray[index].isComplete = true;
        } else {
          this.tasksArray[index].isComplete = false;
        }
        this.saveToLocalStorage();
      });
      this.removeBtn = document.getElementById('removeBtn');
      this.removeBtn.onclick = () => this.removeTask(index);
    });
  }

  removeTask = (index) => {
    this.tasksArray.splice(index, 1);
    this.tasksList.innerHTML = '';
    this.tasksDisplay();
    this.saveToLocalStorage();
  };

  clearComplete = () => {
    for (let i = 0; i < this.tasksArray.length; i += 1) {
      if (this.tasksArray[i].isComplete) {
        this.tasksArray.splice(i, 1);
      }
    }
    this.tasksList.innerHTML = '';
    this.tasksDisplay();
    this.saveToLocalStorage();
  }
}