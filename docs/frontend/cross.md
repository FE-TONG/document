# 通信
## 什么是同源策略及限制

源： 协议 域名 端口

- http是协议
- www.baidu.com 域名
- 80 端口

三个当中有一个不一样就是跨域

限制方面
- cookie、localStorage、indexDB
- dom无法获取
- ajax

## 前后端如何通信

- ajax
- websocket
- cors

### 如何创建ajax

XMLHttpRequrest对象工作流程

兼容性问题处理

事件触发条件

事件触发顺序

   onload

   onreadystatechange

https://segmentfault.com/a/1190000006669043

### CORS

https://www.cnblogs.com/cityspace/p/6858969.html

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源(协议 + 域名 + 端口)服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

CORS需要浏览器和服务器同时支持。它的通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。


## 跨域 几种方式
- jsonp
- hash
- postMessage h5新增
- webSocket 
- CORS    http://www.ruanyifeng.com/blog/2016/04/cors.html    
  支持跨域的ajax
  原理 浏览器如果觉得是跨域请求 会在http请求头加上 cors

### JSONP
原理就是动态增加script src =‘https://www.sss.com/xxx.php?callback=callback123&data=123

后台就是 拼接字符串

callback123({data:123})

JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。