export default class Weather {
  constructor({ getCityWeather }) {
    this._getCityWeather = getCityWeather;
  }

  enableWeather() {
    this._getDataInLocalStorage();
    this._getCityWeather(this._lat, this._lon);
  }

  _getDataInLocalStorage() {
    this._city = localStorage.getItem('city');
    const [lat, lon] = localStorage.getItem('coords').split(',');
    this._lat = lat;
    this._lon = lon;
  }
}
