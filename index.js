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
    return [...new Set(array)]
}
let question8 = document.getElementById('question_8');
question8.innerHTML="The before removing the duplicate ["+array1+"] after ="+removeDuplicate(array1);
let question8_way = document.getElementById('question_8_way');
question8_way.innerHTML="The before removing the duplicate ["+array1+"] after ="+removeDuplicate(array1);
//Question 9
function median(array){
    let median = Math.floor(array.length/2)
    if(array.length % 2==0){
    let result = (array[median]+array[median+1])/2
    }
    else result = array[median]

    return result;
}
let question9 = document.getElementById('question_9');
question9.innerHTML="the median of ["+array+"]="+median(array);

//question 10
function multiplying(array){
    let newArray =[];
    for(let i =0;i<array.length;i++){
        newArray.push(array[i]*2);
    }
    return newArray;
}
let question10 = document.getElementById('question_10');
question10.innerHTML = "new array is now "+multiplying(array);
let names = ["Shema","Arnaud","Moise","Elie","Thierry","Filemon","Pacifique","Sabin","Herve","Olivier","Audace","Igor","Manzi","Murokore","Patrick","Bosco","Joseph","Bertin","Reponse","Bonquet"];
//question 11
function PrintingNames(array){
    let names = ["Shema","Arnaud","Moise","Elie","Thierry","Filemon","Pacifique","Sabin","Herve","Olivier","Audace","Igor","Manzi","Murokore","Patrick","Bosco","Joseph","Bertin","Reponse","Bonquet"];
    return names.join('<br/>');
}

let question11 = document.getElementById('question_11');
question11.innerHTML =  PrintingNames(array);
//Question 12
function sortingString(array){

    return names.sort();
}
let question12 = document.getElementById('question_12');
question12.innerHTML = sortingString(names);
//question 15
function  specificLetter(array){
    let letter = 'S';
    namesThatStartWith =array.filter(array => array.startsWith(letter))
    return namesThatStartWith;
}
let question15 = document.getElementById('question_15');
question15.innerHTML = "the names that start with S are:"+specificLetter(names);
//question 17
function containLetter(array){
    let name = "a";
    let count =0;
    namesWithLetter=array.filter(array => array.toUpperCase().includes('A'));
    return namesWithLetter.length;

}


let question17 = document.getElementById('question_17');
question17.innerHTML= "the names that contains letter a are:"+containLetter(names)
//question 18
function removeElements(array){
    elements = 'Arnaud';
    index = array.indexOf(elements);
    array.splice(index,1);
    return array;
}

let question18 = document.getElementById('question_18');
question18.innerHTML = "Removed 'Arnaud'from array ="+ removeElements(names);
//question 21
const person = {
    name:"Shema",
    age: 12,
    occupation:"software developer"
}
function displayInformation(obj){
    return `name: ${obj.name},age: ${obj.age}, occupation: ${obj.occupation} `
}
let question21=document.getElementById('question_21');
question21.textContent = displayInformation(person)
//Question 23 and 24
function addObject(object,key,value){
    object[key]= value;
}
function removeObject(object,key){
    delete object[key]
}
let question23= document.getElementById('question_23');
let question24= document.getElementById('question_24');

addObject(person,"country","USA")
question23.innerHTML = "adding the new property "+displayInformation(person)+` , Country : ${person.country}`
removeObject(person,"country")
question24.innerHTML = "adding the new property "+displayInformation(person)+` , Country : ${person.country}`

//Question 25
function listProperties(obj){
    return Object.entries(obj).map(([key,value])=> ` ${key} : ${value} `).join(';')
}
let question25 = document.getElementById('question_25');
question25.innerHTML = listProperties(person)
//Question 26