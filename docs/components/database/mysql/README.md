---
author: baiyang
location: Beijing
title: MySQL
---

## MySQL主从复制（Master-Slave）

- 主从复制：是用来建立一个和主数据库完全一样的数据库环境，称为从数据库；主数据库一般是准实时的业务数据库。
- 主从复制的作用：做数据的热备，从数据库作为后备数据库，主数据库服务器故障后，可切换到从数据库继续工作，避免数据丢失。
- 假设主服务器的IP地址是192.168.11.127，从服务器的IP地址是192.168.11.129。

一、主服务器（Master）的配置
1. 安装MySQL，安装服务mysqld install MySQL-Master，新建数据库property1
2. 打开my.ini文件，在文件末尾加入下面内容：
```
# server-id指定服务器编号，如果此项已存在不添加
server-id=1
# log-bin指日志的存储位置及文件名
log-bin=D:/mysql-log/log-bin.log
# binlog-do-db指进行日志记录的数据库名称，如果存在多个数据库，则用逗号","分隔。
binlog-do-db=property1
```
3. 重启MySQL服务
4. 开通从服务器（Slave）访问主服务器（Master）的权限
进入MySQL的命令窗口
帐号：root，密码：123456 ，'192.168.11.129'为Salve机器的IP，即；允许129机器通过root/123456 访问Master
```
mysq>grant replication slave on . to 'root'@'192.168.11.129' identified by '123546';
```
5. 查看授权信息
```
mysql>show master status \G;
```
<img :src="$withBase('/assets/img/database/s1.png')" alt="变更控制系统">

注意：记住log-bin.000008和107，会在Slave机器上用到。  

二、从服务器（Slave）的配置
1. 安装MySQL，安装服务mysqld install MySQL-Slave，新建数据库property1
2. 打开my.ini文件，在文件末尾加入下面内容：
```
# server-id 全局唯一的ID 不可与Master的ID重复 ，如果此项已存在不添加
server-id=2
# log-bin指日志的存储位置及文件名
log-bin=D:/mysql-slaver-log/log-bin.log
# binlog-do-db指进行日志记录的数据库名称，如果存在多个数据库，则用逗号","分隔。
binlog-do-db=property1
```
注意：server-id 默认会有配置，检查一下，避免重复

3. 重启MySQL服务
4. 设置主库的信息，将从库和主库联系起来
```
Mysq;>change master to
master_host='192.168.11.127',
master_user='root',
master_password='123456',
master_log_file='log-bin.000008',
master_log_pos=107;
```
注意：这里的master_log_file和master_log_pos就是上面主库的信息。

5. 启动（如果Slave已经启动，先stop slave;再start salve;）
```
mysq;>start slave;
```
6. 查看slave启动的状态
```
mysq;>show slave status \G;
```
<img :src="$withBase('/assets/img/database/s2.png')" alt="变更控制系统">

如提示：Slave_IO_Running:Yes  
Slave_SQL_Running:Yes 则表明，启动成功。

三、测试
在Master的property1数据库t_wlkx_up表新增一条数据后，即可看到Slave的property1数据库的t_wlkx_up表也增加了一条相同数据。
    
<img :src="$withBase('/assets/img/database/s3.png')" alt="变更控制系统">
