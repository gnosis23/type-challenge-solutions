# type-challenge-solutions
[Type-Challenge](https://github.com/type-challenges/type-challenges) 是一个训练类型编写的题库，通过它可以学习 TypeScript 类型编写技巧。

## docs

- [TypeScript infer介绍](./docs/infer.md)

## Type-Challenge easy

Easy 题目列表:
- `Pick`：通过 `mapped-types` 可以将和类型转为对象类型
- `Readonly`：通过 `mapped-types` 中的 Mapping Modifiers 
- `TupleToObject`：通过 T[number] 将数组转为和类型，利用 `mapped-types` 获得对象类型
- `First`：通过 `infer` 解构数组类型
- `LengthOfTuple`：访问数组类型 T["length"]
- `Exclude`：`条件类型` 和 `分配条件类型`
- `Awaited`：`条件类型` 和 `infer`结构Promise 
- `If`：`条件类型`
- `Concat`：通过 `...` 展开数组类型
- `Includes`：利用 `infer` 解构数组，然后**严格比较**首个元素，或者`递归调用`类型
- `Push`：通过`...`展开数组
- `Unshift`：通过`...`展开数组
- `Parameters`：通过 `infer` 解构函数参数

## Type-Challenge medium

题目列表
- `ReturnType`：`infer`
- `Omit`：`mapping-types`，`as` 过滤（可以用 Exclude 优化）
- `Readonly2`：考下 `Readonly` ，`Pick`，`Omit`，`&`
- `DeepReadonly`：`mapping-types`，`递归定义`（有个坑是很多类型是 Object 子类）
- `TupleToUnion`: `T[number]` 取 tuple 中的类型
- chainalbe-options🌟: `option<T extends string>(str: T) => any`，能取到字符串类型
- Promise.all🌟🌟: 利用 `[...T]` 模式匹配 数组 ？？？，然后 `mapping-types` 循环数组
- Type Lookup: 当 `extend` 左边是 `union type` 的时候，会展开分别做判断，最后合起来
- `TrimLeft`: 字符串也可以模式匹配，递归来循环
- `Capitalize`: `Uppercase` 和 字符串匹配
- `Replace`: 字符串匹配
- `ReplaceAll`: 字符串匹配 + 递归
- append argument: 函数匹配 
- Permutation🌟🌟🌟:  1 `union type` 在 `extends` 左侧会展开, 2 利用递归解子问题 （注意如何判断never）
- `LengthofString`: 字符串匹配 + tuple["length"] 
- `Flatten`: 数组匹配 + 递归
- Append to object: `|`合并
- `Absolute`: 字符串匹配
- `StringToUnion`: 字符串匹配 + 递归
- Merge: mapping types
- `CamelCase`: 字符串匹配
- `Kebabcase`🌟: `尾递归优化` , 字符串匹配
- `Diff`: Exclude, Pick
- `AnyOf`🌟: 对于Falsy值判断，特别的一个是空数组 `{ [key: string]: never }` 
- `IsNever`: never是一个空的 union type
- `IsUnion`🌟: 对分配率的应用
- BEM: 分配率
- MapTypes: 在 union 中 find

## Type-Challenge hard

题目列表
- Simple Vue🌟🌟: 自动类型推导，ThisArgs
- Vue basic props🌟🌟🌟: 自动类型推导，primitive constructor -> primitive 方法






