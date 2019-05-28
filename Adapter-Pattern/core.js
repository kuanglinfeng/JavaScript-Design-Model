// 介绍：
// 1.旧接口格式和使用者不兼容
// 2.中间加一个适配器转换接口

// 代码演示
class Adaptee {
  specificRequest() {
    return '德国标准插头';
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - 转换器 - 中国标准插头`;
  }
}

// 测试
let target = new Target();
let res = target.request();
console.log(res);
