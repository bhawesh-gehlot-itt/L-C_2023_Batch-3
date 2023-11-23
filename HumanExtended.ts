abstract class Organ {
    protected organName: string;

    constructor(name: string) {
        this.organName = name;
    }

    public abstract getOrganInfo(): string;
}

class Heart extends Organ {
    private beatsPerMinute: number;
    private isBeating: boolean;

    constructor(beatsPerMinute: number) {
        super("Heart");
        this.beatsPerMinute = beatsPerMinute;
        this.isBeating = false;
    }

    public setBeatingStatus(isBeating: boolean) {
        this.isBeating = isBeating;
    }

    public getOrganInfo() {
        return `${this.organName} is ${this.isBeating ? 'beating' : 'not beating'} at ${this.beatsPerMinute} BPM.`;
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

    public setDetoxificationStatus(isDetoxifying: boolean) {
        this.isDetoxifying = isDetoxifying;
    }

    public getOrganInfo() {
        return `${this.organName} is ${this.isDetoxifying ? 'detoxifying' : 'not detoxifying'} at a rate of ${this.detoxificationRate} units per hour.`;
    }
}

class HumanBody {
    private organs: Organ[];

    constructor(heartBPM: number, liverDetoxRate: number) {
        this.organs = [];
        this.initializeOrgans(heartBPM, liverDetoxRate);
    }

    private initializeOrgans(heartBPM: number, liverDetoxRate: number) {
        const heart = new Heart(heartBPM);
        const liver = new Liver(liverDetoxRate);
        this.organs.push(heart, liver);
    }

    public getOrganInfo() {
        return this.organs.map((organ) => organ.getOrganInfo());
    }

    private findHeart(): Heart | undefined {
        return this.organs.find((organ) => organ instanceof Heart) as Heart;
    }

    private findLiver(): Liver | undefined {
        return this.organs.find((organ) => organ instanceof Liver) as Liver;
    }

    public startHeartBeating() {
        const heart = this.findHeart();
        if (heart) {
            heart.setBeatingStatus(true);
        }
    }

    public stopHeartBeating() {
        const heart = this.findHeart();
        if (heart) {
            heart.setBeatingStatus(false);
        }
    }

    public startLiverDetoxification() {
        const liver = this.findLiver();
        if (liver) {
            liver.setDetoxificationStatus(true);
        }
    }

    public stopLiverDetoxification() {
        const liver = this.findLiver();
        if (liver) {
            liver.setDetoxificationStatus(false);
        }
    }
}

const body = new HumanBody(75, 10);

console.log("Initial Organ Information:");
body.getOrganInfo().forEach((organInfo) => console.log(organInfo));

body.startHeartBeating();
body.startLiverDetoxification();

console.log("\nAfter starting processes:");
body.getOrganInfo().forEach((organInfo) => console.log(organInfo));
