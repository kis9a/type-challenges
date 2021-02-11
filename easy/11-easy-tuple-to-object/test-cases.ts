import { Equal, Expect } from '@type-challenges/utils'
type TupleToObject<T extends readonly string[]> = { [P in T[number]]: P }

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
  Equal<
  TupleToObject<typeof tuple>,
  {
    tesla: 'tesla'
    'model 3': 'model 3'
    'model X': 'model X'
    'model Y': 'model Y'
  }
  >
  >
]

// In TypeScript 3.4, which should be released in March 2019 it will be possible to tell the compiler to infer the type of a tuple of literals as a tuple of literals, instead of as, say, string[], by using the as const syntax. This type of assertion causes the compiler to infer the narrowest type possible for a value, including making everything readonly. It should look like this:

const list = ['a', 'b', 'c'] as const // TS3.4 syntax
type NeededUnionType = typeof list[number] // 'a'|'b'|'c';
