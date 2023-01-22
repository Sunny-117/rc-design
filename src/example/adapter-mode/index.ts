// 旧的接口和使用者不兼容
// 中间加一个适配器转换接口
// axios，vue 源码中都用到了此理念  

export class Power {
    charge() {
        return '220V';
    }
}
/**
 * Adapter:适配器转换接口 电源电压转换
 */
export class Adapter {
    power: Power;
    constructor() {
        this.power = new Power();
    }
    charge() {
        let power = this.power.charge();
        return `${power} => 12V`;
    }
}
export class Client {
    adapter: Adapter;
    constructor() {
        this.adapter = new Adapter();
    }
    use() {
        console.log(this.adapter.charge());
    }
}
new Client().use();
