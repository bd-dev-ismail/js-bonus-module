// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;

// }
// // console.log(sum);
// let sum2 = 0;
// for(let i =5; i >= 1; i--){
//     sum2 = sum2 + i;
// }
// // console.log(sum2)
function sum(i){
    if(i ==1){
        return 1;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);