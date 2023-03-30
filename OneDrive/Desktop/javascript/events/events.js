function btnpressed(){
    console.log= ("button 1 was pressed")
    document.getElementById("p1").innerHTML = "Button 1 was Pressed"
}
function txtTyped(){
    console.log("text was typed")
    if(document.getElementById("i1").value == "abcd123"){
        document.getElementById("p2").innerHTML = "Valid text"}
    else{
     document.getElementById("p2").innerHTML = "Invalid text"
    }
}

//using eventlistner can make it clear in the html page

document.getElementById("b2").addEventListener("click", btn2pressed)

function btn2pressed(){
    console.log = ("button 2 is pressed")
    document.getElementById("p3").innerHTML = "Button 2 is pressed"
}
 

document.getElementById("i2").addEventListener("change", text2)
const input2 = document.getElementById("i2")
const para4 = document.getElementById("p4")
function text2(){
    console.log = ("text was typed")
    if(document.getElementById("i2").value == "shazad"){
        document.getElementById("p4").innerHTML = "Valid text"}
    else{
     document.getElementById("p4").innerHTML = "Invalid text"
    }        
}
const text3 = 

//we con use this keyword to reffer to the eventlistner 
document.getElementById("p4").addEventListener("mouseover", moused)

function moused(){
    this.innerHTML = "you have been moused"
}