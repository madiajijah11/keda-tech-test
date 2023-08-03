const assert = require("assert");
const { describe, it } = require("node:test");

// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

const arr1 = [1, 2, 4, 3, 5, 3, 2, 1];

const sortNumber = (arr) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortNumber(arr1));

describe("sortNumber", () => {
  it("should return an array sorted in descending order", () => {
    const expected = [5, 4, 3, 3, 2, 2, 1, 1];
    const result = sortNumber(arr1);
    assert.deepStrictEqual(result, expected);
  });
});

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

const arr2 = [100, 200, 300, 400];
const arr3 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const arr4 = [-3, 4, 0, -2, 6, -1];

const maxSubArray = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArray(arr2, 2));
console.log(maxSubArray(arr3, 4));
console.log(maxSubArray(arr4, 2));

describe("maxSubArray", () => {
  it("should return the maximum sum of subarray", () => {
    const num = 2;
    const expected = 700;
    const result = maxSubArray(arr2, num);
    assert.strictEqual(result, expected);
  });

  it("should return the maximum sum of subarray", () => {
    const num = 4;
    const expected = 39;
    const result = maxSubArray(arr3, num);
    assert.strictEqual(result, expected);
  });

  it("should return the maximum sum of subarray when given an array with negative numbers", () => {
    const num = 2;
    const expected = 5;
    const result = maxSubArray(arr4, num);
    assert.strictEqual(result, expected);
  });
});

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

describe("nestedEvenSum", () => {
  it("should return the sum of all even numbers in the nested object", () => {
    const expected = 6;
    const result = nestedEvenSum(obj1);
    assert.strictEqual(result, expected);
  });

  it("should return the sum of all even numbers in the nested object", () => {
    const expected = 12;
    const result = nestedEvenSum(obj2);
    assert.strictEqual(result, expected);
  });
});
