import shuffle from "@unction/shuffle"
import takeFirst from "@unction/takefirst"
import type {OrderedFunctorType} from "types"
import type {NumberType} from "types"
import type {UnaryFunctionType} from "types"

export default function sample (size: NumberType): UnaryFunctionType {
  return function sampleSize (list: OrderedFunctorType): OrderedFunctorType {
    return takeFirst(size)(shuffle(list))
  }
}
