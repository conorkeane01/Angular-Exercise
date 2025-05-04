
class Car { //Class
    seats: number;
    milage: number;
    drive () {
        console.log('Seats: ' + this.seats + ', Milage: ' + this.milage);
    }

    getDistance(another: Car) { //Method
        //
    }
}

let car = new Car(); //Object
car.milage = 100;
car.seats = 5;
car.drive();

