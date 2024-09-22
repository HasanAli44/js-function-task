function multiply(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}
const result = multiply(10, 2, 1, 5);

// console.log(result);

// task2
function oddEven(number) {
  if (number % 2 === 1) {
    const result = number * 2;
    return result;
  } else {
    const result = number / 2;
    return result;
  }
}

console.log(oddEven(21));
