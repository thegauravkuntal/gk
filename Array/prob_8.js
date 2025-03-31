/**
 * Determines whether a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
    // Handle edge cases
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Quick check for divisibility by 2 or 3
    
    // We only need to check up to the square root of the number
    // We can further optimize by checking only numbers of form 6k±1
    // (since all primes greater than 3 are of this form)
    const sqrt = Math.sqrt(num);
    for (let i = 5; i <= sqrt; i += 6) {
      // Check if num is divisible by i or i+2
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Test cases
  const testCases = [7, 12, 23, 1, 2, 4, 97, 100];
  
  console.log("Prime number test results:");
  testCases.forEach(num => {
    console.log(`${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
  });
  
  // Performance test with a larger number
  const largeNumber = 7919; // A known large prime
  console.time('Large prime test');
  const result = isPrime(largeNumber);
  console.timeEnd('Large prime test');
  console.log(`${largeNumber} is ${result ? 'prime' : 'not prime'}`);