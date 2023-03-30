//date basics

var newDate = new Date()

newDate.getFullYear() // show full year
newDate.getMonth() // show month but it starts with 0
newDate.getDay() // show the no of day it also starts with 0


var today = newDate.getDate + " " + (newDate.getMonth()+1) + " " + newDate.getFullYear

var newDate = new Date()

newDate.getHours() // show hours
newDate.getMinutes() // show minutes
newDate.getSeconds() // show seconds

var time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
newDate.getUTCDay()

// setting new dates

var newDate = new Date()


newDate.setFullYear(2021) // to set year

newDate.setFullYear(2021,7,21) // to set year month and date

newDate.setMonth(0) // to set month

newDate.setMonth(0, 6) // to set month and date

newDate.setDate(6) // to set date

newDate.setHours(10) // to set hours

newDate.setHours(10, 25 , 45) // to set hours, minutes, and seconds

newDate.setMinutes(30) // lto set minutes

newDate.setMinutes(30 , 30 ) // to set minutes and seconds

newDate.getTime() // to get the time ms since jan 1, 1970

newDate.setTime() // to set the time to that date.
