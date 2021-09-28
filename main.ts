// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//

class Car {

    private _model: string;
    private _manufacturer: string;
    private _year: number;
    private _maxSpeed: number;
    private _capacityOfEngine: number;
    private _driver: object;


    constructor(model: string, manufacturer: string, year: number, maxSpeed: number, capacityOfEngine: number) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._year = year;
        this._maxSpeed = maxSpeed;
        this._capacityOfEngine = capacityOfEngine;
    }

    drive(): void {
        console.log('їдемо зі швидкістю ' + this._maxSpeed + ' км на годину');
    }

    info(): void {
        for (const key in this) {
            console.log(key + ': ' + this[key]);
        }
    }

    increaseMaxSpeed(newSpeed): void{
        this._maxSpeed = newSpeed;
    }

    changeYear(newValue): void{
        this._year = newValue;
    }

    addDriver(Driver): void{
        this._driver = Driver;
    }
}

class Driver{
    private _name: string;
    private _age: number;
    private _level: string;


    constructor(name: string, age: number, level: string) {
        this._name = name;
        this._age = age;
        this._level = level;
    }
}

let honda = new Car('Honda','Japan',2008,240,2.4);
honda.drive();
console.log('-----------------------------');
honda.info();
console.log('-----------------------------');
honda.increaseMaxSpeed(300);
honda.info();
console.log('-----------------------------');
honda.changeYear(2000);
honda.info();
console.log('-----------------------------');
let driver = new Driver('Ostap', 22, 'B');
honda.addDriver(driver);
console.log(honda);

