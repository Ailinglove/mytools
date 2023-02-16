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

#### 5.3 Date类型
Date构造函数是基于Java的util.Date实现的，采用的UTC即1970年1月1日午夜开始经过的毫秒数来保存日期。这就要求传给Date的参数必须是毫秒数。Date有两个函数可以方便的将语义化的数据转换为毫秒数Date.parse()和Date.UTC()。

Date.parse()传入的是一个字符串，但字符串的形式因各浏览器的实现的不同而有不同。
```javascript
Date.parse('02/16/2023'); // 1676476800000
```

Date.UTC()传入的是多个参数，第一个是年，第二个是月(0-11), 日(1-31)，时，分，秒
```javascript
Date.UTC(2023,2,17); // 1679011200000
```

UTC和parse的区别是UTC的日期和时间都是基于本地时区而非GMT。

#### 5.4 RegExp类型
RegExp构造函数用来进行正则计算  
`/pattern/flags`，其中pattern是正则表达式，flags有三种
- i(ignore)，忽略大小写
- g(global)，全局匹配
- m(mutiline)，多行匹配

**方法**
- exec，`pattern.exec("")` 这是正则表达式常用的方法，返回第一个匹配到的数据，值是一个数组，第一项是匹配的整个句子，第二项开始则是每个组匹配到的数据。当flags为g是，它依旧是只返回一个匹配的数据，只是多次调用exec是会继续从上次匹配到的地方往后继续查找。
  ![alt 没global](http://puui.qpic.cn/media_img/lena/PICj4wag0_155_725/0)
  ![alt 有global](http://puui.qpic.cn/media_img/lena/PIC8wzh6j_162_696/0)

- test，`pattern.test("")`返回值是true或false，若不需要知道具体的匹配值，则用它

#### 5.5 Function类型
定义Function的两种方法，函数表达式定义 `const sum = () => {};`，函数声明式定义 `function sum {};`，解析器在解析这两种方式定义的函数时，会优先加载声明式函数，保证其在任何代码前都可用，而表达式函数则只有运行到赋值的那一行之后才可以访问。
```javascript
alert(sum(1,2)); // 正常访问
function sum(a, b) {
  return a+b
}
```

```javascript
alert(sum(1,2)); //  报错
const sum=(a, b)=> {
  return a+b
}
```

**函数内部的属性**  
- arguments: 这是一个类数组，接收函数的参数
- this: this的指向由其调用方决定。

**改变this的方法**
- call call(obj, a, b)
- apply apply(obj, [a,b])
- bind 这是ES5新增的方法 返回值是一个this绑定了新对象的方法

length表示函数希望接收的命名参数的个数
#### 小结