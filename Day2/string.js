function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log("Original String:", originalString);
  console.log("Reversed String:", reversedString);
  