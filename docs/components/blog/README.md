---
title: ITTO
author: baiyang
location: Beijing
---

# 如何将自己写的代码上传到 github 上?

## 首先注册 github 账号，登录，创建新仓库 ，点击+，点击 new repository

得到如下页面，填写仓库名，自己随便写一个名字，下面的描述可写可不写，点击 Initialize this repository with a README，然后创建：

## 下载 git shell，网上给了很多官网下载网址，我点进去下载，都下不下来，后我在百度上搜“git 下载”，

下载下来也能用。这个是我下载的图标：

## 配置 Git.

1.设置本地的 ssh key，打开 git bash,输入命令：

ssh-keygen -t rsa -C "XXXXXX@XXXX.com" 其中双引号中是你注册 github 时用的邮箱。

一直回车，选择默认路径，和空密码。最后会在默认路径下生成.ssh 文件夹，打开.ssh 里面有两个文件，打开 id_rsa.pub 复制里面的密钥。

2.打开 github,选择 settings

得到如下页面，点击 ssh and gpg keys,选择 ssh keys 右边的 new ssh key。出现下面绿色框的内容，填写标题，并将自己刚才复制的密钥粘贴到 key 中。最后点击 add ssh key.

3.查看是否成功。在 git bash 中输入命令：
ssh -T git@github.com
会提示，是否 continue，输入 yes。后就会看到：
Warning:Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.
　　 Hi zhangsiyao11! You've successfully authenticated, but GitHub does not provide shell access.
这样就成功了，不用理会 warning。

4.克隆你刚才新建的仓库到本地，输入命令：
git clone https://github.com/zhangsiyao11/chat
后面的 http 是你的仓库的地址。

此时会在刚才创建 ssh key 的默认目录下生成以你仓库名为文件名的文件，打开得到下图所示：

5.最后将你想要上传的项目文件复制到上面的目录：

6.在此处打开 git bash,输入如下命令：
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