import { Equal, Expect } from '@type-challenges/utils'

type Whitespace = '\n' | ' ' | '\t'
type TrimLeft<S> = S extends `${Whitespace}${infer U}` ? TrimLeft<U> : S

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>
]
