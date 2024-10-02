import './index.css';
import * as constants from '../utils/constants';
import Api from '../components/Api';
import Geolocation from '../components/Geolocation';

const api = new Api(constants.URLS);

const geolocation = new Geolocation('geolocationText', {
  getCityName: (lat, lon) => {
    api.getCityName(lat, lon)
      .then((res) => {
        geolocation.setCityName(res.response.GeoObjectCollection.featureMember[0].GeoObject.name);
      })
      .catch((err) => {
        geolocation.setCityName();
        console.log(err);
      });
  },
});

api.enableLogoHref();
geolocation.enableGeolocation();
