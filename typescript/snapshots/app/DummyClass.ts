export default class DummyClass {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet(): string {
        return `Hello, ${this.name}!\n`;
    }
}