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
  // указать время работы интервала получения (обновления) данных приложения в миллисекундах
  secondInterval: 1000,
  // указать время обновления данных о погоде в секундах
  hourlyInterval: 3600,
};

export const SLIDER_DATA = [
  {
    type: 'image/webp',
    srcsetWebp: './images/bg-image/bg-image-01@1x.webp 1x, ./images/bg-image/bg-image-01@2x.webp 2x',
    src: './images/bg-image/bg-image-01@1x.jpg',
    srcset: './images/bg-image/bg-image-01@2x.jpg 2x',
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: './images/bg-image/bg-image-02@1x.webp 1x, ./images/bg-image/bg-image-02@2x.webp 2x',
    src: './images/bg-image/bg-image-02@1x.jpg',
    srcset: './images/bg-image/bg-image-02@2x.jpg 2x',
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: './images/bg-image/bg-image-03@1x.webp 1x, ./images/bg-image/bg-image-03@2x.webp 2x',
    src: './images/bg-image/bg-image-03@1x.jpg',
    srcset: './images/bg-image/bg-image-03@2x.jpg 2x',
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: './images/bg-image/bg-image-04@1x.webp 1x, ./images/bg-image/bg-image-04@2x.webp 2x',
    src: './images/bg-image/bg-image-04@1x.jpg',
    srcset: './images/bg-image/bg-image-04@2x.jpg 2x',
    alt: 'Звездное небо на фоне гор.',
  },
];

export const SLIDE_ANIMATION_DURATION = 300;
