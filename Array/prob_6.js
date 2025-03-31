/**
 * Calculates the total number of alphanumeric characters in an array of strings
 * @param {string[]} arr - Array of strings to count characters from
 * @returns {number} Total count of alphanumeric characters
 */
function countAlphanumericChars(arr) {
    // Handle case where input is not an array or is empty
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }
    
    let totalCount = 0;
    
    // Regular expression to match only letters and numbers
    const alphanumericRegex = /[a-zA-Z0-9]/g;
    
    // Iterate through each string in the array
    for (const str of arr) {
      // Skip if not a string
      if (typeof str !== 'string') {
        continue;
      }
      
      // Match alphanumeric characters and add to total count
      const matches = str.match(alphanumericRegex);
      totalCount += matches ? matches.length : 0;
    }
    
    return totalCount;
  }
  
  // Test case 1: Array with normal strings
  const test1 = ['apple', 'banana', 'cherry'];
  console.log('Test 1 result:', countAlphanumericChars(test1));
  
  // Test case 2: Array with mixed content including spaces and special characters
  const test2 = ['hello world!', '123-456', 'test@email.com'];
  console.log('Test 2 result:', countAlphanumericChars(test2));
  
  // Test case 3: Edge cases
  const test3 = ['', ' ', null, undefined, 123, {}, []];
  console.log('Test 3 result:', countAlphanumericChars(test3));
  
  // Test case 4: Empty array
  const test4 = [];
  console.log('Test 4 result:', countAlphanumericChars(test4));