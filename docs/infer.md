# TypeScript infer介绍
在条件类型的 `extends` 从句里，可以使用 `infer` 来声明一个类型变量。

通过 `infer` 可以获取到系统自动推导出的类型，比如下面这些地方：
- 提取对象类型中的属性类型
- 提取函数的参数类型、返回类型
- 数组类型提取
- 元组类型提取
- Class、interface中的范型值

## 提取对象属性类型

```ts
type ObjectInfer<O> = O extends { a: infer A } 
  ? A 
  : never
```

## 提取函数参数和返回类型

```ts
type FunctionInfer<F> = F extends (...args: infer A) => infer R 
  ? [A, R] 
  : never
```

## 数组类型提取

```ts
type ArrayInfer<T> = T extends (infer U)[]
  ? U
  : never
```

## 元组类型提取

```ts
type TupleInfer<T> =
  T extends [infer A, ...(infer B)[]]
  ? [A, B]
  : never
```

## 提取 class 或者 interface 中类型

```ts
type ClassInfer<I> = I extends Promise<infer G>
  ? G
  : never
```

## 提取原始值类型

```ts
type Primitive<T> = 
  | { new(...args: any[]): T & object }
  | { (): T }

type PrimitiveInfer<I> = I extends Primitive<infer A>
  ? A : never;

// get string
PrimitiveInfer<typeof String>
```

## 参考
- [Learn Advanced TypeScript Types](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab)
- [TypeScript 2.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html)
