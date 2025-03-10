let arr=[1,2,3,4,5,6]
let sum1 = 0
let sum2 = 0
for(let i =0;i<arr.length;i++){
    if(i%2==0){
        sum1+=arr[i]
        // odd
    }
    else if (i%2==1) {
        sum2+=arr[i]
        
    }
}

console.log(`sum of odd is ${sum1} and even is ${sum2}`)