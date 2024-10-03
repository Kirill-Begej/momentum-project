export default class IntervalApp {
  constructor({ secondInterval, hourlyInterval }, { startWatch, getCityWeather }) {
    this._secondInterval = secondInterval;
    this._hourlyInterval = hourlyInterval;
    this._startWatch = startWatch;
    this._getCityWeather = getCityWeather;
    this._hourTimer = 0;
  }

  enableIntervalApp() {
    this._intervalId = setInterval(() => {
      this._hourTimer += 1;
      this._startWatch();
      this._checkWeather();
    }, this._secondInterval);
  }

  _checkWeather() {
    if (this._hourTimer === this._hourlyInterval) {
      this._getDataInLocalStorage();
      this._getCityWeather(this._lat, this._lon);
      this._hourTimer = 0;
    }
  }

  _getDataInLocalStorage() {
    this._city = localStorage.getItem('city');
    const [lat, lon] = localStorage.getItem('coords').split(',');
    this._lat = lat;
    this._lon = lon;
  }
}
