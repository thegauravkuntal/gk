// let matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]
//   for(i=0;i<matrix.length;i++){
//       let row=[]
//       for(let j=0; j<matrix[i].length; j++){
//           row.push(matrix[i][j])
//       }
//       console.log(row)
// }


// let matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[2][1])


let matrix=[
    [1,2,3],      
    [4,5,6],
    [7,8,9]
]
let target=5
let  result=[]
// sum=0
for(i=0;i<matrix.length;i++){
for(j=0;j<matrix[i].length;j++){
  if(matrix[i][j]==target){
      result.push(i,j)
  }
}
}
console.log(result)
