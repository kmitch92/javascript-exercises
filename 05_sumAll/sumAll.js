const sumAll = function (...args) {

    let notNum = false
    let argies = [...args]
    for (let i = 0; i < argies.length; i++) {
        if (typeof (argies[i]) != 'number') {
            notNum = true
        } else if (argies[i] < 0) {
            notNum = true
        }
    }

    if (notNum == true) return 'ERROR'

    argies.sort(function (a, b) { return a - b })
    let result = 0
    for (let i = argies[0]; i <= argies[argies.length - 1]; i++) {
        result = result + i
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
