# Week 11

## CSS 选择器

![简单选择器](./simple.png)

* 简单选择器
  * \*
  * div svg|a
  * .cls
  * #id
  * [attr=value]
  * :hover
  * ::before
* 复合选择器
  * <简单选择器><简单选择器><简单选择器>
  * \* 或者 div 必须写在最前面
* 复杂选择器
  * <复合选择器><sp\><复合选择器>
  * <复合选择器>">"<复合选择器>
  * <复合选择器>"~"<复合选择器>
  * <复合选择器>"+"<复合选择器>
  * <复合选择器>"||"<复合选择器>

## CSS优先级

* 内联样式，如: style=””，权值为1000。
* ID选择器，如：#content，权值为0100。
* 类，伪类和属性选择器，如.content，权值为0010。
* 标签选择器和伪元素选择器，如div p，权值为0001。
* 通用选择器（*），子选择器（>），相邻同胞选择器（+），权值为0000

## 问答题

* 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢

first-letter 一开始就可以确定，而 first-line 得等到布局(layout)完成即计算出每个节点的位置之后才能确定，而确定之后又可以给 first-line 设置的 float 等会引起重排的属性的话又会进入新一轮的 layout 计算，而计算之后 first-line 又可能会有变化，陷入死循环。
