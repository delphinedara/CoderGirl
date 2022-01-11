function setTemperature(tempValue) {
    if (tempValue < 50) {
        return 'low temp';
    } else if (tempValue > 100) {
        return 'high temp';
    } else {
        return 'temp set';
    }
}

module.exports = setTemperature;