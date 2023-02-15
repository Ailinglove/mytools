---
title: "引用类型"
description: ""
---

#### 5.1 Object类型
Object类型是一组属性和方法的集合。
- toString方法
- toLocalString方法
- valueOf

数组调用toString方法，返回里边每一项调用toString，然后用逗号拼接起来.调用valueOf返回数组本身。
```javascript
const a = [1, 2, 3];

a.toString(); // '1,2,3'
a.valueOf(); // [1,2,3]

alert(a.valueOf()); // '1,2,3' alert只接受字符串
```

#### 5.2 Array类型
```javascript
const a = [1,2,3];
a[5] = 12; // [1,2,3 ,empty, empty, 12]

a.length = 2; // [1, 2]
```
##### 检测数组
`instanceof`可以检测变量是不是数组，通过`arr instanceof Array`判断，但instanceof判断的前提是只有一个作用域，如果页面嵌套多个框架，从别的框架里传入当前框架一个数组，此时通过instanceof判断则不成立。为了解决这个问题诞生了Array.isArray()。
##### 栈方法
- push 推入数组尾部
- pop 弹出最后一位
- shift 弹出第一位
- unshift 头部推入
##### 排序方法
- sort
- reverse
##### 操作方法
- map
- any
- filter
- every
- some
- reduce
  
##### 位置方法
- splice splice(开始位置, 删除几个元素, ...新增)
- slice slice(2,5) [)

#### 小结