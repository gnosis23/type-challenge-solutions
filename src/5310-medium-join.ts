/*
  5310 - Join
  -------
  by Pineapple (@Pineapple0919) #medium #array
  
  ### Question
  
  Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.
  
  ```ts
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
  ```
  
  > View on GitHub: https://tsch.js.org/5310
*/


/* _____________ Your Code Here _____________ */

type StringType = string | number | bigint | boolean;

type Join<T, U extends StringType, R extends string = '', First extends boolean = true> = (
  /* 怎么给A加上类型限制？ 使用 &string 强制转换 */
  T extends [infer A, ...infer Rest]
  ? First extends true
    ? Join<Rest, U, `${R}${A & string}`, false>
    : Join<Rest, U, `${R}${U}${A & string}`, false>
  : R
)


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["", "1", "2"], 1>, "1112">>,
  Expect<Equal<Join<["o"], "u">, "o">>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5310/answer
  > View solutions: https://tsch.js.org/5310/solutions
  > More Challenges: https://tsch.js.org
*/

