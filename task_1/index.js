const initArray = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

const ids = [...new Set(initArray.map(obj => obj.id))];

const result = ids.map(id => initArray.find(obj => id === obj.id));

console.log(result);