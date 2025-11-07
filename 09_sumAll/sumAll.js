const sumAll = function (a, b) {
    let total = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    numbers.forEach(number => {
        total += number;
    });
    return total;
};

// Do not edit below this line
module.exports = sumAll;
