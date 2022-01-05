var allDice, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix, diceRoll;
var rollButton, resetButton, diceContainer;

allDice = document.getElementById("allDice");
diceOne = document.getElementById("diceOne");
diceTwo = document.getElementById("diceTwo");
diceThree = document.getElementById("diceThree");
diceFour = document.getElementById("diceFour");
diceFive = document.getElementById("diceFive");
diceSix = document.getElementById("diceSix");
diceRoll = "";
rollButton = document.getElementById("rollButton");
resetButton = document.getElementById("resetButton");
diceContainer = document.getElementsByClassName("diceContainer");



function rollFunc() 
{//start roll function

    diceRoll = Math.floor(Math.random() * 6) + 1;

    if (diceRoll == 1) 
    {//start dice one
        diceOne.className = "show";
    }//end dice one
    else if (diceRoll == 2)
    {//start dice two
        diceTwo.className = "show";
    }//end dice two
    else if (diceRoll == 3)
    {//start dice three
        diceThree.className = "show";
    }//end dice three
    else if (diceRoll == 4)
    {//start dice four
        diceFour.className = "show";
    }//end dice four
    else if (diceRoll == 5)
    {//start dice five
        diceFive.className = "show";
    }//end dice five
    else
    {//start dice six
        diceSix.className = "show";
    }//end dice six

    allDice.className = "noShow";
    rollButton.className = "noShow";
    resetButton.className = "show";

}//end roll function

function resetFunc() 
{//start resetFunc
    resetButton.className = "noShow";
    rollButton.className = "show";
    allDice.className = "show";
    diceOne.className = "noShow";
    diceTwo.className = "noShow";
    diceThree.className = "noShow";
    diceFour.className = "noShow";
    diceFive.className = "noShow";
    diceSix.className = "noShow";
}//end resetFunc