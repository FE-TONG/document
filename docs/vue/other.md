# vue 不常用写法

## hook:xxxx

#### 比如

``` js
  // js 写法
  vm.$on('hook:beforeDestroy', function () {
    console.log(123, 98765435467);
  });
```

等同于 ===

``` js
  // 生命周期 写法
  beforeDestroy() {
    console.log(123, 98765435467);
  }
```

## computed

``` js

computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
  this.fullName = ‘xxx jjj’; 
 // 执行 一次 fullName 的 set方法

``` 
-------

自己看法

- computed方法只执行一次
- 依赖变   computed变
- computed 只能依赖响应式数据， 非响应式不触发 <br />
  如： this.xx. 可以依赖<br />
      this.$refs.xx 不能依赖 因为它不是响应式数据<br />

## v-model   
  ``` js
  v-model="some value"

  ===

  @change="val => { foo = val }"
  value="some value">
  ```
  两种写法都是一样的，但是自定义组件需要自己写 @change事件


## v-slot 

#### 请注意， v-slot 只能添加到 template 或自定义组件上，这点与弃用的 slot 属性不同
#### v-slot   是  slot  与 slot-scope 的混合

注意新版本才有这个方法

## nextTick

#### nextTick 是 异步方法  

## keep-alive

#### 这个组件很好玩

## transition

#### 这个组件很好玩 +1