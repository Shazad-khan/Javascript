//we can create arry by using []
// we can use pop to delet the elements from the right side
// we can use push to insert the element from the right side
// we can use shift to delet the elements from the left side
// we can use unshift to insert the element from the left side of an array.
// we can also replace the elements of an array by using its index No


const conatiner = ["red", "blue", "green", "orange"]
conatiner.pop()
conatiner.push("mango")
conatiner.shift()
conatiner.unshift("purple")
conatiner[0] ="black"

conatiner.splice(0,0, "grey")
conatiner.splice(0,1,"sparkel")
let newContainer = conatiner.slice(3)

//assingement of the array given in the udemy class.

let answers= []
let yourAnswer

yourAnswer = prompt("what is our favroit ACTOR")
answers.push(yourAnswer)
 yourAnswer = prompt("what is our favroit GAME")
answers.push(yourAnswer)
 yourAnswer = prompt("what is our favroit PLACE")
answers.push(yourAnswer)
 yourAnswer = prompt("what is our favroit SONGS")
answers.push(yourAnswer)
 yourAnswer = prompt("what is our favroit MOVIE")
answers.push(yourAnswer)
 yourAnswer = prompt("what is our favroit PERSON")
answers.unshift(answers)

answers.pop()

console.log(answers)

