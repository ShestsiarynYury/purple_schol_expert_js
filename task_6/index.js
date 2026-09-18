"use strict";

const mountDaysCount = {
    '0': 31,
    '1': 28,
    '1L:': 29,
    '2': 31,
    '3': 30,
    '4': 31,
    '5': 30,
    '6': 31,
    '7': 31,
    '8': 30,
    '9': 31,
    '10': 30,
    '11': 31
}

function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDays(month, isLeap) {
    if(isLeap) {
        if (mounth === 1) {
            return 29;
        } else {
            return mountDaysCount[String(month)];
        }
    } else {
        return mountDaysCount[String(month)];
    }
}

function getDateInfo() {
    const now = new Date();
    const months = 12 - now.getMonth() + 1;
    const days = getDays(now.getMonth(), _isLeap) - now.getDate();
    const  hours = 24 - now.getHours();
    const minutes = 60 - now.getMinutes();
    const seconds = 60 - now.getSeconds();

    if(months === days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
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

const _isLeap = isLeap((new Date()).getFullYear());

const intervalId = setInterval(() => {
    const info = getDateInfo();

    if (info) {
        console.log(`${info.months} месяцев, ${info.days} дней, ${info.hours} часов, ${info.minutes} минут, ${info.seconds} секунд`);
    } else {
        clearInterval(intervalId);
    }
}, 1000);
