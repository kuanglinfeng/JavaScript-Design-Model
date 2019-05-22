// 工厂
class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log('init');
  }
  fun1() {
    console.log('fun1');
  }
  fun2() {
    console.log('fun2');
  }
}
// 创建者
class Creator {
  create(name) {
    return new Product(name);
  }
}

// 创建者
let creator = new Creator();
let p1 = creator.create('Factory Pattern');
p1.init();
p1.fun1();
p1.fun2();

// 设计原则验证
// 1.工厂和创建者分离
// 2.符合开放封闭原则 
