---
title: "HTML中的JavaScript"
description: ""
---
#### 如何使用

JS出来之后，需要解决的问题就是如何在HTML中嵌入JS，经过一帆研究后，创造出了script标签。

#### 使用方法
具体使用方法有两种
1. 通过src嵌入
```javascript
<script src="你的JS链接jshttp"></script>
```
这里有个特点，jshttp可以是同域名也可以是外部域名，没有跨域问题.因此有了一种解决跨域的方法JSON，原理就是通过script标签不跨域实现的

2. 直接写在script中间

```javascript
<script>
  你的js代码
</script>
```

html文档的解析渲染是自上而下的，因此我们习惯上要把script写在html文件body标签的最下边，这样不阻碍html文档的加载解析渲染。除了把script放在最下边，这里还提供了两种不会阻碍文档加载的方式，即通过script的async和defer属性实现
- async 
   立即下载，下载完立即执行，但不会阻塞html的其他工作。多个script标签执行顺序不保证
- defer
   立即下载延迟执行，下载完成后等待html加载完成在执行。多个script标签执行顺序按引入顺序执行
