function solve(arr, num) {
  let sum = arr[0];
  let start = 0;
  let end = 0;
  const arrSize = arr.length;

  while (start < arrSize && end < arrSize) {
    if (sum === num) {
      return arr.slice(start, end + 1);
    } else if (sum < num) {
      end++;
      sum += arr[end];
    } else {
      sum -= arr[start];
      start++;
    }
  }

  return null;
}
