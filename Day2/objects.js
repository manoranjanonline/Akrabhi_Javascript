const myObject = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
  
  // Using forEach to print key-value pairs
  Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  