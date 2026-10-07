class Car {
    #_brand;
    #_model;
    #_mileage;

    constructor(brand, model, mileage) {
        this.#_brand = brand;
        this.#_model = model;
        this.#_mileage = mileage;
    }

    get mileage() {
        return this.#_mileage;
    }

    set mileage(value) {
        this.#_mileage = value;
    }

    info() {
        console.log(`марка: ${this.#_brand} пробег: ${this.#_mileage}`);
    }
}