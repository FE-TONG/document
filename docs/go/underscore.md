# underscore


## 创建对象三种方法

  - 字面声明
  - new
  - Object.create

``` js
    //字面声明
    var o = {}

    // new
    var n = function(){};var o2 = new n();

    // Object.create
    var p = {}; var o3 = Object.create(p)

```

## Object.create 实现原理

1. 建个function
2. 函数的prototype 指向 传进来 的 p
3. return new F()

``` js

  function create(p) {
    function F() {

    }
    F.prototype = p;
    return new F();
  }

```

## new 实现原理
1. 一个新对象被创建， 它继承自foo.prototype
2. 构造函数被执行。上下文（this）指定为这个新实例 ，相应参数会被传人
3. 如果构造函数返回一个对象， 那么这个对象会取代整个new 出来的结果, 如果没有返回对象，那么new 出来的结果就是步骤一 的新对象

``` js
  function new1(func, ...args) {
    var o = Object.create(func.prototype)
    var k = func.apply(o, args);
    if(typeof o === 'object') {
      return o
    }else {
      return k
    }
  }

```

## 类的声明
  - class
  - 构造器 constructor

  ``` js
    class A {
      constructor(name) {
        this.name = name
      }
      talk() {
        console.log(this.name);
        
      }
    }
    var a = new A('aaaa')
    function A1(name) {
      this.name = name
    }
    A1.prototype.talk = function() {
      console.log(this.name)
    }
    var a1 = new A1('a1a1a1a1')
  ```

## 类的继承
  - 借助constructor来继承
  - es6继承

  ``` js
    function Parent1(name) {
      this.name = name
    }
    function Child1(name) {
      Parent1.call(this, name)
      this.type = 'child1'
    }


    function Parent5(name) {
      this.name = name;
    }
    function Child5() {
      Parent5.call(this, name)
      this.type = 'Child5'
    }
    Child5.prototype = Object.create(Parent5.prototype)
    Child5.prototype.constructor = Child5


    class Parent6 {
      constructor(name) {
        this.name = name
      }
      static hello() {
        console.log('hello world');
      }
      hehe() {
        console.log('hehehe')
      }
    }
    class Child6 extends Parent6 {
      super() // Parent6.prototype.constructor.call(this)
    }
    var c6 = new Child6('adas')

  ```

## 柯里化

  ``` js
    /* 
      valueOf         涉及到值运算         用valueOf
      toString        转为字符串，显示      用toString
      柯里化 ?
      实现 
      1. add(1,2,3,4)
      2. add(1)(2)(3)(4)
      3. add(1,2,3)(1)(3,4,5)(99)
     */

    function add() {
      var args = [].slice.call(arguments);
      var tmp  = function() {
        var arg_fn = [].slice.call(arguments);
        return add.apply(null,  args.concat(arg_fn));
      }
      tmp.valueOf = function() {
        return args.reduce((a, b) => a+b);
      }
      return tmp;
    }
    +add(1,2,3,4)
    +add(1)(2)(3)(4)
    +add(1,2,3)(1)(3,4,5)(99)
    

    function sum() {
      var args = [].slice.call(arguments)
      let sum2 = 0;
      args.forEach(element => {
        sum2 += element
      });
      var tmp = function () {
        var arr = [sum2]
        var arg = arr.concat([].slice.call(arguments))
        return sum.apply(null, arg);
      }
      tmp.valueOf = function () {
        return sum2;
      }
      return tmp;
    }
    +sum(1,2,3,4)
    +sum(1)(2)(3)(4)
    +sum(1,2,3)(1)(3,4,5)(99)

  ```
  
``` js

    this
    call
    apply
    bind
    __proto__   prototype
    constructor   构造器

    /* 
      数组
      文档
    */


    /* 
    去重
    1. 直接两个遍历，在里面留个标识，判断 是否push
    2. 排序，然后第一个和第二个比
    3. object
    4. es6  Array.from(new Set(a)); || ...
    */


    /* 
    restArguments
    */
   
```

## throttle 与 debounce

``` js

  /* 
    throttle 节流

    
   */
  function throttle(func, wait) {
    var timer, context, args, last = 0, result;

    var later = function() {
      timer = null;
      result = func.apply(context, args);
      if (!timer) context = args = null;
    };

    return function() {
      var now = Date.now()
      context = this
      args = arguments
      var diff = wait - (now - last)
      if (diff <=0 || diff > wait) {
        if (timer) {
          clearTimeout(timer);
          timer = null
        }
        last = now
        result = func.apply(context, args)
        if (!timer) context = args = null
      } else if(!timer) {
        timer = setTimeout(later, diff)
      }
      return result
    }
  }
```

``` js
  /* debounced 去抖 */
  function debounced(fun, delay) {
    var timer, context, args;
    function execute() {
      timer = null
      fun.apply(context, args)
    }
    return function() {
      context = this
      args = arguments
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        execute()
      }, delay)
    }
  }
```