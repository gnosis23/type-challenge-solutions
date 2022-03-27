/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/


/* _____________ Your Code Here _____________ */

// type Diff<O, O1> = {
//   [Prop in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: 
//     Prop extends Exclude<keyof O1, keyof O>
//       ? O1[Prop]
//       : Prop extends Exclude<keyof O, keyof O1>
//         ? O[Prop]
//         : never
// }

type Diff<A, B, Temp = Pick<A, Exclude<keyof A, keyof B>> & Pick<B, Exclude<keyof B, keyof A>>> = {
  [Prop in keyof Temp]: Temp[Prop]
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar,Foo>, { gender: number }>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/

