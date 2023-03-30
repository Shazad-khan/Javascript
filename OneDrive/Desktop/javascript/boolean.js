// this is a example of boolean codes 

var youAreHappy = prompt("are your happy?")
if(youAreHappy){
    console.log("thats great.")
} else
    console.log("Be happy and everything will get right.")

// another example

var yourAnswer = prompt("what is your answer press 'Y' for ture and 'N' for True")
var showAnswer

if(yourAnswer == "Y" || yourAnswer == "y"){
    showAnswer = true
    console.log("your answer is "+ showAnswer)
}else if(yourAnswer == "N" || yourAnswer == "n"){
    showAnswer = false
    console.log("your answer is "+ showAnswer)
}
else
console.log("You have pressed a invalid Character.")