# Week 04

## 字典树

* for in 遍历对象会忽略 key 为 Symbol 的，JSON.stringify 也会忽略；getOwnPropertySymbols 获取 key 为 Symbol 的。

* 迭代效率不一定就高，push 和 shift 组成的队列耗时高。 [shift耗时](https://stackoverflow.com/questions/27341352/why-does-a-a-nodejs-array-shift-push-loop-run-1000x-slower-above-array-length-87)
* Trie 树最有优势的是查找前缀匹配的字符串，比如搜索引擎中的关键词提示功能这个场景。

## KMP

* KMP 算法的时间复杂度是 O(n+m)，return true 的地方改成 return i-j 即可实现 indexOf 功能。
  
## Wildcard

* 处理 * 化繁为简，先计算个数，之后处理第一个 * 出现前的前半部，再处理前 n-1 个 *，最后处理最后一个 * 和末尾。
