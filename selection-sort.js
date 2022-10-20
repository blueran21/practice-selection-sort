

function selectionSort(arr) {
  // Copy the original array
  let copiedArr = [];
  arr.forEach( el => {
    copiedArr.push(el);
  })
  // Create an array to store the sorted values
  let newArr = [];
  // While the array is not empty...
  while (copiedArr.length !== 0) {
    // Do not move this console.log
    console.log(newArr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minVal = copiedArr.reduce((pre, cur) => {
      if (cur < pre) {
        return cur;
      } else {
        return pre;
      }
    }, inintial = Infinity);

    let index = copiedArr.indexOf(minVal);
    [copiedArr[index], copiedArr[copiedArr.length - 1]] = [copiedArr[copiedArr.length - 1], copiedArr[index]];
    // Save and remove the value at the min index
    let value = copiedArr.pop();
    // Add the min value to the end of the sorted array
    newArr.push(value);
  }

  return newArr;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let l = 0;
  // Repeat while the unsorted half is not empty:
  while (l < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minVal = Infinity;
    let minIndex = -1;
    for (let r = l; r < arr.length; r += 1) {
      if (arr[r] < minVal) {
        minIndex = r;
        minVal = arr[r];
      }
    }
    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i > l; i -= 1) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[l] = minVal;
    // Increment the divider and repeat
    l += 1;
  }
}


module.exports = [selectionSort, selectionSortInPlace];


// let test = [3, 5, 3, 1, 2];
// console.log(selectionSort(test));
