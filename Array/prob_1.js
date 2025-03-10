let arr=[1,2,3,4,5]
// let i=0;
// let temp=[];
// let len= arr.length
// while(i<len){
//     let val1 = arr.pop()
//     temp.push(val1)
//     i++
// }


// console.log(arr.length);

let temp =[]
for(i=arr.length-1;i>=0;i--){
    
    temp.push(arr[i])
}
console.log(temp)

