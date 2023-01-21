/**
=================================================================================
                            子类继承父类
                继承可以把公共方法抽离出来，提高复用，减少冗余
=================================================================================
 */

class Person {
    name: any;
    constructor(name: any) {
        this.name = name;
    }
    say() {
        console.log('hello sunny')
    }
}
export class Sunny1 extends Person {
    constructor() {
        super('fzq1')
    }
    love() {
        console.log('coding1')
    }
}
export class Sunny2 extends Person {
    constructor() {
        super('fzq2')
    }
    love() {
        console.log('coding2')
    }
}
const sunny1 = new Sunny1()
const sunny2 = new Sunny2()
console.log('[ sunny1.name ] >', sunny1.name)
console.log('[ sunny2.name ] >', sunny2.name)