
function test(name, expected, actual){
    if(expected === actual){
        console.log(name + "\nTest passed. Expected : " + expected + " is equal to Actual: " + actual + ".")
    }else{
        console.log(name + "\nTest Failed. Expected : " + expected + " is not equal to Actual: " + actual + ".")
    }
}

function add(num1, num2){
    return ( num1 + num2)
}
// Two positive whole numbers
test("Two positive whole numbers", 6, add(3, 3))

//One zero and a number greater than zero
test("One zero and a number greater than zero", 6, add(0, 6))

// Two 2 digit numbers
test("Two 2 digit numbers", 22, add(11, 11) )

// A single digit and a double digit number
test("A single digit and a double digit number", 30, add(25, 5))

// A positive and a negative number
test("A positive and a negative number", 8, add(9, -1))

// A decimal number and a whole number
test("A decimal number and a whole number", 7.5, add(5, 2.5))

// A number string plus a number
test("A number string plus a number", 23, add("2", 3))

// A string plus a string
test("A string plus a string", 75, add("7", "5"))

// A boolea plus a string
test("A boolea plus a string", true, add(true, "hi"))

//Missing an arguent
test("Missing an arguent", NaN, add(1))

//Missing both arguments
test("Missing both arguments",NaN,add())

//