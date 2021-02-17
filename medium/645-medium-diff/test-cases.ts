import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

// type Diff<O, O1> = any
type Diff<O, O1> = {
  [K in Exclude<keyof O1, keyof O>]: O1[K]
}

// [実務で使用することが多いTypeScriptの型まとめ - Qiita](https://qiita.com/r_ueyama/items/bb693fb012fd3605cd00)

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>]
