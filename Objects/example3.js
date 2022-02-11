// bad 
const atom = {
    value: 1,

    addValue: function(value){
        return atom.value + value;
    },
};

// good
const atom2 = {
    value: 1,
    addValue(value){
        return atom2.value + value;
    },
}