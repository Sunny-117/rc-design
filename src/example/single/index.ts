export class Window {
    name: any;
    static instance: any;
    constructor(name: any) {
        this.name = name;
    }
    static getInstance(name: string) {
        if (!this.instance) {
            this.instance = new Window(name);
        }
        return this.instance;
    }
}
var w1 = Window.getInstance('demo1');
var w2 = Window.getInstance('demo2');
console.log(w1 === w2);// true
