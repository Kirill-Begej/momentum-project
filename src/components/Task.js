export default class Task {
  generate(taskText) {
    this._getElement();
    this._taskElement.querySelector('.tasks__text').textContent = taskText;
    return this._taskElement;
  }

  _getElement() {
    this._taskElement = document.querySelector('#taskTemplate').content.querySelector('.tasks__item').cloneNode(true);
  }
}
