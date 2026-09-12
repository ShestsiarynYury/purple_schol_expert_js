'use strict';

function customRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

const DICE_VALUES = [
    'd4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'
]

function getRandom(dice) {
    if (!DICE_VALUES.includes(dice)) {
        return;
    }

    const max = Number(dice.slice(1));

    return customRandom(max);
}