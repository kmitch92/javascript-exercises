const reverseString = function (string) {
    let splitArr = string.split('');
    let result = ''

    for (let i = splitArr.length - 1; i >= 0; i--) {
        result = result + splitArr[i]
    }

    return result

};

// Do not edit below this line
module.exports = reverseString;
