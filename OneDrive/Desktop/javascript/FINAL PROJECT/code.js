// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "green","blue", "yellow", "brown", "black"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "shazad",
        lastName: "khan"
    },
    {
        firstName: "faizal",
        lastName: "khan"
    },
    {
        firstName: "farhan",
        lastName: "khan"
    },
    {
        firstName: "Arzoo",
        lastName: "siddique"
    },
    {
        firstName: "Wasim",
        lastName: "ansari"
    }
]
// Returns a random number between 1-100
document.getElementById("b1").addEventListener("click", btnPressedRandom)

function btnPressedRandom() {
    document.getElementById("p1").innerHTML = Math.floor(Math.random() * 100) + 1
}

// Returns a random number between "Start" and "End"
document.getElementById("b2").addEventListener("click", btnPressedRandomRange)


function btnPressedRandomRange() {
    document.getElementById("p2").innerHTML = getRndInteger(document.getElementById("i1").value, document.getElementById("i2").value)

}

function getRndInteger(min, max) {

      return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) ) + parseInt(min)
  }


// Returns a long Lorem Ipsum String
document.getElementById("b3").addEventListener("click", btnPressedLoren)

function btnPressedLoren() {
    document.getElementById("p3").innerHTML = lorem
}


//Returns a Lorem Ipsum String based on the number of sentences specified
document.getElementById("b4").addEventListener("click", btnPressedLorenSentence)

function btnPressedLorenSentence() {
    let numberOfSentences = document.getElementById("i3").value
    let newLorem = lorem.split(".")
    let finalLorem = ""
    for(var i=0; i<numberOfSentences; i++){
        finalLorem = finalLorem + newLorem[i] + "."
    }
    document.getElementById("p4").innerHTML = finalLorem
}

//Returns a Lorem Ipsum String based on the number of characters specified

document.getElementById("b5").addEventListener("click", btnPressedLorenChar)

function btnPressedLorenChar() {
    let numberOfChar = document.getElementById("i4").value
    let newLorem = lorem.split("")
    let finalLorem = ""
    for(var i=0; i<numberOfChar; i++){
        finalLorem = finalLorem + newLorem[i]
    }
    document.getElementById("p5").innerHTML = finalLorem
}

//Returns the current date(formatted)

document.getElementById("b6").addEventListener("click", btnPressedDate)

function btnPressedDate() {
   let now = new Date()
   document.getElementById("p6").innerHTML = now.toDateString()
}

//Returns the current time(formatted)

document.getElementById("b7").addEventListener("click", btnPressedTime)

function btnPressedTime() {
   let now = new Date()
   document.getElementById("p7").innerHTML = now.toLocaleTimeString()
}

//Converts Inches to Feet

document.getElementById("b8").addEventListener("click", btnPressedInchToFeet)

function btnPressedInchToFeet() {
    let inches = document.getElementById("i5").value
   document.getElementById("p8").innerHTML = inches*0.083 + " feet"
}

//Converts Feet to Inches

document.getElementById("b9").addEventListener("click", btnPressedFeetToInch)

function btnPressedFeetToInch() {
    let feet = document.getElementById("i6").value
   document.getElementById("p9").innerHTML = feet*12 + " feet"
}

//Compares if two words are the same length

document.getElementById("b10").addEventListener("click", btnPressedIfTheSameLength)

function btnPressedIfTheSameLength() {
    let firstWordLength = document.getElementById("i7").value.length
    let secondWordLength = document.getElementById("i8").value.length
    if(firstWordLength==secondWordLength){
        document.getElementById("p10").innerHTML = "Length is the same"
    } else  if(firstWordLength>secondWordLength) {
        document.getElementById("p10").innerHTML = "First word is longer"
    } else  if(firstWordLength<secondWordLength) {
        document.getElementById("p10").innerHTML = "Second word is longer"
    } else {
        document.getElementById("p10").innerHTML = "Something went wrong"
    }
}

//Returns a random password

document.getElementById("b11").addEventListener("click", btnPressedRandomPassword)

function btnPressedRandomPassword() {
    var pass = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++){
        pass += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    document.getElementById("p11").innerHTML = pass

  }

  //Tells you if the number is even or odd

document.getElementById("b12").addEventListener("click", btnPressedEvenOrOdd)

function btnPressedEvenOrOdd() {
    let number = document.getElementById("i9").value
    if(number%2==0){
        document.getElementById("p12").innerHTML = "Number is even"
    }
    else {
        document.getElementById("p12").innerHTML = "Number is odd"
    }

  }


  //Returns a random color

  document.getElementById("b13").addEventListener("click", btnPressedRandomColor)

  function btnPressedRandomColor() {
    document.getElementById("p13").innerHTML = colors[(Math.floor(Math.random() * colors.length))]
    }



  //Returns a random first and last name

  document.getElementById("b14").addEventListener("click", btnPressedRandomName)

  function btnPressedRandomName() {
    let ran = Math.floor(Math.random() * names.length)
    document.getElementById("p14").innerHTML = names[ran].firstName + " " + names[ran].lastName
    }