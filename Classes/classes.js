var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Seats: ' + this.seats + ', Milage: ' + this.milage);
    };
    Car.prototype.getDistance = function (another) {
        //
    };
    return Car;
}());
var car = new Car();
car.milage = 100;
car.seats = 5;
car.drive();
