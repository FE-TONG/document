# 面向对象

## 类的声明

### class

```js
/* 
  类的声明
*/
class Animal2 {
  constructor(name) {
      this.name = name;
  }
}   

var a2 = new Animal2()

```

### 构造器

```js
/* 
  类的声明
*/
function Animal(name){
  this.name = name;
}

var a1 = new Animal()

```

## 类的继承

### 1.借助构造器来实现继承

原理：通过call方法 来把父级构造器的 this  指向 子级构造器

缺点： prototype上的方法  子类 没继承上

```js
function Parent1() {
  this.name = 'Parent1'
}
function Child1() {
  Parent1.call(this)
  this.type = 'child1'
}
Parent1.prototype.add = function(){
  console.log(123)
}
var c1 = new Child1()
```

### 2.借助原型链来实现继承

原理：把子类的 prototype  =  父类 的实例

缺点： 
  1. 父类的 构造器里的属性 是公用的。如 pay 会同时改变，
  2. prototype.constructor 的指向是 父类构造器, 无法知道实例 的构造器

```js
function Parent2() {
  this.name = 'Parent2'
  this.pay = [1, 2, 3]
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
var c2 = new Child2()
```

### 3.组合方式  来实现继承
原理：

1. 通过call方法 来把父级构造器的 this  指向 子级构造器
2. 把子类的 prototype  =  父类 的实例 

缺点： 

1. prototype.constructor 的指向是 父类构造器, 无法知道实例 的构造器
2. 父级构造器 调用了两次

```js
function Parent3() {
  this.name = 'Parent3'
}
function Child3() {
  Parent3.call(this)
  this.age = 18
}
Child3.prototype = new Parent3()
var c3 = new Child3()

```

### 4.组合方式(优化)  来实现继承
原理：

1. 通过call方法 来把父级构造器的 this  指向 子级构造器
2. 把子类的 prototype  =  父类 的实例 

缺点： 

1. prototype.constructor 的指向是 父类构造器 , 无法知道实例 的构造器

2. Child4.prototype 改变  Parent4.prototype 也改变

```js
function Parent4() {
  this.name = 'Parent4'
}
function Child4() {
  Parent4.call(this)
  this.age = 19
}
Child4.prototype = Parent4.prototype

var c4 = new Child4()

```

### 5.组合方式(最终优化)  来实现继承

```js
function Parent5() {
  this.name = 'Parent5'
}
function Child5() {
  Parent5.call(this)
  this.age = 19
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5
var c4 = new Child5()

```

### 6.es6继承

```js
class Parent6 {
  constructor(gunMethod) {
    this.gunMethod = gunMethod;
  }
  // 静态方法
  static hello() {
    // 这里this 代表当前 Parent6 构造器
    console.log(this)
    console.log('hello, world');
  }
  gun() {
    console.log(`gun:${this.gunMethod}`, 222);
  }
}
class Child6 extends Parent6 {
  constructor(gunMethod) {
    super(gunMethod)
    
    console.log(super.gun(), '1111');
    
    // super()    Parent6.prototype.constructor.call(this)
  }
}
new Child6('🚖');
Child6.hello()
```

