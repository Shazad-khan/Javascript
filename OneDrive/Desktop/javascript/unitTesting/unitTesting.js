/*  unit testing
    -Testing a small piece of code is unit tesing
    -Test against specific function

    Unit teste= are typically automated

    Unit vs Integration
    -Integeration is a test of multiple components working together when js and html document working togerther

    Types of test 
    -actual - it is something which the code or the function actually returned
    -expected - it is somethin which is i am expecting the code or the function will do

    happy path
    -normal operation like adding 2 numbers
    -it will do exactly what we want

    Negative path
    -adding a letter to a number
    -it will not work as we are expecting
*/

// function for unit testing

//this is a simple function to test for equality
//name : title of test
function test(name, expected, actual){
    if(expected === actual){
        console.log(name + "Test passed. Expected" + expected + " is equal to Actual: " + actual + ".")
    }else{
        console.log(name + "Test Failed. Expected" + expected + " is equal to Actual: " + actual + ".")
    }
}

function black(num){
    return num
}

test("test if the number input is the same as the output. ", black(2) , 2)