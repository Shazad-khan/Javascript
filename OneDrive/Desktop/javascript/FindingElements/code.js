
//get element by id is used to get the element by id 
const headingText = document.getElementById("heading")
console.log(headingText)

//getElementsByClass is used to get the element by its class name
const paragraphText = document.getElementsByClassName("content")[1]
console.log(paragraphText)

//getElementsByTagName is used to get the element by it tag name
const heading2Text = document.getElementsByTagName("h2")[0]
console.log(heading2Text)

//it will show the body of the document
console.log(document.body)
//it will show the url or the location of the file
console.log(document.URL)
//it will show the title of the html document
console.log(document.title)
//it will show the head of the html document
console.log(document.head)


//Relationships

const h1Text = document.getElementById("heading").firstChild
console.log(h1Text)

const h1Sib = document.getElementById("heading").nextSibling
console.log(h1Sib)

const h1par = document.getElementById("heading").parentNode
console.log(h1par)
// ---------------------------------------------------------
// ---------------------------------------------------------
//-------------------------changing html--------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
document.getElementById("heading").innerHTML = "this is a Heading"

document.getElementById("logo").innerHTML = "zemoso"

const p = document.createElement("p")
const pText = document.createTextNode("New Paragraph")
p.append(pText)

//appendChild will add a child 
// document.getElementById("main").appendChild(p)

//insertBefore will insert a parent before the child mention in the parameters
const heading = document.getElementById("heading")
document.getElementById("main").insertBefore(p, heading)

//remove child will remove the child with the tag name inserted in the parameters
const logo = document.getElementById("logo")
document.getElementById("main").removeChild(logo)

// ---------------------------------------------------------
// ---------------------------------------------------------
//-------------------------changing Style--------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

document.getElementById("heading").style.color = "blue"

document.getElementById("main").style.border = "1px solid black"