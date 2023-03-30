var object = {
    place : "jamshedpur",
    firstName: "shazad",
    lastName: "khan",
    favBook: "chocholoate story",
    favGame: "PUBG",
    favSports: ["cricket", "football", "vollyball"],
    favmoveis: {
        romanticMovies: "sanam teri kasam",
        actionMovies: "Fast and furious",
        adventuresMovies: "Marvels endgame"
    }    
}

// console.log(object.place)
// console.log(object.firstName)
// console.log(object.lastName)
// console.log(object.lastName)
// console.log(object.favBook)
// console.log(object.favGame)
// console.log(object.favSports[1])
// console.log(object.favmoveis.actionMovies)

console.log(object[firstName])
console.log(object[place])
console.log(object[favfood])
console.log(object[favBook])
console.log(object[favGame])
console.log(object[favSports][1])
console.log(object[favmoveis[actionMovies]])
/*----------------------------------------
------------------------------------------
------------------------------------------
----------------------------------------*/

var family = {
    fatherName : {
        firstName : "azmer",
        lastName : "khan"
    },
    motherName : {
        firstName : "zubaida",
        lastName : "khatoon"
    },
    botherName1 : {
        firstName : "faizal",
        lastName : "khan"        
    },
    brotherName2 :{
        firstName : "farhan",
        lastName : "khan"
    }
}

console.log(family.fatherName.firstName,family.fatherName.lastName)
console.log(family.motherName.firstName,family.motherName.lastName)
console.log(family.botherName1.firstName+family.botherName1.lastName)
console.log(family.brotherName2.firstName+family.brotherName2.lastName)
/*----------------------------------------
------------------------------------------
------------------------------------------
----------------------------------------*/

var library = {
    book: "javascript is a good book",
    movie: "Marvel Avengers End Game",
    checkout : function(){
        console.log("you have checkout a  book " + library.book)
        console.log("you have checkout a " + this.movie)
    },
    checkIn : function(){
        let numBooks = prompt("Enter no of books you are checking in")
        console.log("You have checked in with " + numBooks + " books.")
    }
}

/*----------------------------------------
------------------------------------------
------------------------------------------
----------------------------------------*/


var resturantMenu = {
        resturantName : console.log("Famours Chiness Resturant"),
        resturantItems : function(){
            console.log("Enter a number to selet")
            console.log("Chowmin" + "\t" + "\t" +"\t" + "-" + "\t" +  50)
            console.log("Chicken rolls" + "\t" + "\t" + "-" + "\t" + 100)
            console.log("chicken butter masala" + "\t"+ "-" + "\t" +  150)
            console.log("Briyani" + "\t"+"\t" + "\t" +  "-" + "\t" + 120)
            console.log("Chicken lawabdar" + "\t"+ "-" + "\t" + 180)
        },
        itemsAlert : function(){
            alert("1.Chowmin" +  "-"  +  50  + "\n" + "2.Chicken rolls" + "-" + 100 + "\n" +"3.chicken butter masala" +"-"+  150 + "\n" +"4.Briyani" +   "-" +  + 120+ "\n" + "5.Chicken lawabdar" + "-"  + 180 +"\n")
        },
        takeOrder : function(){
            var order = prompt("Enter any no to order the item. " + this.itemsAlert())
            if (order == 1){
                console.log("You Ordered Chowmin!")
            }else if (order == 2){
                console.log("You Ordered Chicken Rolls!")
            }else if (order == 3){
                console.log("You Ordered Chicken Butter masala!")
            }else if (order == 4){
                console.log("You Ordered Chicken Briyani!")
            }else if (order == 5){
                console.log("You Ordered Chicken Chicken!")
            }
        }                
}
resturantMenu.resturantName
resturantMenu.resturantItems()
resturantMenu.itemsAlert()
resturantMenu.takeOrder()











