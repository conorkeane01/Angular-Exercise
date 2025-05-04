
class Person {

    constructor(private _age?: number, private _height?: number) {
        
    }

    create() {
        console.log('Age ' + this._age + ', height: ' + this._height);
    }

    get Age() {
        return this._age;
    }

    set Age(value) {
        if (value < 0) 
            throw new Error('Value Age cannot be less than 0');
        this._age = value;
    }
}

let person = new Person(1, 2);
let age = person.Age;
person.Age = 10;
person.create();