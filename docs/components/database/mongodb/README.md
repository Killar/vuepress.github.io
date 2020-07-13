---
author: baiyang
location: Beijing
title: MongoDB
---

## MongoDB副本集配置（一主一从一仲裁）

环境准备  
服务器：Windows2008 R2 MongoDB版本：3.6.5 副本集方案：1主库+1从库+1个仲裁服务器 注意：部署生产环境的时候最好将不同的节点部署在不同的服务器上，我为了演示，因此直接部署在同一台

一、安装MongoDB
1. 拷贝3份MongoDB到D盘下，目录依次为（实际在数据库运行时，哪个实例是主库是不一定的，但为了区分文件夹，暂且如此起名了）  
- Mongodb_Master    //  192.168.11.29 27311 主库      
- Mongodb_Slaver    //  192.168.11.29 27321 从库  
- Mongodb_Arbiter   //  192.168.11.29 27331 仲裁服务器  

 <img :src="$withBase('/assets/img/database/1.png')" alt="变更控制系统">
 
2. 主库配置
 打开cmd，进入bin目录下，执行以下命令创建主库数据库服务： 
 ```
D：\Mondodb\Mongodb_Master\bin>mongod --replSet shard1 --port 27311 --logpath "D:\Mongodb\Mongodb_Master\data\log\mongod.log" --logappend --dbpath "D:\Mongodb\Mongodb_Master\data\db" --serviceName "mongo_master" --serviceDisplayName "mongo_master" --install
``` 
 
3. 从库配置
 打开cmd，进入bin目录下，执行以下命令创建主库数据库服务：  
 ```
 D：\Mondodb\Mongodb_Slaver\bin>mongod --replSet shard1 --port 27321 --logpath "D:\Mongodb\Mongodb_Slaver\data\log\mongod.log" --logappend --dbpath "D:\Mongodb\Mongodb_Slaver\data\db" --serviceName "mongo_slaver" --serviceDisplayName "mongo_slaver" --install
```

4. 仲裁服务器配置
 打开cmd，进入bin目录下，执行以下命令创建主库数据库服务：  
 ```
 D：\Mondodb\Mongodb_Arbiter\bin>mongod --replSet shard1 --port 27331 --logpath "D:\Mongodb\Mongodb_Arbiter\data\log\mongod.log" --logappend --dbpath "D:\Mongodb\Mongodb_Arbiter\data\db" --serviceName "mongo_arbiter" --serviceDisplayName "mongo_arbiter" --install
 
```
5. 启动服务

 <img :src="$withBase('/assets/img/database/2.png')" alt="变更控制系统">
 
6. 将三个实例连接在一起
  
（1）打开cmd，进入主库bin目录下，连接：  
```
D：\Mondodb\Mongodb_Master\bin>mongo –port 27311
```
（2）执行mongd 命令：  

```
>config={_id:'shard1',members:[{_id:0,host:'127.0.0.1:27311'},{_id:1,host:'127.0.0.1:27321'},{_id:3,host:'127.0.0.1:27331', arbiterOnly:true}]}
```


（3）说明：_id的值"shard1"是配置名称，多处使用，需统一。members下就是各mongo实例，第三个成员中的arbiterOnly:true表明改成员是仲裁服务器。

（4）然后通过下面的指令启动样本集
```
>rs.initiate(config)  
```
 <img :src="$withBase('/assets/img/database/3.png')" alt="变更控制系统">

显示OK，表示副本集创建成功。  
当初始化配置信息后，可以明显的看到mongodb的命令行发生了变化，会显示出当前节点所属的副本集名称和节点类型。  

 <img :src="$withBase('/assets/img/database/4.png')" alt="变更控制系统">

（5）查询副本集状态

使用rs.status()指令查询副本集中各实例的状态，执行结果如下：

<img :src="$withBase('/assets/img/database/5.png')" alt="变更控制系统">

<img :src="$withBase('/assets/img/database/6.png')" alt="变更控制系统">

可以看到副本集中的各成员状态：  
- health: 1   //1表明状态是正常，0表明异常  
- state: 1     // 1表明是主库，2表明是从库，即做备份的机器  
- stateStr: "ARBITER" // ARBITER表明 是仲裁服务器  

二、测试
打开cmd，进入主库，插入100条随机数据。

<img :src="$withBase('/assets/img/database/7.png')" alt="变更控制系统">

接着，进入到从库，查看数据，发现已经同步了。  

<img :src="$withBase('/assets/img/database/8.png')" alt="变更控制系统">
