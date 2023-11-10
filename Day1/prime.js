function isPrime(number) {
    // Check if the number is less than 2 (not a prime number)
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        // If the number is divisible by any i, it's not a prime number
        return false;
      }
    }
  
    // If no divisors were found, the number is prime
    return true;
  }
  
  // Example usage:
  const testNumber = 17;
  if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number.`);
  } else {
    console.log(`${testNumber} is not a prime number.`);
  }
  