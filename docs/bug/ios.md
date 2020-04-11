# ios

## 苹果滑动自定义头部背景色异常

![图片](../.vuepress/public/Snipaste_2019-07-04_18-20-12.png)

#### 问题描述：

苹果手机滑动，自定义头部组件背景色 莫名其妙变为 黑色

#### 问题出现：

苹果手机偶现，安卓没有

#### 问题定位： 

未知

#### 解决思路：

自定义头部组件  通过v-if="showFlag"来控制

因为头部是否固定 ，是通过一个变量(normal)来控制

然后在监听变量(normal)

``` html
<div
    class="header"
    ref="header"
    v-if="showFlag"
>
	//////////////
</div>
```



``` js
	watch: {
        /* 为了处理 苹果手机头部黑屏问题 */
        normal(val) {
        this.showFlag = false
        this.$nextTick(() => {
            this.showFlag = true
        })
        }
    },
```

## 字体突然变大

``` css
    -webkit-text-size-adjust: none;
```

​	