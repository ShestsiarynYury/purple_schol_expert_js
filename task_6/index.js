"use strict";

function getDateInfo() {
    const now = new Date();
    const months = 11 - now.getMonth();
    // Точка отсчёта для дней/часов/минут/секунд — 1-е число следующего месяца
    const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const diff = nextMonthStart - now;

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);
    

    if (months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return null;
    }

    return {
        months,
        days,
        hours,
        minutes,
        seconds
    }
}

const timerElement = document.getElementById('timer');


const intervalId = setInterval(() => {
    const info = getDateInfo();

    if (info) {
        timerElement.textContent = `${info.months} месяцев, ${info.days} дней, ${info.hours} часов, ${info.minutes} минут, ${info.seconds} секунд`;
    } else {
        clearInterval(intervalId);
    }
}, 1000);
