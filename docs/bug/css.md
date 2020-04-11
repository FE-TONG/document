# css细节

## 禁止复制、选中文本

``` css
Element {
 /* -webkit-user-select: none;
 -moz-user-select: none;
 -khtml-user-select: none; */
  user-select: none;
}
```

## 长时间按住页面出现闪退
``` css
element {

 -webkit-touch-callout: none;

}
```

## 让段落文本可以展示/n/r 特殊字符，并且保证单词数字超长能换行。

``` css
  // 单词换行
  word-wrap: break-word;
  // 可以让文本把/n特殊字符，展示成换行符。 并且保留所有空格。
  white-space: pre-wrap;
```

## 如果没有字体高度，又想独占一行。
```css
  min-height: xx;
```

## iphone及ipad下输入框默认内阴影

``` css
Element {
 -webkit-appearance: none;
}
```

## ios和android下触摸元素时出现半透明灰色遮罩

``` css
Element {
 -webkit-tap-highlight-color:rgba(255,255,255,0)
}
```

## 动画定义3D启用硬件加速
```css
Element {
 -webkit-transform:translate3d(0, 0, 0)
 transform: translate3d(0, 0, 0);
}
```

## 旋转屏幕时，字体大小调整的问题

```html
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
 -webkit-text-size-adjust:100%;
}
```

## ios点击链接会出现一个半透明的灰色背景。

```css
-webkit-tap-highlight-color
```

## 如果使用了一行点点点, 要注意部分机型字体会截掉一部分。

办法：  就是给个min-height: 
```css
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  min-height: font-size * 1.4 (行高比例);
```

## ios 上下拉动滚动条时卡顿、慢

```css
body {

 -webkit-overflow-scrolling: touch;

 overflow-scrolling: touch;

}
```