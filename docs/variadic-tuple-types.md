# Variadic Tuple Types

可变数量元组类型, 它和数组类型的区别是：前者数组里的类型可以是不同的，而后者必须相同

比如下面例子中的 arr 参数，他的参数个数是未知的
```ts
function tail<T extends any[]>(arr: readonly [any, ...T]) {
  const [_ignored, ...rest] = arr;
  return rest;
}

const myTuple = [1, 2, 3, 4] as const;

// const r1 = [2, 3, 4]
const r1 = tail(myTuple);
```

## removeNumber函数

```ts
type RemoveNumber<T> = T extends [...infer A]
  ? { [Prop in keyof A]: A[Prop] extends number ? null : A[Prop]  }
  : null;

function removeNumber<T extends any[]>(arr: [...T]): RemoveNumber<T> {
  return arr.filter((x: any) => typeof x !== 'number') as RemoveNumber<T>;
}

// T 的类型是 [string, number, boolean]
// ret 的类型是 [string, null, boolean]
const ret = removeNumber([`Banana1`, 1, false]);

## Promise.all

```ts
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ 
  [Prop in keyof T]: T[Prop] extends Promise<infer P> ? P : T[Prop] 
}>
```


## Reference
- [TypeScript 4.0](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)

