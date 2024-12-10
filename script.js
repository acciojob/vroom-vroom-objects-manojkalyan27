// Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Example usage
const car = new Car("Toyota", "Corolla");
console.log(car.getMakeModel()); // Output: "Toyota Corolla"

const sportsCar = new SportsCar("Ferrari", "488 Spider", 211);
console.log(sportsCar.getMakeModel()); // Output: "Ferrari 488 Spider"
console.log(sportsCar.getTopSpeed()); // Output: 211
