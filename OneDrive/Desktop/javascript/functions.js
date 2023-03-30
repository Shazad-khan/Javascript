var favfood = prompt("Press any no to oder food \n 1 - chowmin \n 2 - pasta \n 3 - maggi \n 4 - cake \n 5 - pudding \n 6 - chocolates")
var favDrinks = prompt("Press any no to order Drinks \n 1 - COCA \n 2 - Soda \n 3 - Mojito \n 4 - Softdrinks \n 5 - Cocktails \n 6 - Mocktales")

    function orderFood(){
    switch(favfood){
        case "1" : 
            console.log("I will order Chowmin for you!")
            break;
        case "2" : 
            console.log("I will order Pasta for you!")
            break;
        case "3" : 
            console.log("I will order Maggi for you!")
            break;
        case "4" : 
            console.log("I will order Cake for you!")
            break;
        case "5" : 
            console.log("I will order Pudding for you!")
            break;
        case "6" : 
            console.log("I will order Chocolates for you!")
            break;
        }
    }

    function orderDrinks(){
        switch(favDrinks){
            case "1" : 
                console.log("And  a COCA too.")
                break;
            case "2" : 
                console.log("And a Soda too.")
                break;
            case "3" : 
                console.log("And  a Mojito too.")
                break;
            case "4" : 
                console.log("And  a Soft Drinks too.")
                break;
            case "5" : 
                console.log("And  a Cocktailes too.")
                break;
            case "6" : 
                console.log("And  a Mocktailes too.")
                break;
            }
    }

    orderFood()
    orderDrinks()

/*--------------------------------------
----------------------------------------
------ANOTHER ECAMPLE------------------
----------------------------------------
--------------------------------------*/

// var length = prompt("enter lenght")
// var breadth = prompt("enter breadth")
function areaRect(length, breadth){
    var area = length * breadth;
    return area
}
 areaRect(2, 5)
   
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

var paidAmount = prompt("you owe me 500₹. how much amount is you are paying")
function cashier(amount){
    let totalCost
    let costOfitem = 500
    totalCost = costOfitem - amount

    return totalCost
}

cashier(paidAmount)

if(cashier(paidAmount)==0){
    console.log("you have given the exact amount")
}else if(cashier(paidAmount)>0){
    console.log("you have given a little less amount that you have to paid ₹ " + cashier(paidAmount) )
}else if(cashier(paidAmount)<0){
     let positiveNum = cashier(paidAmount) * -1 
    console.log("you have given too much. your change due is ₹ " + positiveNum )
}