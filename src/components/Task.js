import { v4 as uuidv4 } from 'uuid';

export default class Task {
  constructor({ changeStateTask, removeTaskInState }) {
    this._changeStateTask = changeStateTask;
    this._removeTaskInState = removeTaskInState;
  }

  generateNewTask(taskText) {
    this._idTask = uuidv4();
    this._completed = false;
    this._generate(taskText);
    return {
      id: this._idTask,
      taskElement: this._taskElement,
      completed: this._completed,
    };
  }

  generateTaskInLocalStorage(id, taskText, completed) {
    this._idTask = id;
    this._completed = completed;
    this._generate(taskText);
    if (completed) {
      this._taskElement.querySelector('.tasks__text').classList.add('tasks__text_crossed-out');
      this._taskElement.querySelector('.tasks__checkbox-input').checked = true;
    }
    return this._taskElement;
  }

  _getElement() {
    this._taskElement = document.querySelector('#taskTemplate').content.querySelector('.tasks__item').cloneNode(true);
  }

  _generate(taskText) {
    this._getElement();
    this._taskElement.querySelector('.tasks__text').textContent = taskText;
    this._taskElement.querySelector('.tasks__checkbox-input').id = this._idTask;
    this._taskElement.querySelector('.tasks__checkbox-label').setAttribute('for', this._idTask);
    this._addEventListeners();
    this._removeHandler();
  }

  _completedHandler(e) {
    if (e.target.checked) {
      this._taskElement.querySelector('.tasks__text').classList.add('tasks__text_crossed-out');
      this._completed = true;
      this._changeStateTask(this._idTask, this._completed);
    } else {
      this._taskElement.querySelector('.tasks__text').classList.remove('tasks__text_crossed-out');
      this._completed = false;
      this._changeStateTask(this._idTask, this._completed);
    }
  }

  _removeHandler(e) {
    if (e) {
      this._removeTaskInState(this._idTask);
      this._taskElement.remove();
      this._removeEventListeners();
    }
  }

  _addEventListeners() {
    this._completedTask = this._completedHandler.bind(this);
    this._taskElement.querySelector('.tasks__checkbox-input').addEventListener('click', this._completedTask);
    this._removeTask = this._removeHandler.bind(this);
    this._taskElement.querySelector('.tasks__remove-button').addEventListener('click', this._removeTask);
  }

  _removeEventListeners() {
    this._taskElement.querySelector('.tasks__checkbox-input').removeEventListener('click', this._completedTask);
    this._taskElement.querySelector('.tasks__remove-button').removeEventListener('click', this._removeTask);
  }
}
