// adding properties to objects

var person = {
    fname: "shazad",
    lname: "khan",
    favColor: "red",
    myName: function(){
        console.log(this.fname + " " + this.lname)
    }
}

person.age = 21

//deleting properties

delete person.favColor

// a different way to add method
var person = {
    fname: "shazad",
    lname: "khan",
    favColor: "red",
    myName(){
        console.log(this.fname + " " + this.lname)
    }
}

//getters and setters

//getter gets the value as property
//setter allows you to update

var person = {
    fname: "shazad",
    lname: "khan",
    favColor: "red",
    get myName(){
        return this.fname + " " + this.lname
    },
    set myName(value){
        var name = value.split(" ")
        this.fname = name[0]
        this.lname = name[1]
    }
}

//constructors
//blue print of an object

function Person(first, last){
        this.fname = first
        this.lname = last
        this.myName = function(){
            console.log(this.fname +" " + this.lname)
        }
}

var me = new Person("shazad", "khan")

var brother = new Person("farhan", "khan")

//prototype


function Person(first, last){
    this.fname = first
    this.lname = last
    this.myName = function(){
        console.log(this.fname +" " + this.lname)
    }
}

Person.prototype.favCompany = "zemoso technology"

Person.prototype.companyWorks = function(){
    console.log(this.favCompany)
}

var me = new Person("shazad", "khan")