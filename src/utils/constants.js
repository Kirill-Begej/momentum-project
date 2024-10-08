import bgImage1Webp1x from '../images/bg-image/bg-image-01@1x.webp';
import bgImage1Webp2x from '../images/bg-image/bg-image-01@2x.webp';
import bgImage1Jpg1x from '../images/bg-image/bg-image-01@1x.jpg';
import bgImage1Jpg2x from '../images/bg-image/bg-image-01@2x.jpg';
import bgImage2Webp1x from '../images/bg-image/bg-image-02@1x.webp';
import bgImage2Webp2x from '../images/bg-image/bg-image-02@2x.webp';
import bgImage2Jpg1x from '../images/bg-image/bg-image-02@1x.jpg';
import bgImage2Jpg2x from '../images/bg-image/bg-image-02@2x.jpg';
import bgImage3Webp1x from '../images/bg-image/bg-image-03@1x.webp';
import bgImage3Webp2x from '../images/bg-image/bg-image-03@2x.webp';
import bgImage3Jpg1x from '../images/bg-image/bg-image-03@1x.jpg';
import bgImage3Jpg2x from '../images/bg-image/bg-image-03@2x.jpg';
import bgImage4Webp1x from '../images/bg-image/bg-image-04@1x.webp';
import bgImage4Webp2x from '../images/bg-image/bg-image-04@2x.webp';
import bgImage4Jpg1x from '../images/bg-image/bg-image-04@1x.jpg';
import bgImage4Jpg2x from '../images/bg-image/bg-image-04@2x.jpg';

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
    srcsetWebp: `${bgImage1Webp1x} 1x, ${bgImage1Webp2x} 2x`,
    src: `${bgImage1Jpg1x}`,
    srcset: `${bgImage1Jpg2x} 2x`,
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: `${bgImage2Webp1x} 1x, ${bgImage2Webp2x} 2x`,
    src: `${bgImage2Jpg1x}`,
    srcset: `${bgImage2Jpg2x} 2x`,
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: `${bgImage3Webp1x} 1x, ${bgImage3Webp2x} 2x`,
    src: `${bgImage3Jpg1x}`,
    srcset: `${bgImage3Jpg2x} 2x`,
    alt: 'Звездное небо на фоне гор.',
  },
  {
    type: 'image/webp',
    srcsetWebp: `${bgImage4Webp1x} 1x, ${bgImage4Webp2x} 2x`,
    src: `${bgImage4Jpg1x}`,
    srcset: `${bgImage4Jpg2x} 2x`,
    alt: 'Звездное небо на фоне гор.',
  },
];

export const SLIDE_ANIMATION_DURATION = 300;
