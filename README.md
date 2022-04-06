# type-challenge-solutions
[Type-Challenge](https://github.com/type-challenges/type-challenges) 是一个训练类型编写的题库，通过它可以学习 TypeScript 类型编写技巧。

## docs

- [Literal Inference](./docs/literal-inference.md)
- [TypeScript infer介绍](./docs/infer.md)
- [Variadic Tuple Types](./docs/variadic-tuple-types.md)

## useful resources

- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Tail-Recursion Elimination on Conditional Type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types)

## articles

- [Extract parameter types from string literal types with TypeScript](https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/)

## Type-Challenge easy

Easy 题目列表:
- [Pick](./src/4-easy-pick.ts): 通过 `mapped-types` 可以将和类型转为对象类型
- [Readonly](./src/7-easy-readonly.ts): 通过 `mapped-types` 中的 Mapping Modifiers 
- [TupleToObject](./src/11-easy-tuple-to-object.ts)🌟: 通过 T[number] 将数组转为和类型，利用 `mapped-types` 获得对象类型
- [First](./src/14-easy-first.ts): 通过 `infer` 解构数组类型
- [LengthOfTuple](./src/18-easy-tuple-length.ts): 访问数组类型 T["length"]
- [Exclude](./src/43-easy-exclude.ts): `条件类型` 和 `分配条件类型`
- [Awaited](./src/189-easy-awaited.ts): `条件类型` 和 `infer`结构Promise 
- [If](./src/268-easy-if.ts): `条件类型`
- [Concat](./src/533-easy-concat.ts): 通过 `...` 展开数组类型
- [Includes](./src/898-easy-includes.ts): 利用 `infer` 解构数组，然后**严格比较**首个元素，或者`递归调用`类型
- [Push](./src/3057-easy-push.ts): 通过`...`展开数组
- [Unshift](./src/3060-easy-unshift.ts): 通过`...`展开数组
- [Parameters](./src/3312-easy-parameters.ts): 通过 `infer` 解构函数参数

## Type-Challenge medium

题目列表
- [ReturnType](./src/2-medium-return-type.ts): `infer`
- [Omit](./src/3-medium-omit.ts): `mapping-types`，`as` 过滤（可以用 Exclude 优化）
- [Readonly2](./src/8-medium-readonly-2.ts): 考下 `Readonly` ，`Pick`，`Omit`，`&`
- [DeepReadonly](./src/9-medium-deep-readonly.ts): `mapping-types`，`递归定义`（有个坑是很多类型是 Object 子类）
- [TupleToUnion](./src/10-medium-tuple-to-union.ts):  `T[number]` 取 tuple 中的类型
- chainalbe-options🌟: `option<T extends string>(str: T) => any`，能取到字符串类型
- Promise.all🌟🌟: 利用 `[...T]` 模式匹配 数组 ？？？，然后 `mapping-types` 循环数组
- Type Lookup: 当 `extend` 左边是 `union type` 的时候，会展开分别做判断，最后合起来
- [TrimLeft](./src/106-medium-trimleft.ts):  字符串也可以模式匹配，递归来循环
- [Capitalize](./src/110-medium-capitalize.ts):  `Uppercase` 和 字符串匹配
- [Replace](./src/116-medium-replace.ts):  字符串匹配
- [ReplaceAll](./src/119-medium-replaceall.ts):  字符串匹配 + 递归
- append argument: 函数匹配 
- Permutation🌟🌟🌟:  1 `union type` 在 `extends` 左侧会展开, 2 利用递归解子问题 （注意如何判断never）
- [LengthofString](./src/298-medium-length-of-string.ts):  字符串匹配 + tuple["length"] 
- [Flatten](./src/459-medium-flatten.ts):  数组匹配 + 递归
- Append to object: `|`合并
- [Absolute](./src/529-medium-absolute.ts):  字符串匹配
- [StringToUnion](./src/531-medium-string-to-union.ts):  字符串匹配 + 递归
- Merge: mapping types
- [CamelCase](./src/610-medium-camelcase.ts):  字符串匹配
- [Kebabcase](./src/612-medium-kebabcase.ts)🌟: `尾递归优化` , 字符串匹配
- [Diff](./src/645-medium-diff.ts):  Exclude, Pick
- [AnyOf](./src/949-medium-anyof.ts)🌟: 对于Falsy值判断，特别的一个是空数组 `{ [key: string]: never }` 
- [IsNever](./src/1042-medium-isnever.ts):  never是一个空的 union type
- IsUnion🌟: 对分配率的应用
- BEM: 分配率
- MapTypes: 在 union 中 find
- Percentage Parser: 字符串匹配
- [TupleToUnion](./src/10-medium-tuple-to-union.ts):  T[number]
- [DropChar](./src/2070-medium-drop-char.ts):  字符串匹配
- FlattenDepth: #recursion #array
- [GreaterThan](./src/4425-medium-greater-than.ts): #math
- [IndexOf](./src/5153-medium-indexof.ts)🌟: #array
- [Join](./src/5310-medium-join.ts): #array 强制转换字符串
- [LastIndexOf](./src/5317-medium-lastindexof.ts): #array
- [Trunc](./src/5140-medium-trunc.ts): #template-literal 


## Type-Challenge hard

题目列表
- Simple Vue🌟🌟: 自动类型推导，ThisArgs
- Vue basic props🌟🌟🌟: 自动类型推导，primitive constructor -> primitive 方法
- Pinia🌟: 同上
- [Currying](./src/17-hard-currying.ts)🌟:  函数匹配
- [UnionToIntersection](./src/55-hard-union-to-intersection.ts):  函数参数逆变
- [GetRequired](./src/57-hard-get-required.ts):  去掉属性如果还是子类，那么就是必选的
- [GetOptional](./src/59-hard-get-optional.ts):  同上
- [Split](./src/2822-hard-split.ts)🌟:  空字符切割的时候就是将所有字母分开
- [FilterOut](./src/399-hard-tuple-filter.ts):  tuple filter out
- [Get](./src/270-hard-typed-get.ts)🌟: #template-literal
