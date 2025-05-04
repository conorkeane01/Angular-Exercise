
export class Dog {
    constructor(private age?: number, private height?: number) {

    }

    getDog(){
        console.log('Age: ' + this.age + ' , Height: ' + this.height);
    }
}