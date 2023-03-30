// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Dom Assignment</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1">
    
// </head>
// <body id="main">
//     <h1 id="h1">Heading 1</h1>
//     <p id="p1">Paragraph 1</p>
//     <br>
//     <h1 id="h2">Heading 2</h1>
//     <p id="p2">Paragraph 2</p>
// </body>
// </html>

// 1. Change the text of "Heading 1" to "Welcome to my site!".

// 2. Change the text of "Paragraph 1" to "My name is " and add your name.

// 3. Remove the second H1 element

// 4. Change the font color of "Paragraph 2" to blue

// 5. Change the text of "Paragraph 2" to "I love JavaScript"

document.getElementById("h1").innerHTML = "Welcome to my Site!"

document.getElementById("p1").innerHTML = "My name is Shazad Khan."

// var heading = document.getElementById("h2")
// document.getElementById("main").removeChild(heading)

document.getElementById("p2").style.color = "blue"

document.getElementById("p2").innerHTML = "I love JavaScript"

// document.getElementById("h2").innerHTML = "I am a coder"
// document.getElementById("h2").style.color = "red"
