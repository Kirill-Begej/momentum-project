export default class Api {
  constructor({ geolocation, weather }) {
    this._geolocationUrl = geolocation;
    this._weatherUrl = weather;
  }

  getCityName(lat, lon) {
    return this._request(`${this._geolocationUrl}${lon},${lat}`);
  }

  getWeather(lat, lon) {
    console.log(this._weatherUrl);
    return this._request(`${this._weatherUrl}lat=${lat}&lon=${lon}`);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _request(url, options = {}) {
    return fetch(url, options).then(this._checkResponse);
  }
}
