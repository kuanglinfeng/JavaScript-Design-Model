// 单例模式 （一个类只创建一个实例）
// 模拟登录框
class LoginForm {
  constructor() { 
    this.state = 'hide';
  }
  show() {
    if (this.state === 'show') {
      console.log('已经显示');
      return;
    }
    this.state = 'show';
    console.log('登录框显示成功');  
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏');
      return;
    }
    this.state = 'hide';
    console.log('登录框隐藏成功');
  }
}

// 获取单例的静态方法
LoginForm.getInstance = (() => {
  let instance;
  return () => {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  }
})();

// 测试
let login1 = LoginForm.getInstance();
login1.show();    // 登录框显示成功
let login2 = LoginForm.getInstance();
login2.show();   // 已经显示

let msg = login1 === login2 ? 'login1和login2完全相同' : 'login1和login2不相同';
console.log(msg); // 完全相同

// 设计模式验证
// 1.符合单一职责原则，只实例化唯一的对象
// 2.没法具体开放封闭原则，但是绝对不违反开放封闭原则。