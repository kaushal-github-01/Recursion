function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }

    return result
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }

  return merge(mergeSort(left), mergeSort(right));
}

const unsortedArray = [3, 1, 7, 4, 2, 5, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
