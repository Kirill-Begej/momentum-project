export default class DateAndWatch {
  constructor() {
    this._hoursElement = document.querySelector('#hours');
    this._minutesElement = document.querySelector('#minutes');
    this._secondsElement = document.querySelector('#seconds');
    this._dateElement = document.querySelector('#date');
    this._monthsOfTheYear = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    this._dayOfTheWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  }

  enableDateAndWatch() {
    this._date = new Date();
    this._getWatch();
    this._setTimeInHtml();
    this._getDate();
    this._setDateInHtml();
    return this._getHour(this._date);
  }

  _getHour(date) {
    return date.getHours();
  }

  _getWatch() {
    this._hours = this._date.getHours();
    if (this._hours < 10) this._hours = `0${this._hours}`;
    this._minutes = this._date.getMinutes();
    if (this._minutes < 10) this._minutes = `0${this._minutes}`;
    this._seconds = this._date.getSeconds();
    if (this._seconds < 10) this._seconds = `0${this._seconds}`;
  }

  _setTimeInHtml() {
    this._hoursElement.textContent = this._hours;
    this._minutesElement.textContent = this._minutes;
    this._secondsElement.textContent = this._seconds;
  }

  _getDate() {
    this._dayOfTheMonth = this._date.getDate();
    this._monthName = this._monthsOfTheYear[this._date.getMonth()];
    this._dayName = this._dayOfTheWeek[this._date.getDay()];
  }

  _setDateInHtml() {
    this._dateElement.textContent = `${this._dayOfTheMonth} ${this._monthName}, ${this._dayName}`;
  }
}
