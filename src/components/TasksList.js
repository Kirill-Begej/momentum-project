export default class TasksList {
  constructor({ setTaskText }) {
    this._tasksContainerElement = document.querySelector('#tasksContainer');
    this._tasksStartElement = document.querySelector('#tasksStart');
    this._startButtonElement = document.querySelector('#startButton');
    this._tasksListElement = document.querySelector('#tasksList');
    this._tasksInputElement = document.querySelector('#tasksInput');
    this._setTaskText = setTaskText;
  }

  enableTasksList() {
    if (this._tasksContainerElement.classList.contains('tasks__container_opened')) {
      this._closeTasksList();
    } else {
      this._openTasksList();
    }
  }

  addTaskInTasksList(taskElement) {
    this._tasksStartElement.classList.add('tasks__start_hide');
    this._tasksListElement.classList.add('tasks__list_visibility');
    this._tasksListElement.append(taskElement);
  }

  _openTasksList() {
    this._tasksContainerElement.classList.add('tasks__container_opened');
    if (this._tasksListElement.childNodes.length) {
      this._tasksListElement.classList.add('tasks__list_visibility');
      this._tasksInputElement.classList.add('tasks__input_visibility');
      this._tasksInputElement.focus();
    }
    this._addEventListeners();
  }

  _closeTasksList() {
    this._tasksContainerElement.classList.remove('tasks__container_opened');
    this._tasksInputElement.classList.remove('tasks__input_visibility');
    if (this._tasksListElement.childNodes.length) {
      this._tasksListElement.classList.remove('tasks__list_visibility');
    }
    this._startButtonElement.classList.remove('tasks__start-button_hide');
    this._startButtonElement.disabled = false;
    this._tasksInputElement.value = '';
    this._removeEventListeners();
  }

  _startAddTasks() {
    this._tasksInputElement.classList.add('tasks__input_visibility');
    this._startButtonElement.classList.add('tasks__start-button_hide');
    this._startButtonElement.disabled = true;
    this._tasksInputElement.focus();
  }

  _setText(e) {
    if (e.target.value.charAt(0) === ' ') {
      this._tasksInputElement.value = '';
    } else {
      this._taskText = e.target.value;
    }
  }

  _sendText(e) {
    if (e.key === 'Enter' && this._taskText !== '') {
      this._setTaskText(this._taskText.trim());
      this._taskText = '';
      this._tasksInputElement.value = '';
    }
  }

  _addEventListeners() {
    this._clickStartButton = this._startAddTasks.bind(this);
    this._startButtonElement.addEventListener('click', this._clickStartButton);
    this._textInput = this._setText.bind(this);
    this._tasksInputElement.addEventListener('input', this._textInput);
    this._sendTextInput = this._sendText.bind(this);
    this._tasksInputElement.addEventListener('keydown', this._sendTextInput);
  }

  _removeEventListeners() {
    this._startButtonElement.removeEventListener('click', this._clickStartButton);
    this._tasksInputElement.removeEventListener('input', this._textInput);
    this._tasksInputElement.removeEventListener('keydown', this._sendTextInput);
  }
}
