export default class Geolocation {
  constructor(selector, { getCityName }) {
    this._textElement = document.querySelector(`#${selector}`);
    this._getCityName = getCityName;
  }

  enableGeolocation() {
    this.setCityName();
    this._requestGeolocation();
  }

  setCityName(city = 'Краснодар') {
    this._city = city;
    this._setCityNameInLocalStorage();
    this._renderGeolocation();
  }

  _setCityNameInLocalStorage() {
    localStorage.setItem('city', this._city);
  }

  _requestGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this._getCityName(latitude, longitude);
        },
        (error) => {
          this.setCityName();
          console.log(error);
        },
      );
    } else {
      this.setCityName();
      console.log('Браузер не поддерживает геолокацию');
    }
  }

  _renderGeolocation() {
    this._textElement.textContent = this._city;
  }
}
