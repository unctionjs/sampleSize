/* eslint-disable no-magic-numbers */
import { equals } from "ramda";
import {or} from "ramda"

import sampleSize from "./index.ts"

test(() => {
  const value = sampleSize(2)(["a", "b"])

  expect(or(equals(["a", "b"], ["b", "a"]))(value)).toBeTruthy()
})

test(() => {
  const value = sampleSize(1)(["a", "b"])

  expect(or(equals(["a"], ["b"]))(value)).toBeTruthy()
})

test(() => {
  const value = sampleSize(2)("ab")

  expect(or(equals("ab", "ba"))(value)).toBeTruthy()
})

test(() => {
  const value = sampleSize(1)("ab")

  expect(or(equals("a", "b"))(value)).toBeTruthy()
})
