// 主题 
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  // 获取当前主题的状态
  getState() {
    return this.state;
  }
  // 给当前主题设置状态
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  // 当主题的状态发生改变的时候 触发所有的观察者去更新相应的状态
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }
  // 添加观察者
  attach(observer) {
    this.observers.push(observer);
  }
}
// 观察者
class Observer {
  // 绑定观察者的名字及要观察的主题
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  // 获取主题实时的状态
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`); 
  }
}

// Test
let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s); 

s.setState(2);






