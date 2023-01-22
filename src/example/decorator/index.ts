// 装饰器模式是将一个对象嵌入另一个对象之中，实际上相当于这个对象被另一个对象包装起来，
// 形成一条包装链。请求随着这条链条一次传递到所有的对象，每个对象有处理这个请求的机会。

class Coffee {
    make(water: any) {
        return `${water}+咖啡`;
    }
    cost() {
        return 10;
    }
}
class MilkCoffee {
    parent: Coffee;
    constructor(parent: Coffee) {
        this.parent = parent;
    }
    make(water: any) {
        return `${this.parent.make(water)}+牛奶`;
    }
    cost() {
        return this.parent.cost() + 1;
    }
}
class SugerCoffee {
    parent: MilkCoffee;
    constructor(parent: MilkCoffee) {
        this.parent = parent;
    }
    make(water: string) {
        return `${this.parent.make(water)}+糖`;
    }
    cost() {
        return this.parent.cost() + 2;
    }
}
let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let milksugerCoffee = new SugerCoffee(milkCoffee);
console.log(milksugerCoffee.make('水') + '=' + milksugerCoffee.cost());
