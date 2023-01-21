/**
======================================================================================== 
                            同一个接口可以不同实现
                            保持子类的开放性和灵活性
                            面向接口编程
========================================================================================
*/

export class Person {
    public name;
    protected age;
    private weight;
    constructor(name: string, age: number, weight: number) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}
export class Sunny1 extends Person {
    private money;
    constructor(name: any, age: any, weight: any, money: any) {
        super(name, age, weight);
        this.money = money;
    }
    speak() {
        console.log('hi! sunny1');
    }
}
export class Sunny2 extends Person {
    private money: any;
    constructor(name: string, age: number, weight: number) {
        super(name, age, weight);
    }
    speak() {
        console.log('hello sunny2!');
    }
}

let p = new Sunny1('fzq', 10, 10, 10);
p.speak();
let d = new Sunny2('fzq', 10, 10);
d.speak();
