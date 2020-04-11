# 设计模式
```js
// if 优化
// https://blog.csdn.net/qq_40259641/article/details/83866457
function clickBtn() {
  
  if (!this.isInHcz) {
    return this.$emit('clickTopic', item, dom)
  }
  if (!this.$store.state.isLogin) {
    return this.goLogin()
  } 
  if (this.$store.state.isLogin) {
    return App.native.goToPersonalInfo({
      entityId: item.author.entity_id,
      nickname: item.author.nickname,
      avatar: item.author.avatar
    })
  }
  const actions = () => {
    const functionA = () => {
      this.$emit('clickTopic', item, dom)
    }
    const functionB = () => {
      this.goLogin()
    }
    const functionC = () => {
      App.native.goToPersonalInfo({
        entityId: item.author.entity_id,
        nickname: item.author.nickname,
        avatar: item.author.avatar
      })
    }
    /* 1.app外   2.未登录  3.登录 */
    return new Map([
      [1, functionA],
      [2, functionB],
      [3, functionC]
    ])
  }
  console.log(actions());
  let action = [...actions()].filter(([key,value]) => {
    return key === this.appStatus
  })
  action.forEach(([key,value])=>value.call(this))
}
```

## 工厂模式

#### 应用场景

new Person()

## 单例模式

#### 应用场景

  - vant 的 Dialog组件
  - vue 实例
  - jq 实例
  - ...
``` js
/* getInstance  命名关键字 */
class SingleObject {
  login() {
      console.log('login...')
  }
}
SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)  // true
  ```
## 观察者模式

#### 应用场景

  - 事件监听 document.addEventListener('click', calllback);
  - vue 的 watch、computed
  - webSocket
  - ...

  

``` js
// todo
var event = new CustomEvent('dispatch')
window.addEventListener('dispatch', function(e) {
  console.log('dispatch');
})
window.dispatchEvent(event);
```

## 适配器模式

#### 应用场景

- 封装旧接口
 ```js
  // 如： 
  // 旧项目：大量的  $.ajax
  // 要改成
  // ajax()
  $.ajax = function(){
    return ajax()
  }
  ```
- computedg

``` js
// 接口返回的 code 或 error_code
const code = 'error_code' in res ? res.error_code : res.code;
```



## 装饰器模式
#### es7 decorator


## 代理模式

## 外观模式
## 迭代器模式
## 状态模式

#### 应用场景


## 其他设计模式