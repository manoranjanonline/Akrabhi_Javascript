function digitSum(number) {
    let sum = 0;
  
    while (number > 0) {
      sum += number % 10;  // Add the last digit to the sum
      number = Math.floor(number / 10);  // Remove the last digit
    }
  
    return sum;
  }
  
  // Example usage:
  const number = 12345;
  const result = digitSum(number);
  console.log(`The sum of the digits of ${number} is ${result}`);
  