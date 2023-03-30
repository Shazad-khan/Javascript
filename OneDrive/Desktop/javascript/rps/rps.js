function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "s") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == "p") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}
function test(name, expected, actual){
    if(expected === actual){
        console.log(name + "\nTest passed. Expected : " + expected + " is equal to Actual: " + actual + ".")
    }else{
        console.log(name + "\nTest Failed. Expected : " + expected + " is not equal to Actual: " + actual + ".")
    }
}

//invalid selection by player 1
test("invalid selection", "Player 1 made an invalid selection.",rps("b","r"))

test("invalid selection", "Player 1 made an invalid selection.",rps("b","p"))

test("invalid selection", "Player 1 made an invalid selection.",rps("b","s"))

//invalid selection by player 2
test("invalid selection", "Player 2 made an invalid selection.",rps("r","b"))

test("invalid selection", "Player 2 made an invalid selection.",rps("p","b"))

test("invalid selection", "Player 2 made an invalid selection.",rps("s","b"))

// tie
test("Tie if player 2 will choose rock", "Tie",rps("r","r"))
test("Tie if player 2 will choose paper", "Tie",rps("p","p"))
test("Tie if player 2 will choose sisor", "Tie",rps("s","s"))


//player 1 will win
test("Player 1 will win when player 2 will choose Sisor", "Rock beats scissors. Player 1 wins.",rps("r","s"))
test("Player 1 will win when player 2 will choose Rock", "Paper beats rock. Player 1 wins.",rps("p","r"))
test("Player 1 will win when player 2 will choose Paper", "Scissors beats paper. Player 1 wins.",rps("s","p"))




//player 2 will win

test("Player 2 will win when player 1 will choose Rock", "Paper beats rock. Player 2 wins.",rps("r","p"))
test("Player 2 will win when player 1 will choose Sisor", "Rock beats scissors. Player 2 wins.",rps("s","r"))
test("Player 2 will win when player 1 will choose Paper", "Scissors beat paper. Player 2 wins.",rps("p","s"))
