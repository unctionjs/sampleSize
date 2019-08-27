import shuffle from "@unction/shuffle";
import takeFirst from "@unction/takefirst";
export default function sample(size) {
  return function sampleSize(list) {
    return takeFirst(size)(shuffle(list));
  };
}
