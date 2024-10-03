export default class Geolocation {
  constructor(selector, { city, lat, lon }, { getCityName }) {
    this._textElement = document.querySelector(`#${selector}`);
    this._cityDefault = city;
    this._latDefault = lat;
    this._lonDefault = lon;
    this._getCityName = getCityName;
  }

  enableGeolocation() {
    this.setCityName();
    this._setCityGeolocationInLocalStorage();
    this._requestGeolocation();
  }

  setCityName(city = this._cityDefault) {
    this._setCityNameInLocalStorage(city);
    this._textElement.textContent = city;
  }

  _setCityNameInLocalStorage(city) {
    localStorage.setItem('city', city);
  }

  _setCityGeolocationInLocalStorage(lat = this._latDefault, lon = this._lonDefault) {
    localStorage.setItem('coords', `${lat},${lon}`);
  }

  _requestGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this._setCityGeolocationInLocalStorage(latitude, longitude);
          this._getCityName(latitude, longitude);
        },
        (error) => {
          console.log(error);
        },
      );
    } else {
      console.log('Браузер не поддерживает геолокацию');
    }
  }
}
