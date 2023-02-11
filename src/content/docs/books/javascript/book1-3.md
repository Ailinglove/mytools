---
title: "JS的基本概念"
description: ""
---
本章描述的是JS的基础，核心概念。

#### 3.1 语法
- 区分大小写
- 注释 单行注释采用 `//` 多行注释是 `/** */`
- 严格模式 `use strict`
- 标志符

#### 3.2 关键字和保留字
- 关键字 有特定用途
- 保留字 暂时没特定用途，但未来可能会用到
#### 3.3 变量
JS变量的定义可以同时定义多个，以逗号分隔符分割。 以前定义变量的时候总是一行定义一个变量。
```javascript
const name="sunlliu", age=12, year=2014;
```
#### 3.4 数据类型
JS的数据类型分为基础数据类型和复杂数据类型。基础数据类型包括Number、Undefined、Null、String、Boolean。复杂数据类型包括Object。
##### 3.4.1 typeof 操作符
ESMAScript是松散的，因此需要有一种手段来检测当前变量的数据类型，typeof操作符即可检测操作符，用法`typeof varName`，返回值是数据类型的小写，number、object、string、boolean等。
```javascript 
  typeof null // 'object'
```

##### 3.4.2 Undefined
undefined是JS里只有一个值的数据类型，通常不会被显示的声明为undefined `var hulu = undefined; `, 一般情况，声明没被赋值的变量默认就是一个undefined，或者压根没有被声明的变量在用typeof检测的时候也是undefined。
```javascript
var hulu;
// var hulu2;

console.log(typeof hulu); // undefined
console.log(typeof hulu2); // undefined
```
但是即便这样，已声明未赋值和未声明的变量也还是不一样的
```javascript
var hulu;
// var hulu2;

console.log(hulu); // undefined
console.log(hulu2); // 报错了ReferenceError: hulu2 is not defined
```
##### 3.4.2 Null
Null是JS里第二个只有一个值的数据类型，和undefined不同的是，如果一个变量未来需要被赋值为对象的话，则需要将变量显示的声明为null。从逻辑来看，null指向某个空对象指针，这也就解释了为啥`typeof null`的时候返回值是一个`object`。
##### 3.4.2 Boolean
Boolean值有两个true和false，这个值是区分大小写的 True和False不是boolean值，是标志符。Boolean()的输入值可以是任何值，都会将其转为true和false。Boolean转化规则见下表

  |值类型|true|false|
  |---|----|----|
  |Number|任何非0数值、Infinity|0和NaN|
  |String|任何非空字符串|""|
  |Null|-|null|
  |Undefined|-|undefined|
  |Object|任何对象|-|
##### 3.4.3 Number
Number包含整型、浮点型、NaN。  
**整型数值**
能够存储的最大值和最小值分别可用`Number.MAX_VALUE`和`Number.MIN_VALUE`获取。Number可以将其他类型的数据转换为整型，转换规则如下
- undefined NaN
- null 0
- 被转换的为字符串时，一旦字符串是非有效的数值字符串，则返回NaN
- object时，调用valueOf，然后依据上述进行转换

将其他类型转换为数值的方法还有一个parseInt，与Number的区别是，它会从第一个非0数字开始解析，否则返回NaN，下表是二者在一些数据上的区别

|被转换的数据|Number转换|parseInt转换|+操作符|
|---|---|---|---|
|null|0|NaN|-|
|undefined|NaN|NaN|-|
|""|0|NaN|-|
|"070"|70|56(ES3),70(ES5)|-|
|"xsdc70xxx"|NaN|70|-|
|"23.45"|23.45|NaN|-|


<mark style="background-color: #FFCC00">
注意：在解析二进制、八进制时两者的主要区别是 Number不会区分，会直接按照十进制进行转换，而parseInt则不同。ES3时会自动识别不同的进制，ES5以后也不区分，而是需要传递给parseInt(num, 8)第二个参数，告诉函数按照几进制进行转换。 
</mark>

**浮点型数值**  
- 因为存储浮点型数据需要的存储空间是存储整型数据的2倍，所以ES会将某些小数点后为0的浮点型存储为整型。
  ```javascript
  a=1.0 // 1
  a=1.  //1
  ```

- 浮点型数据计算不精确
  ```javascript
    0.1 + 0.2 === 0.3 // false
    // 实际上 
    console.log(0.1 + 0.2) // 0.30000000000000004
  ```

**NaN**
NaN表示非数值，当计算出错的时候会出现NaN，NaN不参与任何计算  `typeof NaN 是number`
判断一个变量是不是NaN的两种方法
- isNaN(varName)
- varName !== varName (NaN自己也不等于自己)

##### 3.4.4 String
 ES规定string类型一经创建则不允许改变，只能通过重新赋值来改变。
 ```javascript
 var str = 'hulutang';
 str[0] = 'H';
 str // 'hulutang, 没有被改变'；

 str = 'Hello Hulutang' ; 
 str; // 'Hulutang 被改变了'
 ```

##### 3.4.6 Object
Object就是一组功能和数据的集合，Object的每个实例都有以下属性
- constructor 指向创建自己的函数 
  ```javascript
  var str = 'hulutang';
  str.constructor // ƒ String() { [native code] }
  ```
- hasOwnProperty 代表是否有自己的属性，不包含原型上的属性
```javascript
  var str = {};
  str.hasOwnProperty('toString'); // false
  str.toString = () => '';
  str.hasOwnProperty('toString'); // true
  ```

#### 3.5 操作符
##### 3.5.1 自增自减操作符
和C语言的自增自减操作符一样，分为前置和后置各两种
```javascript
var i = 1;
++i + 1; // 3

i = 1;
1 + i++; // 2

//  这两个执行完后i都等于2
```
##### 3.5.2 一元加、减号操作符
加号操作符是将其他类型的数据转换为数值，转换遵循的规则同Number，减号和其作用相同，只不管是转为和+号符号相反的数据

##### 3.5.3 相等操作符
分为 `相等==`和`全等===`，相等不相等需要先转换在比较，全等不全等直接比较
##### 3.5.3 逗号操作符
常用语定义变量
```javascript
var a=10, b=12, c=13;
var d = (1,2,3,4) // d=4, 只取最后一个
```
#### 3.6 语句
有if语句、while语句、do-while语句、for语句、for-in语句、break、continue、width、switch语句。
for语句其实也就是do-while语句，只有当条件表达式为真时才执行
```javascript
  for(;;;){ // 这个语句会使代码选入无限循环中
    ...   
  }
```
for-in语句在遍历对象时，输出的属性名的顺序是不可预测的，会因为浏览器的不同而不同

#### 3.7 函数
- 函数的形参和实参可以不用像其他语言那样一一对应，因为JS的参数是以数组的形式存储的，可以通过arguments获取到
- 当没有返回值时函数的返回值时undefined