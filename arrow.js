// //Do the below programs in arrow functions.
//  //Print odd numbers in an array

// var odd=(arr)=>{
//     let ans=arr.filter(x => x%2==1)
//     return ans
// }
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(odd(arr))

// //Convert all the strings to title caps in a string array
// let title=(arr)=>{
//     var ans=[];
//     for(let i=0;i<arr.length;i++){
//         var x=arr[i];
//         x=x.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
        
//         ans.push(x)
//     }
//     return ans
// }
// let arr=['hello world','iRon MAN','hApPy BiRtHdAy']
// console.log(title(arr))

// //Sum of all numbers in an array
// var sum=(arr)=>{
//     return arr.reduce((a,b)=>a+b)
// }
// var arr=[1,2,3,4,5]
// console.log(sum(arr))

// //Return all the prime numbers in an array
// var prime=(arr)=>{
//     let ans=[];
//     for(var i=0;i<arr.length;i++){
//         var x=arr[i];
//         if(x==1 || x==2){
//             ans.push(x)
//         }
//         else{
//             var pr=true
//             for(var j=2;j<x;j++){
//                 if(x%j==0){
//                     pr=false
//                 }
//             }
//             if(pr==true){
//                 ans.push(x)
//             }
//         }
//     }
//     return ans
// }
// let arr=[1,3,5,4,7,8,9]
// console.log(prime(arr))








// //Return all the palindromes in an array
// var palindrome=(arr)=>{
//     var ans=[];
//     for(let i=0;i<arr.length;i++){
//         var x=arr[i];
//         var a=true
//         for(var j=0;j<x.length/2;j++){
//             if(x[j]!==x[x.length-1-j]){
//                 a=false
//             }
//         }
//         if(a==true){
//             ans.push(x)
//         }
//     }
//     return ans
// }
// let arr=['madam','hello','civic','racecar']
// console.log(palindrome(arr))
