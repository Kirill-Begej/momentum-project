import './index.css';
import * as constants from '../utils/constants';
import Api from '../components/Api';
import Geolocation from '../components/Geolocation';
import DateAndWatch from '../components/DateAndWatch';
import Weather from '../components/Weather';
import IntervalApp from '../components/IntervalApp';
import Slider from '../components/Slider';
import TasksList from '../components/TasksList';
import Task from '../components/Task';
import { enableLogoHref } from '../utils/enableLogoHref';

const tasksOpenButtonElement = document.querySelector('#tasksOpenButton');

const api = new Api(constants.URLS);

const geolocation = new Geolocation('geolocationText', constants.GEOLOCATION_DEFAULT, {
  getCityName: (lat, lon) => {
    api.getCityName(lat, lon)
      .then((res) => {
        const { name } = res.response.GeoObjectCollection.featureMember[0].GeoObject;
        const [
          newLon,
          newLat,
        ] = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
        geolocation.setCityData(name, newLat, newLon);
        weather.enableWeather();
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
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const dateAndWatch = new DateAndWatch();

const slider = new Slider(constants);

const intervalApp = new IntervalApp(constants.INTERVAL_APP, {
  startWatch: () => {
    const currentHour = dateAndWatch.enableDateAndWatch();
    slider.changeSlide(currentHour);
  },
  getCityWeather: (lat, lon) => {
    api.getWeather(lat, lon)
      .then((res) => {
        weather.renderWeatherForecast(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const tasksList = new TasksList({
  setTaskText: (taskText) => {
    const task = new Task();
    tasksList.addTaskInTasksList(task.generate(taskText));
  },
});

enableLogoHref();
geolocation.enableGeolocation();
weather.enableWeather();
const currentHour = dateAndWatch.enableDateAndWatch();
slider.enableSlider(currentHour);
intervalApp.enableIntervalApp();

tasksOpenButtonElement.addEventListener('click', () => {
  tasksList.enableTasksList();
});
