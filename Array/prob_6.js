
function countAlphanumericChars(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }
    
    let totalCount = 0; 
    const alphanumericRegex = /[a-zA-Z0-9]/g;
    for (const str of arr) {
      
      if (typeof str !== 'string') {
        continue;
      }
      
      
      const matches = str.match(alphanumericRegex);
      totalCount += matches ? matches.length : 0;
    }
    
    return totalCount;
  }
  
 
  const test1 = ['apple', 'banana', 'cherry'];
  console.log('Test 1 result:', countAlphanumericChars(test1));
  
  
  const test2 = ['hello world!', '123-456', 'test@email.com'];
  console.log('Test 2 result:', countAlphanumericChars(test2));
  
 
  const test3 = ['', ' ', null, undefined, 123, {}, []];
  console.log('Test 3 result:', countAlphanumericChars(test3));
  
 
  const test4 = [];
  console.log('Test 4 result:', countAlphanumericChars(test4));
