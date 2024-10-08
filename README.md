___
# Веб-приложение Momentum

## Содержание
- [Описание проекта](#описание-проекта)
- [Статус проекта](#статус-проекта)
- [Ссылка на деплой приложения](#ссылка-на-деплой-приложения)
- [Стек используемых технологий](#стек-используемых-технологий)
- [Используемые API](#используемые-api)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)
___

## Описание проекта
Веб-приложение Momentum – это удобный организатор ваших задач. Приложение отображает текущее время вашего часового пояса, город в котором вы находитесь, виджет погоды. Текущая погода обновляется каждый час. Основное изображение приложения меняется в зависимости от времени суток. Также есть возможность добавлять текущие задачи, удалять задачи, отмечать выполненные задачи и удалять все выполненные задачи.
___

## Статус проекта
Проект завершен.
___

## Ссылка на деплой приложения
[Momentum Project](https://momentum-peach.vercel.app/)
___

## Стек используемых технологий
- [HTML5](https://dev.w3.org/html5/spec-LC/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [БЭМ](https://ru.bem.info/methodology/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Webpack](https://webpack.js.org/)
___

## Используемые API
Для получения данных в пректе используются слудующие API:
- Для обратного декодирования координат геолокации используется [Яндекс Геокодер](https://yandex.ru/maps-api/products/geocoder-api)
- Для получения текущей погоды используется [OpenWeather](https://openweathermap.org/)
___

## Установка проекта
Для установки зависимостей и запуска проекта необходим [NodeJS](https://nodejs.org/en).  

Клонируйте проект при помощи HTTPS:
```sh
$ git clone https://github.com/Kirill-Begej/momentum-project.git
```

Клонируйте проект при помощи SSH:
```sh
$ git clone git@github.com:Kirill-Begej/momentum-project.git
```

Для установки зависимостей выполните команду:
```sh
$ npm i
```
___

## Запуск проекта
Для запуска проекта требуется настроть переменные вашей среды, для этого добавьте .env-файл в корень проекта, в котором нужно указать персональные API-ключи [Яндекс Геокодер](https://yandex.ru/maps-api/products/geocoder-api) и [OpenWeather](https://openweathermap.org/). Пример названия ключей .env-файла находится в корне проекта, а именно файл под названием .env.example. 

Чтобы запустить сервер для разработки используйте команду:
```sh
npm run start
```

Чтобы выполнить development сборку используйте команду: 
```sh
npm run build:dev
```

Чтобы выполнить production сборку используйте команду: 
```sh
npm run build:prod
```
___

## Проверка линтинга
Для проверки JavaScript-файлов используется ESLint с конфигурацией airbnb-base.

Чтобы проверить js-файлы используйте команду:
```sh
npm run lint:js
```

Чтобы проверить js-файлы и исправить их используйте команду:
```sh
npm run lint:js:fix
```

Для проверки CSS-файлов используется Stylelint.

Чтобы проверить css-файлы используйте команду:
```sh
npm run lint:css
```

Чтобы проверить css-файлы и исправить их используйте команду:
```sh
npm run lint:css:fix
```
___
