---
title: "什么是JavaScript"
description: ""
---
#### 1.1 Javascript诞生的背景

在拨号上网的时代，浏览器没有处理网页的功能，所有的逻辑都是服务端进行处理的，这是一个考验人们的耐心的时代，比如，我这里有一个表单需要提交到服务端，用户填完表单后提交到服务端，30s后，服务端返回哪个字段没填。这在现在看来是一个不可思议的事情...，在这种背景下网景公司研发了JavaScrit语言。

最开始JavaScrit是叫LiveScrit，有用当时的Java火的一塌糊涂，为了蹭热度，LiveScript改名为JavaScript，所以Java和JavaScript是两个完全不同的东西。

#### 1.2 JavaScrit是什么？
问：JavaScript和ECMAScript一样吗？  
答：ECMAScript和JavaScript实际上不是一个东西，JavaScript要比ECMAScript大得多。 如下图所示，Javascript包含ECMAScript、DOM、BOM三部分。
![alt javascript组成](http://puui.qpic.cn/media_img/lena/PICchf6xp_472_916/0)
1. ECMAScript定义了JS(后续都以JS简写代替JavaScript)的基础, ~~比如语句、标识符、对象、数据等~~如下几部分：
+ 语法
+ 类型
+ 语句
+ 关键字
+ 保留字
+ 操作符
+ 对象
1. DOM（<font color='red'>文档对象模型 Document Object Model</font>）是定义了对网页的操作，开发人员可以很轻松的删除、添加、替换或修改任何节点，比如页面标准、颜色、事件等 ，DOM一共分为DOM1、DOM2、DOM3，没有DOM0。 
2. BOM（<font color='red'>浏览器对象模型 Browser Object Model</font>）能够控制浏览器显示页面以外的部分，~~比如cookie、浏览器缩放、navigation等~~
+ 弹窗新浏览器窗口
+ 移动缩放和关闭浏览器窗口的功能
+ 提供浏览器详细信息的navigator对象
+ 加载页面信息的location对象
+ 提供显示器分辨率的screen对象
+ cookie的支持
+ 自定义对象XMLHttpResponse和ActiveXObject


#### 1.3 小结
JS是一种专门为网页交互而设计的脚本语言，由三部分组成
+ ECMAScript，由ECMAScript-262定义，规定了JS的核心语言功能
+ DOM，提供访问和操作页面内容的方法和接口
+ BOM，提供与浏览器交互的方法和接口