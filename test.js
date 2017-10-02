/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"


import sampleSize from "./index"

test(({includes, end}) => {
  const value = sampleSize(2)(["a", "b"])

  includes(
    value,
    ["a"]
  )

  includes(
    value,
    ["b"]
  )

  end()
})

test(({includes, end}) => {
  const value = sampleSize(2)("ab")

  includes(
    value,
    "a"
  )

  includes(
    value,
    "b"
  )

  end()
})
