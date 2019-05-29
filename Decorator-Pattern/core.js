// 装饰器模式
// 介绍
// 1.为对象添加新功能
// 2.不改变其原有的结构和功能
class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(circle);
  }
  setRedBorder(circle) {
    console.log('设置红色边框');
  }
}
// 测试
let circle = new Circle();
circle.draw();

console.log('---分割线---');

let dec = new Decorator(circle);
dec.draw();