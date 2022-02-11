const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
    lukeSkywalker: lukeSkywalker,
};

// good
const obj2 = {
    lukeSkywalker,
};

console.log(obj);
console.log(obj2);