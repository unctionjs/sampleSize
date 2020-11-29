import shuffle from "@unction/shuffle";
import takeFirst from "@unction/takefirst";

export default function sample<A> (size: number) {
  return function sampleSize (list: OrderedArray<A> | Set<A> | RecordType<unknown, A> | string): OrderedArray<A> | Set<A> | RecordType<unknown, A> | string {
    return takeFirst(size)(shuffle(list));
  };
}
