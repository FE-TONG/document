# vscode 设置代码快捷键

## 配置clo 快捷键等

com+p  输入> **snippets**

javascript

## 配置代码格式化样式等

com+p  输入> **settings** 找到**prettier**

eslint.autoFixOnSave 可以改



## 配置 **Settings Sync**已配置

自己搜索关键字



## 打开/关闭终端

`^  toggle



## 新建终端

`^ shift   



## 配置vscode代码格式化

主要依赖于 **perttier**、eslint、**vetur**

可以修改自定义配置 settings.json

这可以让代码使用单引号。去掉；

```
{
  "prettier.eslintIntegration": true,
  // 自动保存格式化配置
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
        "singleQuote": true,
        "semi": false
    }
  }
}
```

这个如果项目的eslint报警告

可以修改.eslintrc.js

```
rules: {
	'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false
    }]
}
```



