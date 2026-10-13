'use strict';

function getMyGeolocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation не поддерживается вашим браузером"));
        }

        // Опции для более точного или быстрого поиска
        const options = {
            enableHighAccuracy: true, // Использовать GPS для максимальной точности (если доступно)
            timeout: 5000,            // Ждать ответа не более 5 секунд
            maximumAge: 0             // Не использовать кэшированные данные
        };

        function successCallback(position) {
            const latitude = position.coords.latitude;   // Широта
            const longitude = position.coords.longitude; // Долгота
            const accuracy = position.coords.accuracy;   // Точность в метрах

            resolve({ latitude, longitude, accuracy });
        }

        // Функция для обработки ошибок
        function errorCallback(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                reject(new Error("Пользователь запретил доступ к геопозиции."));
                break;
                case error.POSITION_UNAVAILABLE:
                reject(new Error("Информация о местоположении недоступна (выключен GPS/сеть)."));
                break;
                case error.TIMEOUT:
                reject(new Error("Истекло время ожидания запроса геопозиции."));
                break;
                default:
                reject(new Error("Произошла неизвестная ошибка:", error.message));
            }
        }

        // 2. Запрашиваем позицию (колбэк успеха, колбэк ошибки, опции)
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    });
}

getMyGeolocation()
    .then(data => console.log(`${data.latitude}${data.longitude}${data.accuracy}`))
    .catch(error => console.log(error.message))

