/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {equals} from "ramda"
import {or} from "ramda"

import sampleSize from "./index"

test(({ok, end}) => {
  const value = sampleSize(2)(["a", "b"])

  ok(or(equals(["a", "b"], ["b", "a"]))(value))

  end()
})

test(({ok, end}) => {
  const value = sampleSize(1)(["a", "b"])

  ok(or(equals(["a"], ["b"]))(value))

  end()
})

test(({ok, end}) => {
  const value = sampleSize(2)("ab")

  ok(or(equals("ab", "ba"))(value))

  end()
})

test(({ok, end}) => {
  const value = sampleSize(1)("ab")

  ok(or(equals("a", "b"))(value))

  end()
})
