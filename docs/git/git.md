# git

## 测试通不通

ssh -T git@code.paic.com.cn

## 查看关联分支
git branch -vv

## 关联分支

// 一次

git pull origin dev

// 长期
``` 
git branch --set-upstream-to=origin/dev dev
```

## 推送并关联
git push --set-upstream origin xxxx

## 合并分支
git checkout dev

git merge 你刚做的分支

git push origin dev

## 回退分支

git log

git reset —hard xxxxxxxxx


## 强制更新本地
git fetch --all

git reset --hard origin/master // 远程分支名称

git fetch

## 关联远程仓库
git remote add origin git@server-name:path/repo-name.git；

## 移除远程仓库
git remote rm origin

## 查看远程仓库信息
git remote -v

## 忽略特殊文件 .gitignore

[https://github.com/github/gitignore](https://github.com/github/gitignore)

## 生成SSH公钥

```
cd ~/.ssh
ls
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```

我们需要寻找一对以 id_dsa 或 id_rsa 命名的文件，其中一个带有 .pub 扩展名。 .pub 文件是你的公钥，另一个则是私钥。

没有.shh文件   就 ssh-keygen