/* loops are basicaly used to iterate a block of code certain time  untile the condition is not satisfaid
for(start place; condition; incerement){}
*/
for( var i = 0; i<=5; i++){
    console.log("Hello world!" + i)
}


// ---------------------------------------------

var answer = prompt("YES or NO")
var answers = ["YES", "NO"]
var response = ["You said Yes", "You said no", "You did not follow the directions!"]

for (var i = 0; i<2; i++){
     if(answer != answers[0] && answer != answers[1]){
    console.log(response[2])
    break
     }
    else if(answer == answers[i]){
        console.log(response[i])
    }
}

//making a triangle
let number = prompt("enter a number")
var triangle = ""
for( var i=0; i<=number; i++){
    for(var j=0; j<=i; j++){
        triangle = triangle +"*"
    }
    triangle = triangle + "*" + "\n"
}
console.log(triangle)
//using constant
let number = prompt("enter a number")
var triangle = ""
for( const i=0; i<=number; i++){
    for(var j=0; j<=i; j++){
        triangle = triangle +"*"
    }
    triangle = triangle + "*" + "\n"
}
console.log(triangle)