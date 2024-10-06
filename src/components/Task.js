export default class Task {
  generate(taskText) {
    this._getElement();
    this._taskElement.querySelector('.tasks__text').textContent = taskText;
    this._addEventListeners();
    this._removeHandler();
    return this._taskElement;
  }

  _getElement() {
    this._taskElement = document.querySelector('#taskTemplate').content.querySelector('.tasks__item').cloneNode(true);
  }

  _completedHandler(e) {
    if (e.target.checked) {
      this._taskElement.querySelector('.tasks__text').classList.add('tasks__text_crossed-out');
    } else {
      this._taskElement.querySelector('.tasks__text').classList.remove('tasks__text_crossed-out');
    }
  }

  _removeHandler(e) {
    if (e) {
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
