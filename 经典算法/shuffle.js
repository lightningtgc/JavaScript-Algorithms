//inspired by http://www.cs.princeton.edu/~rs/
function shuffle(arr) {
  var len = arr.length, i;
  while (len) {
    i = Math.random() * len-- | 0; // 0 ≤ i < n
    arr[len] = [ arr[i], arr[i] = arr[len] ][0];
  }
  return arr;
}
