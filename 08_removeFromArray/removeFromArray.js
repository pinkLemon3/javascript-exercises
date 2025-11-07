const removeFromArray = function (arr, ...valuesToRemove) {
    let removedElemArr = [];
    arr.forEach(element => {

        if (!valuesToRemove.includes(element)) {
            removedElemArr.push(element);
        }
    });
    return removedElemArr;
};

// Do not edit below this line
module.exports = removeFromArray;
