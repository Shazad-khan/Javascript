//string lenght
var myName = "shazad"
myName.length

// index of and search

var sentence = "hi i am shazad and i am going to hyderabad next week."

sentence.indexOf("i")
//it will show the first index of "i"

sentence.lastIndexOf("i")
//it will show the last index of "i"

sentence.search("shazad")
//it will search the word and show th index of it


//taking a slice or substring or substr

var Fnames = "faisal, kiran, laxman, heema"

var slicednames = Fnames.slice(8 , 13)
//basically it will slice the name from the string 
//like i have given the stating index of 8 and 13 as last index
//it will slice the string between that index and store it to another var
slicednames

slicednames = Fnames.slice(8)
console.log = (slicednames)

// If we put (-) signs with the index no it will move from right to left
slicednames = Fnames.slice(-13, -7)
console.log = (slicednames)
//if you will just give the starting index it will give the output till the last index
slicednames = Fnames.slice(-13)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/

var lapi = "lenove, HP, Dell, ASUS, MacBook, Acer"

var sb = lapi.substring(12, 16)
console.log=(sb)

sb= lapi.substring(12)

//substring does not support (-) sign 
sb = lapi.substring(-12, -6)

//if we give only one index with minus sign it will show the whole string
sb = lapi.substring(-12)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/


//subs take the first index and the length and it dose work the same as slice
var fruites = "apple, mango, banana"

var sr = fruites.substr(7, 5)
console.log = (sr)

sr = fruites.substr(7)
console.log = (sr)

sr = fruites.substr(-13, 5)
console.log = (sr)

sr = fruites.substr(-13)
console.log = (sr)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/

//replacing content

var str = "i am going to hyderabad next week. I hyderabad is alos my fav city."
var sen = str.replace("hyderabad", "jamshedpur")
console.log = (sen)

//we use two slash / txt / and i for case sensetive
sen = str.replace(/hyderabad/i, "jamshedpur")
console.log = (sen)

//simlar we use g for global replacement

sen = str.replace(/hyderabad/g, "jamshedpur")
console.log = (sen)

//similarly if we have to replace both case sensitive and globaly we use "gi"
sen = str.replace(/hyderabad/gi, "jamshedpur")
console.log = (sen)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/

//converting to upper, lower and trimming


//touppercase will convert the word to upper case
var word = "      zemoso technologies          "
var upWord = word.toUpperCase()
console.log=(upWord)


///tolowercase will convert the word th lower case
var word = "      ZEMOSO TECHNOLOGIES          "
var loWord = word.toLowerCase()
console.log=(loWord)

//trim will remove the unwanted space before and after the sentence
var sentence = "   welcome to Zemoso     technologies      "
var clean = sentence.trim()
console.log = (clean)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/

//converting strings to array
//we use split word to split and pass the splitter in parameter from which we want to split
var stri = "hi my name is shazad."
var arr = stri.split(" ")
console.log = (arr)

var stri = "9,1,2,3,4,5"
var arr = stri.split(",")
console.log =(arr)

var stri = "zemosotechnologies"
var arr = stri.split("")
console.log = (arr)

/*-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------
-----------------------------------------------------------------*/

//converting a string to a number

//the number function converts the string to number 

var bum = "5"
var newNum = Number(bum)

newNum = Number("5.5")
newNum = Number("0.5")

newNum = Number("5.5")

//parseInt will change the string to Integers

var num = ""
num = parseInt("5")
num = parseInt("5.2")
num = parseInt("5.8")
num = parseInt("0.2")
num = parseInt("0.9")

//parseFloat will change the string to Float

var num = ""
num = parseFloat("5")
num = parseFloat("6.2")
num = parseFloat("9")
num = parseFloat("0")
num = parseFloat("1.5")





















