# dom事件

## dom事件的级别
``` js
Dom0 element.onclick = function(){}
Dom2 element.addEventListener('click', function(){}, false)
Dom3 element.addEventListener('keyup', function(){}, false)  只是多了很多事件
```

## Dom事件模型

- 捕获 
- 冒泡

## Dom事件流
三个阶段  事件捕获阶段、处于目标阶段和事件冒泡阶段。首先发生的是事件捕获，为截获事件提供机会。然后实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。

- 捕获
- 目标阶段
- 冒泡

## 描述dom事件捕获的具体流程
``` js
/**
 * eventName
 * 回调函数
 * flag    false 默认为冒泡     true 为捕获
 */
element.addEventListener('keyup', function(){}, true)
```
window --》document --》html --》body --》... --》目标阶段

## Event事件的常见应用

``` js

event.preventDefault        // 阻止默认事件   比如a标签
event.stopPropagation()    // 阻止冒泡
event.stopImmediatePropagation()    // 阻止其中一个方法
event.currentTarget()               // 当前绑定的事件   ul
event.target()                      // 触发的事件      li

```

## 自定义事件

``` js
自定义事件
var event = new Event('custome')
ev.addEventListener('custome', function(){
    console.log('custome')
})
ev.dispatchEvent(event);

CustomEvent
```