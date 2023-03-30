var answers = prompt("what is your coding lagauge you are coding this.");
if(answers == "javascript"){
    console.log("this is a right answer.")
}
else{
    console.log("this is wrong answer.")
}

// ANOTHER EXAMPLE OF IF ELSE AND PROM

var yourname = prompt("What is your name ?")

if ( yourname == "shazad" ){
    console.log("hello! my name is " + yourname + " too.") 
}
else{
    console.log("Nice to meet you " + yourname)


//One more exmple of else if statement

let firstPerson = prompt("who are you ?");

if( firstPerson == "shazad"){
    console.log("Hi " + firstPerson + " welcome!")
}else if( firstPerson == "farhan"){
    console.log("Hi " + firstPerson + " We Welcome You!")
}else
    console.log( firstPerson + " sorry! , you dont have aceess to this page.")


// example of another if else statements

const fname = prompt("enter your first name ")
const lname = prompt("enter your last name ")

if (fname == "shazad"){
    if(lname == "khan"){
        console.log("Welcome " + fname + " " + lname + " administrator.")
    }
    else
        console.log("Your " + lname + " is not matching. So you are not the administrator")
}
    else{
        console.log("You are " + fname + " " + lname + ". Welcome! User.")
     }