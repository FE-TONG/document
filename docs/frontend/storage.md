# 浏览器缓存
## 性能
- 资源压缩合并，减少http请求
- 非核心代码异步加载—》异步加载的方式—〉异步加载的区别
- 利用浏览器缓存—》 缓存的分类 —〉 缓存的原理
- 使用cdn
- 预解析dns     默认浏览器 a标签 打开预解析，但是在https下 不打开 第一个就是让打开
``` html
<meta http-equiv=“x-dns-prefetch-control” content=“on”> 
<link rel=“dns-prefetch” href=“//host_name_to_prefetch.com”>
```

defer     看顺序

async  	随机
  
## 缓存的分类
- 强缓存
  - expires 
  - Cache-control    相对时间       如果都有 以相对时间为准
  
- 协商缓存
  - last-modified. 
  - if-modified-since
  - eTag
  - if-none-match