function sumTwoSmallestNumbers(numbers) {  
  let num = numbers.sort((a, b) => a - b);
  
  let newNum = num[0] + num[1];
  
  return newNum;
}