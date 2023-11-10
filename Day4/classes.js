  // Define a simple class called "Person"
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // A method to display information about the person
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }

  // Create objects (instances) of the Person class
  const person1 = new Person("John Doe", 25);
  const person2 = new Person("Jane Smith", 30);

  // Display information about each person
  person1.displayInfo();
  person2.displayInfo();