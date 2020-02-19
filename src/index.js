exports.min = function min (array) {
    if (!arguments.length || array.length === 0) {
        return 0
    }
   return Math.min.apply(0, array);
};

exports.max = function max (array) {
    if (!arguments.length || array.length === 0) {
        return 0
    }
    return Math.max.apply(0, array);
};
exports.avg = function avg (array) {
    if (!arguments.length || array.length === 0) {
        return 0
    }
    return (array.reduce((a,b) => a + b)) / array.length;
};

// console.log(min([9,5,-4,17,-4,-32,4,34,9,38,-32,22,20,33,-17,8,30,12,-17,32]));
