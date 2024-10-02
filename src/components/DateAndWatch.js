export default class DateAndWatch {
  constructor() {
    this._hoursElement = document.querySelector('#hours');
    this._minutesElement = document.querySelector('#minutes');
    this._secondsElement = document.querySelector('#seconds');
  }

  enableDateAndWatch() {
    this._enableWatch();
  }

  _getTime() {
    this._date = new Date();
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

  _enableWatch() {
    this._dateIntervalId = setInterval(() => {
      this._getTime();
      this._setTimeInHtml();
    }, 1000);
    this._getTime();
    this._setTimeInHtml();
  }
}
