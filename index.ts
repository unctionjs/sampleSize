import shuffle from "@unction/shuffle";
import takeFirst from "@unction/takefirst";
import {OrderedEnumerableType} from "./types";

export default function sample<A> (size: number) {
  return function sampleSize (list: OrderedEnumerableType<A>): OrderedEnumerableType<A> {
    return takeFirst(size)(shuffle(list));
  };
}
