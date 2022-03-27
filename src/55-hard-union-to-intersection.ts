/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `UnionToIntersection<U>`
  
  For example
  
  ```ts
  type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```
  
  > View on GitHub: https://tsch.js.org/55
*/


/* _____________ Your Code Here _____________ */

// 利用了函数参数是逆变的性质
// 现实中的例子：
// https://github.com/twitterdev/twitter-api-typescript-sdk/blob/3332ec7ddea511c8cc30b59258fc3e676e6f32bb/src/types.ts#L36
type UnionToIntersection<U> = 
  (U extends any ? (a: U) => void : never) extends ((a: infer A) => void)
    ? A
    : never 


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
    Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/55/answer
  > View solutions: https://tsch.js.org/55/solutions
  > More Challenges: https://tsch.js.org
*/

