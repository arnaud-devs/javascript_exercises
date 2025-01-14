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
question1.innerHTML = "The sum of this array is ["+array+"] ="+sumArr(array);
//Question 2
function findMaximum(arr){
    let max =arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
let question2=document.getElementById('question_2');
let array1 = [1,10,2,3,4,5,6,7,8,9,10,11,12,19,14,15,16,17,18,13,20];
question2.innerHTML="The largest number of this array is ["+array1+"]="+findMaximum(array1);
//question 3
function sorting(array){
    let sortedArray=array.sort((a, b) => a - b);
    return sortedArray;
}
let question3=document.getElementById('question_3');
question3.innerHTML = "The Sorted Result of this array ["+array+"] ="+sorting(array);
//question 4
function reverse(array){
    let  reversedArray = array.reverse();
    return reversedArray;
}
let question4 = document.getElementById('question_4');
question4.innerHTML="the Reversed of this array ["+array+"] = "+reverse(array);
//Question 5
function evenNumber(array){
    let even=[];
    for(let i=0 ; i<array.length;i++){
        if(array[i]%2==0){
            even.push(array[i]);
        }
    }
    return even;
}
let question5 = document.getElementById('question_5');
question5.innerHTML="Even numbers in this array ["+array+"] ="+evenNumber(array);
//question 6
function oddNumbers(array){
    let odd=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            odd.push(array[i]);
        }
    }
    return odd;
}
let question6 = document.getElementById('question_6');
question6.innerHTML="Odd number in this array ["+array+"] = "+oddNumbers(array);
//question 7
function average(array){
    let sum=0;
    for(let i =0 ; i<array.length;i++){
        sum=sum+array[i];
    }
    let average = sum /array.length;
    return average;
}
let question7 = document.getElementById('question_7');
question7.innerHTML= "The average of this array ["+array+"] ="+average(array);
array.in
//Question 8
function removeDuplicate(array){
    count=0
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]==array[j]){
                count=count+1
            }
        }
        if(count>=2){
            let index=array.indexOf(array[i])
            array.pop(array[index])
        }
        count=0;
    }
    return array;
}
let question8 = document.getElementById('question_8');
question8.innerHTML="The before removing the duplicate ["+array1+"] after ="+removeDuplicate(array1);