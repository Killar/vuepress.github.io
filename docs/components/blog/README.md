---
title: ITTO
author: baiyang
location: Beijing
---

## git常用命令

1. 设置本地的 ssh key，打开 git bash,输入命令：

ssh-keygen -t rsa -C "XXXXXX@XXXX.com" 其中双引号中是你注册 github 时用的邮箱。

一直回车，选择默认路径，和空密码。最后会在默认路径下生成.ssh 文件夹，打开.ssh 里面有两个文件，打开 id_rsa.pub 复制里面的密钥。

2. 打开 github,选择 settings

得到如下页面，点击 ssh and gpg keys,选择 ssh keys 右边的 new ssh key。出现下面绿色框的内容，填写标题，并将自己刚才复制的密钥粘贴到 key 中。最后点击 add ssh key.

3. 查看是否成功。在 git bash 中输入命令：
ssh -T git@github.com
会提示，是否 continue，输入 yes。后就会看到：
Warning:Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.
　　 Hi zhangsiyao11! You've successfully authenticated, but GitHub does not provide shell access.
这样就成功了，不用理会 warning。

4. 克隆你刚才新建的仓库到本地，输入命令：
git clone https://github.com/zhangsiyao11/chat
后面的 http 是你的仓库的地址。

此时会在刚才创建 ssh key 的默认目录下生成以你仓库名为文件名的文件，打开得到下图所示：

5. 最后将你想要上传的项目文件复制到上面的目录：

6. 在此处打开 git bash,输入如下命令：
git init
git add "文件名"  
git commit -m "文件名"
如果出现让你设置用户名和用户邮箱的提示，就按照提示上给的命令输入即可。后再次执行上面 commit 的命令。

git remote add origin https://github.com/zhangsiyao11/chat http 为你自己仓库的地址
如果出现错误：
fatal: remote origin already exists
则执行以下语句：
git remote rm origin
再执行 git remote add origin https://github.com/zhangsiyao11/chat即可。

git pull origin master  
git push origin master

- 强制提交，覆盖服务器
git push origin master -f

7. git强制覆盖：  
    git fetch --all  
    git reset --hard origin/master  
    git pull  

git强制覆盖本地命令（单条执行）：  
    git fetch --all && git reset --hard origin/master && git pull
 
第一个是：拉取所有更新，不同步；
第二个是：本地代码同步线上最新版本(会覆盖本地所有与远程仓库上同名的文件)；
第三个是：再更新一次（其实也可以不用，第二步命令做过了其实）
