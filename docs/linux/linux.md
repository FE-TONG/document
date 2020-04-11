## 创建不存在的目录

#### mkdir -p.  parents

如： mkdir -p xx/bb/cc 

```
.
└─ xx
   └─ bb
      ├─ cc
```


## 生成tree tree.text

#### tree -I 'node_modules' >tree.txt 
#### tree --dirsfirst 目录显示在前，文件显示在后

## 获取端口 占用的 pid

#### netstat -tunlp|grep {port}

## 杀死进程

#### kill -9 {pid}