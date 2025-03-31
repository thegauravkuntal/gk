
function replaceSpacesWithHyphens(inputString) {
    if (typeof inputString !== 'string') {
      return {
        modifiedString: '',
        replacementCount: 0,
        error: 'Input must be a string'
      };
    }
    const spaceCount = (inputString.match(/ /g) || []).length;
    const modifiedString = inputString.replace(/ /g, '-');
    
    
    return {
      modifiedString: modifiedString,
      replacementCount: spaceCount
    };
  }
  
  // Test with the given example
  const example1 = 'The quick brown fox jumps over the lazy dog';
  const result1 = replaceSpacesWithHyphens(example1);
  console.log('Example 1:');
  console.log('Original:', example1);
  console.log('Result:', result1);
  
 
  const example2 = 'JavaScript is fun to learn and practice';
  const result2 = replaceSpacesWithHyphens(example2);
  console.log('\nExample 2:');
  console.log('Original:', example2);
  console.log('Result:', result2);
  
  
  const example3 = 'NoSpacesHere';
  const result3 = replaceSpacesWithHyphens(example3);
  console.log('\nExample 3 (No spaces):');
  console.log('Original:', example3);
  console.log('Result:', result3);
  
  
  const example4 = '';
  const result4 = replaceSpacesWithHyphens(example4);
  console.log('\nExample 4 (Empty string):');
  console.log('Original:', example4);
  console.log('Result:', result4);
