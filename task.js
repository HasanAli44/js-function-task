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

// console.log(oddEven(21));

// task3
function make_avg(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  const avg = sum / numbers.length;
  return avg;
}
const numbers = [10, 20, 50, 30, 60, 56, 90];
console.log(make_avg(numbers));
