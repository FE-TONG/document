# dom 操作 css

## getAttribute

#### getAttribute() 方法返回指定属性名的属性值。

#### getAttributeNode 以 Attr 对象返回属性

如： el.getAttribute('class')


## setAttribute

如： el.setAttribute('class')


## getComputedStyle

#### Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值

如： window.getComputedStyle(el,null)['color']


## getBoundingClientRect

#### 返回元素的大小及其相对于视口的位置。

如：rectObject = el.getBoundingClientRect();

``` js
{
  bottom: 30
  height: 22
  left: 61.3125
  right: 126.34375
  top: 8
  width: 65.03125
  x: 61.3125
  y: 8
}
``` 

## 获取滚动元素

``` js
// 获取滚动元素，一直往上找
var getScrollEventTarget = function (element) {
  var currentNode = element;
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    var overflowY = (currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
};
```

## 获取滚动距离

``` js
var getScrollTop = function (element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  }

  return element.scrollTop;
};
```