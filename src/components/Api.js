export default class Api {
  constructor({ geolocation }) {
    this._geolocationUrl = geolocation;
  }

  getCityName(lat, lon) {
    return this._request(
      `${this._geolocationUrl}apikey=${process.env.GEOLOCATION_TOKEN}&geocode=${lon},${lat}&format=json&language=ru_RU&kind=locality&results=1`,
    );
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
