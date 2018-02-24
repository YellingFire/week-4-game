$(document).ready(function() {
    //JS Starts here

    // Create a Random Number
    var gameNumber = Math.floor(Math.random() * (19 - 120)) + 120;
    $(".gameField").html(gameNumber);
 
    // Global Variables
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //Create random numbers assigned to each crystal
    var crystOne = Math.floor(Math.random() * (1 - 12 )) + 12;
    var crystTwo = Math.floor(Math.random() * (1 - 12 )) + 12;
    var crystThree = Math.floor(Math.random() * (1 - 12 )) + 12;
    var crystFour = Math.floor(Math.random() * (1 - 12 )) + 12;

    
    console.log(gameNumber);
    
    // Logic Check Game
    function checkWin() {
        if (userScore === gameNumber) {
            wins++;
            $("#wins").html(wins);
            gameReset();
            return true;
            
        }
        else {
            if (userScore > gameNumber) {
                losses++;
                $("#losses").html(losses);
                gameReset();
                return false;
            }
        }
    }

    // Crystal Four
    $("#crystFour").on("click" , function() {
        userScore = userScore + crystFour;
        $(".userScore").html(userScore)
        checkWin()
        // console.log(crystFour);        
    });

    // Crystal Three 
    $("#crystThree").on("click" , function() {
        userScore = userScore + crystThree;
        $(".userScore").html(userScore)
        checkWin()
        // console.log(crystThree);     
    });

    // Crystal Two
    $("#crystTwo").on("click" , function() {
        userScore = userScore + crystTwo;
        $(".userScore").html(userScore)
        checkWin()
        // console.log(crystTwo);       
    });

    //Crystal One
    $("#crystOne").on("click" , function() {
        userScore = userScore + crystOne;
        $(".userScore").html(userScore)
        checkWin()
        // console.log(crystOne);
    });

    
   
   // gameReset();
    
    function gameReset() {

        userScore = 0;
        $(".userScore").text("");
        gameNumber = Math.floor(Math.random() * (19 - 120)) + 120;
        $(".gameField").html(gameNumber);
        crystOne = Math.floor(Math.random() * (1 - 12 )) + 12;
        crystTwo = Math.floor(Math.random() * (1 - 12 )) + 12;
        crystThree = Math.floor(Math.random() * (1 - 12 )) + 12;
        crystFour = Math.floor(Math.random() * (1 - 12 )) + 12;

    }

    
    




//Ultimate Closing tags
});