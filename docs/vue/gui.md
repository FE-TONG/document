# vue项目规范

## 文件命名规范


> folder：文件夹命名采用中划线连接 <br>
  反例：serviceCustomer ServiceCustomer Users uiComponents <br>
  推荐：service-customer users <br>

<br>

> .js：一般的js文件采用小驼峰的命名方式。如果是类文件，则使用大驼峰的命名方式<br>
> 反例：service-customer.js<br>
> 推荐：serviceCustomer.js ServiceCustomer.js(仅限类文件)<br>

<br>


> .vue：官方推荐使用大驼峰或者中划线的方式命名。单文件组件官方命名规范<br>
> 反例：myComponent.vue<br>
> 可使用：MyComponent.vue<br>
> 推荐：my-component.vue<br>



##  目录结构

```
.
├── api
│   ├── new.js
│   └── user.js
├── assets
│   └── images
├── components
│   └── modal
│       ├── index.js
│       └── modal.vue
├── libs
│   ├── ajax.js
│   └── excel.js
├── mixins
│   ├── news.js
│   └── user.js
├── router
│   ├── index.js
│   └── modules
│       ├── news.js
│       └── user.js
├── styles
│   └── common.css
├── tree.text
├── utils
│   └── util.js
├── views
│   ├── news
│   └── users
├── main.js
└── App.vue

```


## 钩子顺序规范

#### name
#### mixins
#### components
#### directives
#### props
#### data
#### computed
#### watch
#### beforeCreated
#### created
#### methods
#### mounted
#### activated      作用于keep-alive
#### deactivated    作用于keep-alive
#### beforeDestroy
#### destroy


## css 顺序

1. 位置属性(，position, top, right, z-index, display, float，box-sizing等)
2. 大小(content，width, height, padding, margin， overflow)
3. 文字系列(font, line-height, letter-spacing, color， text-align，text-overflow，word-break等)
4. 背景(background, border，object-fit，opacity等)
5. 其他(animation, transition，box-shadow等)

