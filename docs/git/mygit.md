# git搭建服务器
[git搭建服务器 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000)

## 先安装git
sudo apt-get install git

## 建个git 用户名
sudo adduser git

## 创建证书登录：

收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。

## 初始化Git仓库

先选定一个目录作为Git仓库，假定是/srv/sample.git，在/srv目录下输入命令：

```
sudo git init --bare sample.git

sudo chown -R git:git sample.git
```

## 禁用shell登录：
通过编辑/etc/passwd
```
git:x:1001:1001:,,,:/home/git:/bin/bash
改为：

git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
```
## 克隆远程仓库
```
git clone git@server:/srv/sample.git
```