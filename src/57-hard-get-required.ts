/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetRequired<T>`, which remains all the required fields
  
  For example
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > View on GitHub: https://tsch.js.org/57
*/


/* _____________ Your Code Here _____________ */

type GetRequired<T extends Record<string, any>> = {
  [Key in keyof T as Omit<T, Key> extends T ? never : Key ]: T[Key]
}

type t1 = { foo?: 1 } extends { foo?: 1 } ? true : false;
type t2 = { foo: 1 } extends { foo: 1 } ? true : false;
type t3 = { foo?: 1 } extends { foo: 1 } ? true : false;
type t4 = { foo: 1 } extends { foo?: 1 } ? true : false;

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectExtends } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
    Expect<ExpectExtends<{ foo?: 1 }, { foo: 1 }>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/57/answer
  > View solutions: https://tsch.js.org/57/solutions
  > More Challenges: https://tsch.js.org
*/

