
exports.min = function min(array) {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    if (array.length == 0) {
      return 0;
    }
    array.sort((a, b) => a - b);
    return array[0];
  }

}

exports.max = function max(array) {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    if (array.length == 0) {
      return 0;
    }
    array.sort((a, b) => a - b);
    return array[array.length - 1];
  }
}

exports.avg = function avg(array) {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    if (array.length == 0) {
      return 0;
    }
    return ((array.reduce((sum, i) => sum + i, 0)) / array.length);
  }
}

