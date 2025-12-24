// Getters
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person1.fullName);

// Setters
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set lang(value) {
    this.language = value;
  },
};
person2.lang = "bn";
