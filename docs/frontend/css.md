# css

## 垂直对齐
该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐

Vertical-align: middle | baseline | bottom | top

box-sizing:  Content-box (默认) | Border-box

## text
段落中的文本不进行换行

white-space：normal(默认) | nowrap | pre

word-wrap：normal(默认) | break-word（换行）

## 补间动画

### 转换属性
transform：
translate(10px, 20px,0)
scale(1,1,1)
rotate()

### 过渡属性
Transition

Transition-property

Transition-duration.   2s. 规定完成动画所花费的时间

Transition-timing-function 

linear  规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。

ease(默认) 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。

ease-in 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。

ease-out

transtion-delay 2s. 在过渡效果开始前等待 2 秒：

## 帧动画
@keyframes
``` css
@keyframes mymove {
    from {top:0px;}
    to {top:200px;}
}
```

## animation
``` css
Animation-name
Animation-duration    规定完成动画所花费的时间
Animation-timing-function
Animation-delay 
Animation-iteration-count   1(默认). infinite 规定动画应该播放的次数。
Animation-direction normal alternate 是否应该轮流反向播放动画
```

## Flex
display: flex;

Flex-direction
    row(默认) 主轴为水平方向，起点在左端
      row-reverse. 
    Column  

Flex-wrap
    nowrap(默认) | wrap | wrap-reverse;

Justify-content
    flex-start | flex-end | center | space-between | space-around

Align-items
    flex-start | flex-end | center | baseline | stretch(默认);

Align-content. // 多根轴线的对齐方式

Flex: grow shrink basis

align-self
</pre>

## scss用法

### 使用变量

- #### 变量声明

  $color: #f90;

- #### 变量引用

  .selected{ color: $color;}

### 嵌套

- 嵌套css

- 嵌套属性

``` css
background: {
color: #abcdef;
position: center center;
size: 11px 11px;
}

border: 1px solid red {
    left: 0;
    right: 0;
}
border: 1px solid red;
border-left: 0;
border-right: 0;

```

### 控制指令

``` css
@if

@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}


@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

### 混合指令

``` css
@mixin clerfix {
    display: inline-block;
      &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
  * html & { height: 1px }
}

.xxx{
    @include clerfix;
}
```