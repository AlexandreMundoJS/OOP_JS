function getKey(k){
    console.log(`a key named ${k}`);
}

function getInput(i){
    console.log(`a input named ${i}`)
}

// bad
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;
obj[getInput('inputObj1')] = true;

// good
const obj2 = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
    [getInput('inputObj2')]: true,
};
