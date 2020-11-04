# Week 05

## Proxy

1. 概念
    * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
    * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”
2. 语法

   ```js
   var proxy = new Proxy(target, handler);
   ```

   Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

3. 支持拦截操作
    * get(target, propKey, receiver)  
        拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    * set(target, propKey, value, receiver)  
        拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    * has(target, propKey)  
        拦截propKey in proxy的操作，返回一个布尔值。
    * deleteProperty(target, propKey)  
        拦截delete proxy[propKey]的操作，返回一个布尔值。
    * ownKeys(target)  
        拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    * getOwnPropertyDescriptor(target, propKey)  
        拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    * defineProperty(target, propKey, propDesc)  
        拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    * preventExtensions(target)  
        拦截Object.preventExtensions(proxy)，返回一个布尔值。
    * getPrototypeOf(target)  
        拦截Object.getPrototypeOf(proxy)，返回一个对象。
    * isExtensible(target)  
        拦截Object.isExtensible(proxy)，返回一个布尔值。
    * setPrototypeOf(target, proto)  
        拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    * apply(target, object, args)  
        拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    * construct(target, args)  
        拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

## 简易 vue3.0 reactive

1. 原理

   使用 es6 Proxy 对 Object 进行拦截，拦截 get 和 set 操作。set 的时候触发属性绑定的回调函数，get 的时候记录读取的属性。另外使用一个函数处理属性与回调函数的绑定关系。

2. 具体实现

   * 全局变量 callbacks 用于保存引用到属性的与其对应 callback；全局变量 usedReactivties 主要用于记录有 callback 使用到的对象的属性；reactivties 缓存 reactive 函数返回的 reactive proxy 对象。

   * effect 函数传入一个 callback，首先执行一次 callback 获知使用到了哪些属性，将对应的属性与 callback 绑定，以供 set 属性的时候执行相应的callback。  

   * reactive 函数传入一个对象，使用 proxy 对对象的 get 和 set 进行拦截。get 拦截将使用到的属性记录下来；set 拦截判断属性是否有 callback 调用，有则执行对应 callback 。  

   * [详见代码](./reactivity.html)

## Range

   表示一个包含节点与文本节点的一部分的文档片段。详细参考[理解HTML5中Range对象](https://www.cnblogs.com/tugenhua0707/p/7395966.html)和[MDN Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)

## 拖拽实现
