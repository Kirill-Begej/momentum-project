export default class Weather {
  constructor({ weatherIcon }, { getCityWeather }) {
    this._weatherIconUrl = weatherIcon;
    this._weatherImage = document.querySelector('#weatherImage');
    this._weatherDesc = document.querySelector('#weatherDesc');
    this._tempElement = document.querySelector('#weatherTemp');
    this._feelsLikeElement = document.querySelector('#weatherFeelsLike');
    this._cloudsElement = document.querySelector('#weatherClouds');
    this._humidityElement = document.querySelector('#weatherHumidity');
    this._pressureElement = document.querySelector('#weatherPressure');
    this._windSpeedElement = document.querySelector('#weatherWindSpeed');
    this._windDegElement = document.querySelector('#weatherWindDeg');
    this._getCityWeather = getCityWeather;
    this._windDirections = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  }

  enableWeather() {
    this._getDataInLocalStorage();
    this._getCityWeather(this._lat, this._lon);
  }

  renderWeatherForecast({
    clouds,
    main,
    weather,
    wind,
  }) {
    this._weatherImage.src = `${this._weatherIconUrl}${weather[0].icon}@2x.png`;
    this._weatherImage.style.display = 'block';
    this._weatherDesc.textContent = weather[0].description;
    this._tempElement.textContent = main.temp >= 0 ? Math.floor(main.temp) : Math.ceil(main.temp);
    this._feelsLikeElement.textContent = main.feels_like >= 0
      ? Math.floor(main.feels_like) : Math.ceil(main.feels_like);
    this._cloudsElement.textContent = clouds.all;
    this._humidityElement.textContent = main.humidity;
    this._pressureElement.textContent = Math.floor(main.pressure / 1.333);
    this._windSpeedElement.textContent = wind.speed;
    this._windDegElement.textContent = this._defineDirectionWind(wind.deg);
  }

  _getDataInLocalStorage() {
    this._city = localStorage.getItem('city');
    const [lat, lon] = localStorage.getItem('coords').split(',');
    this._lat = lat;
    this._lon = lon;
  }

  _defineDirectionWind(deg) {
    if (deg === 0) {
      return '-';
    } else if (deg === 360) {
      return this._windDirections[0];
    }

    return this._windDirections[Math.floor(deg / 45)];
  }
}
