const removeFromArray = function (array, ...args) {
    let argies = [...args]
    let result = array
    for (let i = 0; i < argies.length; i++) {
        if (result.includes(argies[i])) {
            let j = result.indexOf(argies[i])
            result.splice(j, 1)
        }
    }
    return result

};

// Do not edit below this line
module.exports = removeFromArray;
