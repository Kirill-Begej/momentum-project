export default class Geolocation {
  constructor(selector, { city, lat, lon }, { getCityName }) {
    this._textElement = document.querySelector(`#${selector}`);
    this._cityDefault = city;
    this._latDefault = lat;
    this._lonDefault = lon;
    this._getCityName = getCityName;
  }

  enableGeolocation() {
    this.setCityData();
    this._requestGeolocation();
  }

  setCityData(city = this._cityDefault, lat = this._latDefault, lon = this._lonDefault) {
    this._setCityNameInLocalStorage(city);
    this._textElement.textContent = city;
    this._setCityGeolocationInLocalStorage(lat, lon);
  }

  _setCityNameInLocalStorage(city) {
    localStorage.setItem('city', city);
  }

  _setCityGeolocationInLocalStorage(lat, lon) {
    localStorage.setItem('coords', `${lat},${lon}`);
  }

  _requestGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
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
