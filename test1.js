const stringLength = (string) => {
    if(string.length > 10) {
        throw new Error('This string is very long');
    } else if (string.length < 1) {
        throw new Error('This string is too short');
    }

    return string.length;
}

module.exports = stringLength;
