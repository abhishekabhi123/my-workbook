if (!Array.prototype.customFlat) {
  Array.prototype.customFlat = function (depth) {
    depth = depth === undefined ? 1 : Math.floor(depth);
    const flattenedArray = [];

    function flat(array, currentDepth) {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && currentDepth < depth) {
          flat(array[i], currentDepth + 1);
        } else {
          flattenedArray.push(array[i]);
        }
      }
    }
    flat(this, 0);
    return flattenedArray;
  };
}

var nestedArray = [
  [1, 2, 3],
  [4, 5, [6, 7, [8, 9, [10]]]],
  [7, 8, 9],
];

console.log(nestedArray.customFlat(10));
