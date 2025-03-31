
function isPrime(num) {
   
    if (num <= 1) return false; 
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false; 
    const sqrt = Math.sqrt(num);
    for (let i = 5; i <= sqrt; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
 
  const testCases = [7, 12, 23, 1, 2, 4, 97, 100];
  
  console.log("Prime number test results:");
  testCases.forEach(num => {
    console.log(`${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
  });
  

  const largeNumber = 7919; 
  console.time('Large prime test');
  const result = isPrime(largeNumber);
  console.timeEnd('Large prime test');
  console.log(`${largeNumber} is ${result ? 'prime' : 'not prime'}`);
