/**
======================================================================================== 
                            把数据封装起来
                减少耦合，不该外部访问的不要让外部访问
                        利于数据的接口权限管理
                ES6 目前不支持，一般认为_开头的都会私有的，不要使用
                        实现：
            public: 公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符
            protected: 受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为
            private: 私有修饰符，只可以在类内使用private修饰的属性和行为
========================================================================================
 */

export class Person {
    public name;
    protected age;
    private weight;
    constructor(name: any, age: any, weight: any) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}
export class Sunny extends Person {
    private money;
    constructor(name: string, age: number, weight: number, money: number) {
        super(name, age, weight);
        this.money = money;
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
    getWeight() {
        // console.log(this.weight);
    }
}
let p = new Sunny('fzq', 9, 100, 100);
console.log(p.name);
// console.log(p.age);
// console.log(p.weight);