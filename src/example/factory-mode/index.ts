// 工厂模式


export class Plant {
    name: any;
    constructor(name: any) {
        this.name = name;
    }
    grow() {
        console.log('growing~~~~~~');
    }
}
export class Apple extends Plant {
    taste: string;
    constructor(name: string) {
        super(name);
        this.taste = '甜';
    }
}
export class Orange extends Plant {
    taste: string;
    constructor(name: string) {
        super(name);
        this.taste = '酸';
    }
}
export class Factory {
    static create(name: string) {
        switch (name) {
            case 'apple':
                return new Apple('苹果');
            case 'orange':
                return new Orange('橘子');
            default:
                return new Plant('默認值')
        }
    }
}
let apple = Factory.create('apple');
console.log(apple);
let orange = Factory.create('orange');
console.log(orange);
