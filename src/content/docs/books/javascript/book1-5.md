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

#### 5.6 基本包装类型
先看以下例子，变量a属于基本数据类型，按照正常思维来说，它是没办法调用函数的，但是这里调用成功了，发生了什么呢？  
这是因为第二行对变量a的访问属于读取，读取的时候JS后台会对其进行一层包装使得变量a能够调用函数，具体的包装方法如下：
- new一个String类型的实例 `a = new String("hello hulutan")`
- 调用方法
- 销毁该实例
```javascript
const a = "hello hulutan";
const b = a.substring(2); // 截取"llo hulutan"子串
```
基本包装类型和通过new创造的实例区别在于，基本包装类型产生的实例只存在于代码执行的那一瞬间，代码执行完立马销毁。基本包装类型有Number、Boolean、String。
##### Boolean
```javascript
const bo = false;
const bo1 = Boolean(false);
const bo2 = new Boolean(false);

console.log(typeof bo); // 'boolean'
console.log(typeof bo1); // 'boolean'
console.log(typeof bo2); // 'object'

```

##### Number
**方法**
- toString num.toString()接收一个参数，表示按照几进制转换
- 格式化函数 toFixed、a.toExponential、toPrecision，以下例子以`num=1234`举例
  ||toFixed(a)|toExponential(a)|toPrecision(a,b)|
  |---|----|----|----|
  |意思|保留几位小数|转换为指数表示法，参数为保留几位小数|取合适的格式化，参数为输出结果的所有位数|
  |例子| num.toFixed(2)`"1234.00"`|num.toExponential(3)`1.234e+3`|num.toPrecision(3)`1.23e+3` num.toPrecision(4)`1234`|
 
##### String
**方法**
- indexOf
- lastIndexOf
- search 返回第一个匹配项的下标，否则返回-1
- match 同exec 返回值是一个数组
- replace 有个面试题，后续找到更新下
replace接收两个参数，第一个参数可以是一个字符串或者正则表达式，第二个参数可以是一个字符串或者函数
- substr、subtring、slice (数组的方法 slice和splice)
  这三个函数都是截取字符串的子串，都可以接收一个、两个参数，以下以字符串`hello world`做实例 
  
  |功能|substr(a,b)|substring(a,b)|slice(a,b)|
  |---|----|----|----|
  |意思|从位置a开始，截取长度为b的字符串|截取位置a到位置b的字符串|截取位置a到位置b的字符串|
  |一个参数|substr(3) `lo world`|substring(3)`lo world`|slice(3)`lo world`|
  |两个参数|substr(3,6) `lo wor`|substring(3,6)`lo `|slice(3,6)`lo `|
  |一个参数为0|substr(3,6) `""`|substring(3,0)`hel`，这个方法会自动调整位置，比如这里会将原式子转变为substring(0,3)|slice(3,0)`""`|
  |参数为负|第一个参数是负数时+字符串的长度， 第二个参数是负数时变为0，|所有负值都变为0|负数加字符串的长度|

- split 参数可以是字符串或者pattern
- concat 连接字符串
- trim 去掉字符串首尾的空格
- toLowerCase、toUpperCase、toLocaleLowerCase、toLocalUpperCase，在绝大多数情况下 加local和不加local返回的字符串都一样，但是使用local更加安全，因为我们不知道自己的代码要在哪里运行
#### 5.7 单体内置对象
Global和Math  
encodeURI、decodeURI  
encodeURIComponent、decodeURIComponent   
二者区别见下图   
![](http://puui.qpic.cn/media_img/lena/PIC9ucctr_153_586/0)

