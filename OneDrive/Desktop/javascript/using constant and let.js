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
let number1 = prompt("enter a number")
var triangle1 = ""
for( const i=0; i<=number; i++){
    for(var j=0; j<=i; j++){
        triangle = triangle +"*"
    }
    triangle = triangle + "*" + "\n"
}
console.log(triangle)
//
var number1 = prompt("enter a number")
const triangle1 = ""
for( let i=0; i<=number1; i++){
    for(var j=0; j<=i; j++){
        triangle1 = triangle1 +"*"
    }
    triangle1 = triangle1 + "*" + "\n"
}
console.log(triangle1)


let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined