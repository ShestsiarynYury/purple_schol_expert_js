const initArray = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

const ids = [...new Set(initArray.map(obj => obj.id))];

const uniqueArray = [];
ids.forEach((id) => {
    const findedElement = initArray.find(obj => id === obj.id);
    uniqueArray.push(findedElement);
});

console.log(uniqueArray);