```
 /* 
      创建对象三种方法 
      1. 字面声明
      2. new
      3， Object.create
    */
/* 
      Object.create 实现原理
      1. 建个function
      2. 函数的prototype 指向 传进来 的 p
      3. return new F()
     */

/* 
      new 实现原理
      1. 一个新对象被创建， 它继承自foo.prototype
      2. 构造函数被执行。上下文（this）指定为这个新实例 ，相应参数会被传人
      3. 如果构造函数返回一个对象， 那么这个对象会取代整个new 出来的结果, 如果没有返回对象，那么new 出来的结果就是步骤一 的新对象
     */

    this
    call
    apply
    bind
/* 
      __proto__   prototype
      constructor   构造器
     */
/* 
      类的声明
      1. class
      2. 构造器 constructor
     */

/* 
      类的继承
      1. 借助constructor来继承
      2. es6继承
     */

/* 
  valueOf         涉及到值运算         用valueOf
  toString        转为字符串，显示      用toString
  柯里化 ? 缓存
  实现 
  1. add(1,2,3,4)
  2. add(1)(2)(3)(4)
  3. add(1,2,3)(1)(3,4,5)(99)
*/

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