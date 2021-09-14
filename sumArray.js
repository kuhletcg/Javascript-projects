function sumNumbers(number) {
  return numbers.reduce(function (x, y) {
    return x + y;
  });
}

var sum = sumNumbers([1, 2, 4, 6]);
console.log("The sum is: ", sum);
