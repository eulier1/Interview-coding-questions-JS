// EPAM Challenge - 08/29/2024

// The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S.
// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, 
// your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

function findPairs(arr, targetSum) {
    const result = [];
    const numSet = new Set();
  
    for (let num of arr) {
      const complement = targetSum - num;
      
      if (numSet.has(complement)) {
        result.push([num, complement]);
      }
      
      numSet.add(num);
    }
  
    return result;
  }
  
  // Example usage:
  const array = [3, 5, 2, -4, 8, 11];
  const sum = 7;
  console.log(findPairs(array, sum));