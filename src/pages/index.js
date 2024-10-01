import './index.css';
import Location from '../components/Location';
import { requestCityName } from '../utils/constants';

const location = new Location();

location.enableLocation();

requestCityName();
