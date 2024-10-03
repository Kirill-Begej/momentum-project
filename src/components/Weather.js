export default class Weather {
  constructor({ getCityWeather }) {
    this._getCityWeather = getCityWeather;
  }

  enableWeather() {
    this._getCoordsInLocalStorage();
    this._getCityWeather(this._lat, this._lon);
  }

  _getCoordsInLocalStorage() {
    const [lat, lon] = localStorage.getItem('coords').split(',');
    this._lat = lat;
    this._lon = lon;
  }
}
