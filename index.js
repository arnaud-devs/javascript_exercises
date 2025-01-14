//question 1
function sumArr(arr){
    let sum = 0;
    for(let i = 0; i<arr.length ;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let array = [1,10,2,3,4,5,6,7,8,9,10,11,12,19,14,15,16,17,18,13,20];
let question1 = document.getElementById('question_1');
question1.innerHTML = "The sum of this array is ["+question1+"] ="+sumArr(array);