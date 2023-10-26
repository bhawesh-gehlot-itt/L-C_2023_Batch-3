class Organ {
    protected organName: string;

    constructor(name: string) {
        this.organName = name;
    }

    public getOrganInfo() {
        return `${this.organName}`;
    }
}

class Heart extends Organ {
    private beatsPerMinute: number;

    constructor(beatsPerMinute: number) {
        super("Heart");
        this.beatsPerMinute = beatsPerMinute;
    }

    public getHeartInfo() {
        return `${this.getOrganInfo()} beats at ${this.beatsPerMinute} BPM.`;
    }
}

class Liver extends Organ {
    private detoxificationRate: number;

    constructor(detoxificationRate: number) {
        super("Liver");
        this.detoxificationRate = detoxificationRate;
    }

    public getLiverInfo() {
        return `${this.getOrganInfo()} detoxifies at a rate of ${this.detoxificationRate} units per hour.`;
    }
}

class HumanBody {
    private organs: Organ[];

    constructor() {
        this.organs = [];
    }

    public addOrgan(organ: Organ) {
        this.organs.push(organ);
    }

    public getOrganInfo() {
        return this.organs.map((organ) => organ.getOrganInfo());
    }
}

const heart = new Heart(75);
const liver = new Liver(10);

const body = new HumanBody();
body.addOrgan(heart);
body.addOrgan(liver);

console.log("Human Body Organs:");
console.log(body.getOrganInfo());

console.log("\nHeart Information:");
console.log(heart.getHeartInfo());

console.log("\nLiver Information:");
console.log(liver.getLiverInfo());
