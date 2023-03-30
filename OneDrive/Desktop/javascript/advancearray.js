//array length

var arr = ["my", "name", "is", "shazad"]
arr.length

//array into a string

var arr = ["my", "name", "is", "shazad"]
arr.toString()
//this join function copy the array and put this in new variable with the given seperater
newArr = arr.join("|")

//combinig arrays
//we use concat to concatinate arrays

var arr = ["my", "name", "is", "shazad"]
var arrfriedn = ["and", "I", "am", "faisal"]
var arr2 = ["and", "myself", "kiran"]
// var newArr = arr.concat(arrfriedn)
var newArr = arr.concat(arrfriedn, arr2)

//sorting of an array

//to sort the elements in assending order we use sort 
//to sort the elements in descending orer we use reverse
//note always reverse the elemets after doing sort
var company = ["zemoso", "google", "amazon", "microsoft", "flipkart"]
company.sort()
company.reverse()

//sorting a number array

var num = [100,200,5,90]
// num.sort(function(a, b){return a - b})
num.sort()

//array forEach and map
//foreach function will return an string
var newNum = ""
var num = [1, 2, 3, 4, 5]
num.forEach(funky)

function funky(value,index,array){
    newNum = newNum + index + " : " + value+ " & " + array[index] + "\n"
}


//map function returns an array 
var newNum = ""
var num = [1, 2, 3, 4, 5]

newNum = num.map(counting)

function counting(value, index, array){
    newNum = index + " : " + value+ " & " + array[index] + "\n"
    return newNum
}

//ARRAY FILTER

var num = [1 , 2 , 3 , 4 , 10 , 15 , 16 , 20 , 25 , 30 , 31 , 33 ]

var odd = num.filter(isOdd)

function isOdd(value, index, array){
      let odd = value % 2 == 0
      return odd
}


