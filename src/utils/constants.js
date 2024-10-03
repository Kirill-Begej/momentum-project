export const URLS = {
  geolocation: `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.GEOLOCATION_KEY}&format=json&language=ru_RU&kind=locality&results=1&geocode=`,
  weather: `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_KEY}&units=metric&lang=ru&`,
  weatherIcon: 'https://openweathermap.org/img/wn/',
};

export const GEOLOCATION_DEFAULT = {
  city: 'Краснодар',
  lat: 45.0448,
  lon: 38.976,
};

export const INTERVAL_APP = {
  secondInterval: 1000,
  hourlyInterval: 3600,
};
