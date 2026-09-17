'use strict';

export function validate(str) {
    const arr = str.split('-').map(s => parseInt(s));

    const now = new Date();
    const diff = new Date(now.getFullYear() - 14, now.getMonth(), now.getDate());

    return diff > new Date(arr[0], arr[1] - 1, arr[2]);
}
