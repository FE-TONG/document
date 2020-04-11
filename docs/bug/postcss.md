# postcss



## postcss-px-to-viewport

```js
'postcss-px-to-viewport': {
  viewportWidth: 375,
  viewportHeight: 667,
  unitPrecision: 3,
  viewportUnit: 'vw',
  selectorBlackList: [
    '.ignore',
    '.hairlines',
  ],
  minPixelValue: 1,
  mediaQuery: false,
},
```



- **unitToConvert**  (String) 要转换的单位，默认是'px'

- **viewportWidth** (Number) viewport的宽度，默认是320，可根据设计稿来，750的设计稿就写750

- **unitPrecision**  (Number) 指定`px`转换为视窗单位值的小数位数，默认是5

- **viewportUnit**  (String)指定需要转换成的视窗单位，默认vw

- **fontViewportUnit**  (String)指定字体需要转换成的视窗单位，默认vw

- **minPixelValue** (Number) 默认值1，小于或等于`1px`不转换为视窗单位,

- **mediaQuery**  (Boolean) 是否在媒体查询时也转换px，默认false

- **replace** (Boolean)  replaces rules containing vw instead of adding fallbacks.

- **exclude** (Array or Regexp) 设置忽略文件，如node_modules
  如果是regexp, 忽略全部匹配文件.
  如果是数组array, 忽略指定文件.

- **selectorBlackList**  (Array) 指定不转换为视窗单位的类，保留px，值为string或正则regexp，建议定义一至两个通用的类名

  - 值为string类型， 检查字符是否包含
    - ['body'] 匹配 .body-class
  - 值为regexp类型，正则匹配.
    - [/^body$/] 匹配 body 而不是 .body

- **propList** (Array) 指定可以转换的css属性，默认是['*']，代表全部属性进行转换

  - 精确匹配
  - 代表全部属性
  - 在字符串前面或者后面用*，如 ['*position*'] 会匹配background-position-y*
  - 用！则该属性排除. 如: ['*', '!letter-spacing']
  - Combine the "not" prefix with the other prefixes. Example: ['', '!font']

  

**@keyframes 和media查询里的px默认是不转化的，设置mediaQuery： true则媒体查询里也会转换px**

**@keyframes可以暂时手动填写vw单位的转化结果**




