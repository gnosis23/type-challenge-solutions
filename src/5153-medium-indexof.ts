/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #medium #array
  
  ### Question
  
  Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.
  
  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  ```
  
  > View on GitHub: https://tsch.js.org/5153
*/


/* _____________ Your Code Here _____________ */

type IndexOf<T, U, C extends any[] = []> = (
  T extends [infer A, ...infer Rest]
  ? A extends U
    ? C["length"]
    : IndexOf<Rest, U, [...C, never]>
  : -1
)

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5153/answer
  > View solutions: https://tsch.js.org/5153/solutions
  > More Challenges: https://tsch.js.org
*/
