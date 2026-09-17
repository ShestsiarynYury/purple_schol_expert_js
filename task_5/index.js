'use strict';

export function validate(str) {
    const arr = str.split('-').map(s => parseInt(s));

    const diff = (new Date()).getTime() - (new Date(arr[0], arr[1] - 1, arr[2])).getTime();

    return Number.parseInt(Math.abs(diff) / 1000 /60 /60 / 24) > 14;
}

console.log(validate("2022-01-01"));