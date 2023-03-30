// convertinga a number to a string

var num = 9123128573
var str 

str = num.toString()

(123456789).toString()
(1.23).toString()

//exponentials and decimals

//toExponential counts the number after the decimal and put the exponential after that
var num = 7.6586

num.toExponential(2)
num.toExponential(5)
num.toExponential(7)


//to fixed count the number after the decimal
var num2 = 5.56878
 
num2.toFixed(2)
num2.toFixed(5)


//toprecision just count the numbers 
var num3 = 98.45156
num3.toPrecision(2)
num3.toPrecision(3)
num3.toPrecision(4)


// maths objects


//shows the value of pi
Math.PI

//to round the no to its nearest value
Math.round(4.12)

//to get the power of the given no 
Math.pow(5.2)

//to git the square of the the given no
Math.sqrt(25)

//to force round up the num to its next value
Math.ceil(4.4)

//to force round up the num to its lowes value
Math.floor(4.7)

//to ge the minimum of the given no
Math.min(1,2,5,10,15,400,500)

//to get the maximum of the given no
Math.max(1,2,5,10,15,400,500)

//to get any random no
Math.random()


//ramdom no generator

 var randNum =function(min,max){
    min = Math.ceil(min)
    
    max = Math.floor(max)
    

    var num = Math.floor(Math.random() * (max - min)) 
    return(num)
    // console.log=(num)    
}

randNum(1.5, 10.5)
