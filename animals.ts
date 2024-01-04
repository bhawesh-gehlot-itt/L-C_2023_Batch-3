class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    makeSound(): string {
        return this.animalSound();
    }

    protected animalSound(nameOfAnimal?: string): string {
        switch (nameOfAnimal) {
            case "Lion":
                return "Gurrrrrrr";
            case "Sparrow":
                return "che che";
            default:
                return "Some animal sound";
        }
    }

    printAnimalDetails(animal: Animal, additionalInfo: string): void {
        console.log(`${animal.getName()} is ${additionalInfo}`);
        console.log(`${animal.getName()} says: ${animal.makeSound()}`);
        console.log(
            `${animal.getName()} is ${animal.getAge()} years old.`
        );
    }
}

class Mammal extends Animal {
    private furColor: string;

    constructor(name: string, age: number, furColor: string) {
        super(name, age);
        this.furColor = furColor;
    }

    getFurColor(): string {
        return this.furColor;
    }

    makeSound(): string {
        return super.animalSound(this.name);
    }

    giveBirth(): string {
        return "Giving birth to cub";
    }
}

class Bird extends Animal {
    private featherColor: string;

    constructor(name: string, age: number, featherColor: string) {
        super(name, age);
        this.featherColor = featherColor;
    }

    getFeatherColor(): string {
        return this.featherColor;
    }

    makeSound(): string {
        return super.animalSound(this.name);
    }

    layEggs(): string {
        return "Laying eggs";
    }
}

const lion = new Mammal("Lion", 5, "Golden");
lion.printAnimalDetails(
    lion,
    `a mammal with ${lion.getFurColor()} fur and is capable of ${lion.giveBirth()}`
);

const sparrow = new Bird("Sparrow", 2, "Brown");
sparrow.printAnimalDetails(
    sparrow,
    `a bird with ${sparrow.getFeatherColor()} feathers and is capable of ${sparrow.layEggs()}`
);
