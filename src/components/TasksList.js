export default class TasksList {
  constructor() {
    this._tasksContainerElement = document.querySelector('#tasksContainer');
    this._startButtonElement = document.querySelector('#startButton');
    this._tasksInputElement = document.querySelector('#tasksInput');
  }

  openOrClose() {
    if (this._tasksContainerElement.classList.contains('tasks__container_opened')) {
      this._tasksContainerElement.classList.remove('tasks__container_opened');
      this._tasksInputElement.classList.remove('tasks__input_visibility');
      this._startButtonElement.classList.remove('tasks__start-button_hide');
      this._startButtonElement.disabled = false;
      this._startButtonRemoveEventListeners();
    } else {
      this._tasksContainerElement.classList.add('tasks__container_opened');
      this._startButtonAddEventListeners();
    }
  }

  _startButtonAddEventListeners() {
    this._clickStartButton = this._startAddTasks.bind(this);
    this._startButtonElement.addEventListener('click', this._clickStartButton);
  }

  _startButtonRemoveEventListeners() {
    this._startButtonElement.removeEventListener('click', this._clickStartButton);
  }

  _startAddTasks() {
    this._tasksInputElement.classList.add('tasks__input_visibility');
    this._startButtonElement.classList.add('tasks__start-button_hide');
    this._startButtonElement.disabled = true;
    this._tasksInputElement.focus();
  }
}
