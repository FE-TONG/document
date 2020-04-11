# 布局
## ASd4947679!
## 左右布局
``` md
Float			    兼容性好， 但是宽度超过100%会掉下来，缺点：要清楚浮动
postion 			优点：快捷。 缺点： 下面写的布局都要 脱离文档流。(position)
Flex				  优点：能左右两边自适应，(ie8以下不兼容)
Table			    优点：兼容比flex好， 缺点：table-cell 同时高度 
grid				  优点：新技术，写法好。 缺点：不兼容

高度未知 两边高度随着中间自动
flex。和 table 满足
```
#### float

<layout layoutType="float"></layout>

#### flex

<layout layoutType="flex"></layout>

#### position

<layout layoutType="position"></layout>

#### table

<layout layoutType="table"></layout>

#### grid

<layout layoutType="grid"></layout>



## 垂直居中布局
#### 第一种
绝对定位 left | top | bottom | right 都为0 ，  然后margin： auto

```
1.在普通内容流中，margin:auto的效果等同于margin-top:0;margin-bottom:0。

2.position:absolute使绝对定位块跳出了内容流，内容流中的其余部分渲
  染时绝对定位部分不进行渲染。

3.为块区域设置top: 0; left: 0; bottom: 0; right: 0;将给浏览器重
  新分配一个边界框，此时该块块将填充其父元素的所有可用空间，
  所以margin 垂直方向上有了可分配的空间。

4.再设置margin 垂直方向上下为auto，即可实现垂直居中。（注意高度得设置）。
```
<style>
  *{
      padding: 0;
      margin: 0;
  }
  .margin-box{
      position: relative;
      width: 100%;
      height: 200px;
      background: #abcdef;
  }
  .margin-box .box{
      position: absolute; left: 0; top: 0; right: 0; bottom: 0;
      margin: auto;
      width: 100px;
      height: 50px;
      text-align: center;
      line-height: 50px;
  }
</style>
<section>
<div class="margin-box" text="
      position: relative;
      width: 100%;
      height: 200px;
      background: #abcdef;">
    <div class="box" text="
      position: absolute; 
      left: 0; top: 0; 
      right: 0; bottom: 0;
      margin: auto;
      width: 100px;
      height: 50px;
      text-align: center;
      line-height: 50px;">123</div>
</div>
</section>

#### 第二种
flex  justify-content: center;  align-items: center;
``` css
.flex-box{
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
}
.flex-box .box{
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
```
#### 第三种
position: absolute; top: 50%;left: 50%;  element  .margin-left:-xxx;   transform: translate(-50%,-50%)

``` css
/* marign-left: -xx   已知宽高 */
/* margin-left: -50px;
margin-top: -25px; */
/* translate  未知宽高 */
transform: translate(-50%, -50%);
```

#### 第四种
  table  table-cell   vertical-algin：middle
  ``` css
    .table-box{
      display: table;
      width: 100%;
      height: 200px;
    }
    .table-box .box{
      display: table-cell;
      vertical-align: middle;
      height: 50px;
      text-align: center;
      line-height: 50px;
      
    }
  ```
