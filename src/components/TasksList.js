export default class TasksList {
  constructor({ setTaskText, renderTasksInLocalStorage }) {
    this._tasksContainerElement = document.querySelector('#tasksContainer');
    this._tasksStartElement = document.querySelector('#tasksStart');
    this._startButtonElement = document.querySelector('#startButton');
    this._tasksRemoveAllButtonElement = document.querySelector('#buttonRemoveAll');
    this._tasksListElement = document.querySelector('#tasksList');
    this._tasksInputElement = document.querySelector('#tasksInput');
    this._tasksInputFieldElement = document.querySelector('#tasksInputField');
    this._tasksInputErrorElement = document.querySelector('#tasksInputError');
    this._setTaskText = setTaskText;
    this._renderTasksInLocalStorage = renderTasksInLocalStorage;
    this._tasksListOpened = false;
    this._tasksState = [];
  }

  enableTasksList() {
    if (this._tasksListOpened) {
      this._closeTasksList();
      this._tasksListOpened = false;
    } else {
      this._openTasksList();
      this._tasksListOpened = true;
    }
  }

  addTaskInTasksList(taskElement) {
    if (!this._tasksState.length) {
      this._tasksStartElement.classList.add('tasks__start_hide');
      this._tasksListElement.classList.add('tasks__list_visibility');
    }
    this._tasksListElement.append(taskElement);
  }

  addTaskInState(id, taskText, completed) {
    this._tasksState.push({
      id,
      taskText,
      completed,
    });
    this._setStateInLocalStorage();
  }

  changeTaskInState(id, completed) {
    this._tasksState.forEach((item) => {
      if (item.id === id) {
        item.completed = completed;
      }
    });
    this._setStateInLocalStorage();
  }

  removeTaskInState(id) {
    const newState = this._tasksState.filter((item) => item.id !== id);
    this._tasksState = newState;
    this._setStateInLocalStorage();
    this._checkEmptyState();
  }

  _openTasksList() {
    if (this._tasksState.length !== this._getStateInLocalStorage().length) {
      this._tasksState = this._getStateInLocalStorage();
      this._renderTasksInLocalStorage(this._tasksState);
      this._visibilityTasksList();
    } else if (this._tasksState.length) {
      this._visibilityTasksList();
    } else {
      this._tasksContainerElement.classList.add('tasks__container_empty');
      this._tasksInputElement.classList.remove('tasks__input_visibility');
    }
    this._addEventListeners();
  }

  _closeTasksList() {
    if (this._tasksState.length) {
      this._tasksListElement.classList.remove('tasks__list_visibility');
      this._tasksContainerElement.classList.remove('tasks__container_opened');
      this._tasksRemoveAllButtonElement.classList.remove('tasks__remove-all-button_visibility');
    } else {
      this._tasksContainerElement.classList.remove('tasks__container_empty');
    }
    this._startButtonElement.classList.remove('tasks__start-button_hide');
    this._startButtonElement.disabled = false;
    this._removeEventListeners();
  }

  _visibilityTasksList() {
    this._tasksContainerElement.classList.add('tasks__container_opened');
    this._tasksRemoveAllButtonElement.classList.add('tasks__remove-all-button_visibility');
    this._tasksListElement.classList.add('tasks__list_visibility');
    this._tasksInputElement.classList.add('tasks__input_visibility');
    this._tasksInputErrorElement.classList.remove('tasks__input-error_visibility');
    this._tasksInputFieldElement.focus();
    this._tasksStartElement.classList.add('tasks__start_hide');
  }

  _startAddTasksHandler() {
    this._tasksInputElement.classList.add('tasks__input_visibility');
    this._startButtonElement.classList.add('tasks__start-button_hide');
    this._startButtonElement.disabled = true;
    this._tasksInputErrorElement.classList.remove('tasks__input-error_visibility');
    this._tasksInputFieldElement.focus();
  }

  _setTextHandler(e) {
    if (e.target.value.charAt(0) === ' ') {
      e.target.value = '';
      if (!this._tasksInputElement.value) {
        this._tasksInputErrorElement.classList.add('tasks__input-error_visibility');
      }
    } else if (!e.target.value) {
      this._tasksInputErrorElement.classList.add('tasks__input-error_visibility');
    } else {
      this._tasksInputErrorElement.classList.remove('tasks__input-error_visibility');
      this._taskText = e.target.value;
    }
  }

  _sendTextHandler(e) {
    if (e.key === 'Enter' && this._taskText) {
      this._setTaskText(this._taskText.trim());
      this._taskText = '';
      this._tasksInputFieldElement.value = '';
      this._tasksContainerElement.classList.remove('tasks__container_empty');
      this._tasksContainerElement.classList.add('tasks__container_opened');
      this._tasksRemoveAllButtonElement.classList.add('tasks__remove-all-button_visibility');
    }
    this._taskText = '';
  }

  _removeAllTasksHandler() {
    const newState = this._tasksState.filter((item) => !item.completed);
    this._tasksState = newState;
    this._tasksListElement.innerHTML = '';
    this._setStateInLocalStorage();
    this._renderTasksInLocalStorage(this._tasksState);
    this._checkEmptyState();
  }

  _addEventListeners() {
    this._clickStartButton = this._startAddTasksHandler.bind(this);
    this._startButtonElement.addEventListener('click', this._clickStartButton);
    this._textInput = this._setTextHandler.bind(this);
    this._tasksInputElement.addEventListener('input', this._textInput);
    this._sendTextInput = this._sendTextHandler.bind(this);
    this._tasksInputElement.addEventListener('keydown', this._sendTextInput);
    this._removeAllTasksButton = this._removeAllTasksHandler.bind(this);
    this._tasksRemoveAllButtonElement.addEventListener('click', this._removeAllTasksButton);
  }

  _removeEventListeners() {
    this._startButtonElement.removeEventListener('click', this._clickStartButton);
    this._tasksInputElement.removeEventListener('input', this._textInput);
    this._tasksInputElement.removeEventListener('keydown', this._sendTextInput);
    this._tasksRemoveAllButtonElement.removeEventListener('click', this._removeAllTasksButton);
  }

  _checkEmptyState() {
    if (!this._tasksState.length) {
      this._tasksInputElement.classList.remove('tasks__input_visibility');
      this._tasksStartElement.classList.remove('tasks__start_hide');
      this._startButtonElement.classList.remove('tasks__start-button_hide');
      this._startButtonElement.disabled = false;
      this._tasksContainerElement.classList.add('tasks__container_empty');
      this._tasksContainerElement.classList.remove('tasks__container_opened');
      this._tasksRemoveAllButtonElement.classList.remove('tasks__remove-all-button_visibility');
    }
  }

  _setStateInLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this._tasksState));
  }

  _getStateInLocalStorage() {
    if (localStorage.getItem('tasks')) {
      return JSON.parse(localStorage.getItem('tasks'));
    }
  }
}
