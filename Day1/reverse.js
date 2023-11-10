function reverseNumber(number) {
    // Convert the number to a string, reverse it, and convert back to a number
    const reversedNumber = parseInt(number.toString().split('').reverse().join(''), 10);
  
    return reversedNumber;
  }
  
  // Example usage:
  const originalNumber = 12345;
  const reversedResult = reverseNumber(originalNumber);
  console.log(`Original number: ${originalNumber}`);
  console.log(`Reversed number: ${reversedResult}`);
  