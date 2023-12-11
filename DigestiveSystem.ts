abstract class Organ {
    private organ_name: string;

    constructor(name: string) {
        this.organ_name = name;
    }

    public get organName(): string {
        return this.organ_name;
    }

    public abstract performFunction(): string;

    public getOrganInfo(): string {
        return `${this.organName} - ${this.performFunction()}`;
    }
}

class Mouth extends Organ {
    constructor() {
        super("Mouth");
    }

    public chew(food: string): string {
        return `Chewing ${food}`;
    }

    public performFunction(): string {
        return "Intake food and initiate its breakdown.";
    }
}

class Esophagus extends Organ {
    constructor() {
        super("Esophagus");
    }

    public swallow(): string {
        return "Transporting food from the mouth to the stomach.";
    }

    public performFunction(): string {
        return "Facilitates the passage of food to Stomach.";
    }
}

class Stomach extends Organ {
    private foodContents: string;

    constructor() {
        super("Stomach");
        this.foodContents = "Empty";
    }

    public ingestFood(food: string): string {
        this.foodContents = food;
        return `Ingesting ${food} into the stomach.`;
    }

    public digest(): string {
        return "Digesting contents to break them down further.";
    }

    public performFunction(): string {
        return "Breaks down the food.";
    }
}

class SmallIntestine extends Organ {
    private nutrientAbsorptionRate: number;

    constructor(nutrientAbsorptionRate: number) {
        super("Small Intestine");
        this.nutrientAbsorptionRate = nutrientAbsorptionRate;
    }

    public absorbNutrients(): string {
        return `Absorbing nutrients at a rate of ${this.nutrientAbsorptionRate} units per hour.`;
    }

    public performFunction(): string {
        return "Responsible for nutrient absorption.";
    }
}

class LargeIntestine extends Organ {
    private isDigestionComplete: boolean;

    constructor() {
        super("Large Intestine");
        this.isDigestionComplete = false;
    }

    public setDigestionStatus(isDigestionComplete: boolean): void {
        this.isDigestionComplete = isDigestionComplete;
    }

    public processWaste(): string {
        return "Processing waste material for elimination.";
    }

    public performFunction(): string {
        return "Absorb water and prepare waste material for elimination.";
    }
}

class Liver extends Organ {
    private detoxificationRate: number;
    private isDetoxifying: boolean;

    constructor(detoxificationRate: number) {
        super("Liver");
        this.detoxificationRate = detoxificationRate;
        this.isDetoxifying = false;
    }

    public setDetoxificationStatus(isDetoxifying: boolean): void {
        this.isDetoxifying = isDetoxifying;
    }

    public detoxify(): string {
        return `Detoxifying at a rate of ${this.detoxificationRate} units per hour.`;
    }

    public performFunction(): string {
        return "Responsible for detoxification.";
    }
}

class Pancreas extends Organ {
    private insulinProductionRate: number;

    constructor(insulinProductionRate: number) {
        super("Pancreas");
        this.insulinProductionRate = insulinProductionRate;
    }

    public produceInsulin(): string {
        return `Producing insulin at a rate of ${this.insulinProductionRate} units per hour.`;
    }

    public performFunction(): string {
        return "Produces enzimes to facilitate digestion.";
    }
}

class Anus extends Organ {
    constructor() {
        super("Anus");
    }

    public expelWaste(): string {
        return "Expelling waste material.";
    }

    public performFunction(): string {
        return "Stores and removes waste from body.";
    }
}

class HumanDigestiveSystem {
    private organs: Organ[];

    constructor() {
        this.organs = [
            new Mouth(),
            new Esophagus(),
            new Stomach(),
            new SmallIntestine(5),
            new LargeIntestine(),
            new Liver(10),
            new Pancreas(2),
            new Anus()
        ];
    }

    public getDigestiveSystemInfo(): string[] {
        return this.organs.map((organ) => organ.getOrganInfo());
    }

    public ingestFood(food: string): void {
        const mouth = this.findOrganByName("Mouth") as Mouth;
        const esophagus = this.findOrganByName("Esophagus") as Esophagus;
        const stomach = this.findOrganByName("Stomach") as Stomach;

        if (mouth && esophagus && stomach) {
            console.log(mouth.chew(food));
            console.log(esophagus.swallow());
            console.log(stomach.ingestFood(food));
            console.log(stomach.digest());
        }
    }

    public startNutrientAbsorption(): void {
        const smallIntestine = this.findOrganByName("Small Intestine") as SmallIntestine;
        if (smallIntestine) {
            console.log(smallIntestine.absorbNutrients());
        }
    }

    public completeDigestion(): void {
        const largeIntestine = this.findOrganByName("Large Intestine") as LargeIntestine;
        const liver = this.findOrganByName("Liver") as Liver;
        const pancreas = this.findOrganByName("Pancreas") as Pancreas;
        const anus = this.findOrganByName("Anus") as Anus;

        if (largeIntestine && liver && pancreas && anus) {
            console.log(largeIntestine.processWaste());
            largeIntestine.setDigestionStatus(true);

            console.log(liver.detoxify());
            liver.setDetoxificationStatus(true);

            console.log(pancreas.produceInsulin());
            console.log(anus.expelWaste());
        }
    }

    private findOrganByName(organName: string): Organ | undefined {
        return this.organs.find((organ) => organ.organName === organName);
    }
}

const digestiveSystem = new HumanDigestiveSystem();

console.log("Starting Digestion ->");
console.log("--------------------------------------------------");
digestiveSystem.ingestFood("Healthy Meal");
digestiveSystem.startNutrientAbsorption();
digestiveSystem.completeDigestion();
console.log("--------------------------------------------------");
console.log("<- Digestion Complete");

console.log("\nInformation of organs present in digestive system:");
console.log("--------------------------------------------------");
digestiveSystem.getDigestiveSystemInfo().forEach((organInfo) => console.log(organInfo));
