let array = [0, 1];

fibs = (num) => {
  if (num == 1) {
    array = [0];
  } else if (num == 2) {
    array = [0, 1];
  } else if (num > 2) {
    for (i = 2; i < num; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
  } else {
    return "Please enter a positive number";
  }
  return array;
};

// console.log(fibs(7));

function fibsRec(num, current = 0, next = 1, array = []) {
  if (num <= 0) return array;

  array.push(current);
  return fibsRec(num - 1, next, current + next, array);
}

// console.log(fibsRec(6));
