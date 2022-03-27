/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
  
  例如：
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/


/* _____________ 你的代码 _____________ */

// using number to get types in array

// typeof const字符串数组 可以获得 readonly字符串类型数组
// type A = readonly ["tesla", "model 3", ...]
type A = typeof tuple;

// 字符串数组[number] 可以获得 所有字符串和类型
// type X = 'tesla' | 'model 3' | ...
type X = (typeof tuple)[number]

// keyof 可以获得 key和类型
// type Y = 'a' | 'b'
type Y = keyof ({ a: number, b: string })

// 在对象中使用 [Prop in Types] 可以遍历 和类型
// type Z = { 'a': 'a', 'b': 'b' }
type Z = { [Prop in Y]: Prop }


type TupleToObject<T extends readonly (number | string | symbol)[]> = { 
  [Prop in T[number]]: Prop
}


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/11/answer/zh-CN
  > 查看解答：https://tsch.js.org/11/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

