import './index.css';
import * as constants from '../utils/constants';
import Api from '../components/Api';
import Geolocation from '../components/Geolocation';
import DateAndWatch from '../components/DateAndWatch';
import Weather from '../components/Weather';
import IntervalApp from '../components/IntervalApp';
import { enableLogoHref } from '../utils/enableLogoHref';

const api = new Api(constants.URLS);

const geolocation = new Geolocation('geolocationText', constants.GEOLOCATION_DEFAULT, {
  getCityName: (lat, lon) => {
    api.getCityName(lat, lon)
      .then((res) => {
        geolocation.setCityName(res.response.GeoObjectCollection.featureMember[0].GeoObject.name);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const weather = new Weather(constants.URLS, {
  getCityWeather: (lat, lon) => {
    api.getWeather(lat, lon)
      .then((res) => {
        weather.renderWeatherForecast(res);
        console.log(document.querySelector('.date__watch').textContent);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const dateAndWatch = new DateAndWatch();

const intervalApp = new IntervalApp(constants.INTERVAL_APP, {
  startWatch: () => {
    dateAndWatch.enableDateAndWatch();
  },
  getCityWeather: (lat, lon) => {
    api.getWeather(lat, lon)
      .then((res) => {
        weather.renderWeatherForecast(res);
        console.log(document.querySelector('.date__watch').textContent);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

enableLogoHref();
geolocation.enableGeolocation();
weather.enableWeather();
dateAndWatch.enableDateAndWatch();
intervalApp.enableIntervalApp();
