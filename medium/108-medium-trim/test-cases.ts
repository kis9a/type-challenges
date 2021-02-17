import { Equal, Expect } from '@type-challenges/utils'

type WhiteSpace = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer T}`
  ? TrimLeft<T>
  : S
type TrimRight<S extends string> = S extends `${infer T}${WhiteSpace}`
  ? TrimRight<T>
  : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
]
