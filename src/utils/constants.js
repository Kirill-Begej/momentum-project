const LOCATION_URL = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
const TOKEN = 'e7b432f277bb3b64b1afe5cc332015c4354d0733';

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Token ${TOKEN}`,
  },
  body: JSON.stringify({ lat: 55.878, lon: 37.653, count: 1 }),
};

// eslint-disable-next-line arrow-body-style
export const requestCityName = () => {
  return fetch(LOCATION_URL, options)
    .then((response) => response.json())
    .then((result) => console.log(result.suggestions[0].data.city))
    .catch((error) => console.log('error', error));
};
