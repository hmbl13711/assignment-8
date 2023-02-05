// 1. Write a ts program to read and print elements of array.
// let arr: number[] = [];

// // Reading elements of the array
// for (let i = 0; i < 5; i++) {
//   arr[i] = parseInt(prompt("Enter the element:"));
// }

// // Printing elements of the array
// console.log("Elements of the array are:");
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2. Write a ts program to print all negative elements in an array.
// let arr: number[] = [1, -2, 3, -4, 5];

// // Printing negative elements of the array
// console.log("Negative elements of the array are:");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//   }
// }

// 3. Write a ts program to find sum of all array elements. 
// let arr: number[] = [1, 2, 3, 4, 5];
// let sum = 0;

// // Calculating the sum of all elements in the array
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// // Printing the sum of all elements in the array
// console.log("Sum of all elements in the array is: " + sum);

// 4. Write a ts program to find maximum and minimum element in an array.
// let arr: number[] = [1, 2, 3, 4, 5];
// let max = arr[0];
// let min = arr[0];

// // Finding the maximum and minimum element in the array
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// // Printing the maximum and minimum element in the array
// console.log("Maximum element in the array is: " + max);
// console.log("Minimum element in the array is: " + min);


// // 5. Write a ts program to find second largest element in an array.
// let arr: number[] = [1, 2, 3, 4, 5];
// let firstLargest = arr[0];
// let secondLargest = arr[0];

// // Finding the first and second largest elements in the array
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > firstLargest) {
//     secondLargest = firstLargest;
//     firstLargest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//     secondLargest = arr[i];
//   }
// }

// // Printing the second largest element in the array
// console.log("Second largest element in the array is: " + secondLargest);

// 6. Write a ts program to count total number of even and odd elements in an array.
// let arr: number[] = [1, 2, 3, 4, 5];
// let evenCount = 0;
// let oddCount = 0;

// // Counting even and odd elements in the array
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// // Printing the count of even and odd elements in the array
// console.log("Number of even elements in the array: " + evenCount);
// console.log("Number of odd elements in the array: " + oddCount);

// 7. Write a ts program to count total number of negative elements in an array.
// let arr: number[] = [-1, 2, -3, 4, -5];
// let negativeCount = 0;

// // Counting negative elements in the array
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     negativeCount++;
//   }
// }

// // Printing the count of negative elements in the array
// console.log("Number of negative elements in the array: " + negativeCount);

// 8. Write a ts program to copy all elements from an array to another array.
// let arr1: number[] = [1, 2, 3, 4, 5];
// let arr2 = [];

// // Copying all elements from arr1 to arr2
// for (let i = 0; i < arr1.length; i++) {
//   arr2[i] = arr1[i];
// }

// // Printing the elements of arr2
// console.log("Elements of the second array are: " + arr2);

// 9. Write a ts program to insert an element in an array.
// let arr: number[] = [1, 2, 3, 4, 5];
// let element = 6;
// let position = 3;

// // Inserting an element in the array
// for (let i = arr.length; i >= position; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[position - 1] = element;

// // Printing the elements of the array after insertion
// console.log("Elements of the array after insertion are: " + arr);

// 10. Write a ts program to delete an element from an array at specified position.
// let arr: number[] = [1, 2, 3, 4, 5];
// let position = 3;

// // Deleting an element from the array
// for (let i = position - 1; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.pop();

// // Printing the elements of the array after deletion
// console.log("Elements of the array after deletion are: " + arr);

// 11. Write a ts program to count frequency of each element in an array.
// let arr: number[] = [1, 2, 3, 4, 2, 5, 1, 2, 4];
// let frequency: Map<number, number> = new Map<number, number>();

// // Counting frequency of each element in the array
// for (let i = 0; i < arr.length; i++) {
//   if (frequency.has(arr[i])) {
//     frequency.set(arr[i], frequency.get(arr[i]) + 1);
//   } else {
//     frequency.set(arr[i], 1);
//   }
// }

// // Printing the frequency of each element in the array
// frequency.forEach((value, key) => {
//   console.log("Frequency of " + key + " is: " + value);
// });


// 12. Write a ts program to print all unique elements in the array.
// let arr: number[] = [1, 2, 3, 4, 2, 5, 1, 2, 4];
// let uniqueElements: Set<number> = new Set<number>();

// // Finding unique elements in the array
// for (let i = 0; i < arr.length; i++) {
//   uniqueElements.add(arr[i]);
// }

// // Printing the unique elements in the array
// console.log("Unique elements in the array are: " + [...uniqueElements]);

// 13. Write a ts program to count total number of duplicate elements in an array.
// let arr: number[] = [1, 2, 3, 4, 2, 5, 1, 2, 4];
// let frequency: Map<number, number> = new Map<number, number>();
// let duplicates = 0;

// // Counting frequency of each element in the array
// for (let i = 0; i < arr.length; i++) {
//   if (frequency.has(arr[i])) {
//     frequency.set(arr[i], frequency.get(arr[i]) + 1);
//   } else {
//     frequency.set(arr[i], 1);
//   }
// }

// // Finding total number of duplicate elements in the array
// frequency.forEach((value, key) => {
//   if (value > 1) {
//     duplicates += value - 1;
//   }
// });

// // Printing the total number of duplicate elements in the array
// console.log("Total number of duplicate elements in the array are: " + duplicates);

// 14. Write a ts program to delete all duplicate elements from an array.
// let arr: number[] = [1, 2, 3, 4, 2, 5, 1, 2, 4];
// let uniqueElements: Set<number> = new Set<number>();

// // Finding unique elements in the array
// for (let i = 0; i < arr.length; i++) {
//   uniqueElements.add(arr[i]);
// }

// // Creating a new array with only unique elements
// let newArr: number[] = [...uniqueElements];

// // Printing the new array with only unique elements
// console.log("Array with only unique elements: " + newArr);

// 15. Write a ts program to merge two array to third array.
// 16. Write a ts program to find reverse of an array.
// 17. Write a ts program to put even and odd elements of array in two separate array.
// 18. Write a ts program to search an element in an array.
// 19. Write a ts program to sort array elements in ascending or descending order.
// 20. Write a ts program to sort even and odd elements of array separately.
// 21. Write a ts program to left rotate an array.
// 22. Write a ts program to right rotate an array.