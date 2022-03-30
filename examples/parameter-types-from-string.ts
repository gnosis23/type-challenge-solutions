/*
  实现 get 函数
  -------
  
  ### 题目
  
  从 url 中推导出 params 的类型
  
  例如：
  
  ```ts
  get('/purchase/[shopid]/[itemid]/args/[...args]', (req) => {
    const { params } = req;
  });
  type t = {
    shipid: number;
    itemid: number;
    args: string[];
  }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3/zh-CN
*/

/* _____________ 你的代码 _____________ */
declare function get<T extends string>(
  url: T,
  callback: (req: { params: ToRest<Params<T>> }) => void
): void

type Params<T extends string, Ret = never> = (
  T extends `${infer A}[${infer B}]${infer C}`
    ? Params<C, Ret | B>
    : Ret
)

type ToRest<T extends string> = {
  [Prop in T as Prop extends `...${infer S}` ? S : Prop]: Prop extends `...${infer A}` ? string[] : number
}


type t1 = ToRest<Params<'/purchase/[shopid]/[itemid]/args/[...args]'>>


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

get('/purchase/[shopid]/[itemid]/args/[...args]', (req) => {
  const { params } = req;

  type Expect1 = {
    shopid: number;
    itemid: number;
    args: string[];
  };
  type cases = [
    typeof params,
    Expect<Equal<typeof params, Expect1>>,
  ];
});

get('/docs/[chapter]/[section]', (req) => {
  const { params } = req;

  type Expect1 = {
    chapter: number;
    section: number;
  };
  type cases = [
    typeof params,
    Expect<Equal<typeof params, Expect1>>,
  ];
});
