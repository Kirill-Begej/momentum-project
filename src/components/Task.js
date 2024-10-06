export default class Task {
  generate() {
    this._getElement();
    return this._taskElement;
  }

  _getElement() {
    this._taskElement = document.querySelector('#taskTemplate').content.querySelector('.tasks__item').cloneNode(true);
  }
}
