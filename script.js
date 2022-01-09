var d1, d2, d3, d4, d5, rollButton, diceContainer, flag, audio; 
var diceRollOne, diceRollTwo, diceRollThree, diceRollFour, diceRollFive;
var diceOne, diceTwo, diceThree, diceFour, diceFive, onesScore, twosScore, threesScore, foursScore, fivesScore, sixesScore;
var subtotal, bonus, upperTotal, threeOfKindScore, fourOfKindScore, fullHouseScore;
var smallStraightScore, largeStraightScore, yahtzeeScore, chanceScore, bonusYahtzeeScore;
var lowerTotal, grandTotal, diceVal1, diceVal2, diceVal3, diceVal4, diceVal5;
var upperTotal1, upperTotal2, lowerTotal1, lowerTotal2;

d1 = document.getElementById("d1");
d2 = document.getElementById("d2");
d3 = document.getElementById("d3");
d4 = document.getElementById("d4");
d5 = document.getElementById("d5");
diceRollOne = "";
diceRollTwo = "";
diceRollThree = "";
diceRollFour = "";
diceRollFive = "";
rollButton = document.getElementById("rollButton");
diceContainer = document.getElementsByClassName("diceContainer");
flag = 0;
diceOne = 0;
diceTwo = 0;
diceThree = 0;
diceFour = 0;
diceFive = 0;
flag = 0;
onesScore = document.getElementById("onesScore");
twosScore = document.getElementById("twosScore");
threesScore = document.getElementById("threesScore");
foursScore = document.getElementById("foursScore");
fivesScore = document.getElementById("fivesScore");
sixesScore = document.getElementById("sixesScore");
subtotal = document.getElementById("subtotal");
bonus = document.getElementById("bonus");
upperTotal = document.getElementsByClassName("upperTotal");
threeOfKindScore = document.getElementById("threeOfKindScore");
fourOfKindScore = document.getElementById("fourOfKindScore");
fullHouseScore = document.getElementById("fullHouseScore");
smallStraightScore = document.getElementById("smallStraightScore");
largeStraightScore = document.getElementById("largeStraightScore");
yahtzeeScore = document.getElementById("yahtzeeScore");
chanceScore = document.getElementById("chanceScore");
bonusYahtzeeScore = document.getElementById("bonusYahtzeeScore");
lowerTotal = document.getElementsByClassName("lowerTotal");
grandTotal = document.getElementById("grandTotal");
diceVal1 = 0;
diceVal2 = 0;
diceVal3 = 0;
diceVal4 = 0;
diceVal5 = 0;
audio = new Audio("audio/diceRoll.mp3")
var rolledDice = [];
var sortedDice = [];
upperTotal1 = document.getElementById("upperTotal1");
upperTotal2 = document.getElementById("upperTotal2");
lowerTotal1 = document.getElementById("lowerTotal1");
lowerTotal2 = document.getElementById("lowerTotal2");

bonusYahtzeeScore.className = "scoreCategoryClicked";

function rollFunc() 
{//start roll function

    audio.play();

    if (flag == 2)
    {
        rollButton.style.display = "none";
    }
    
    diceRollOne = Math.floor(Math.random() * 6) + 1;

    if (diceOne == 0)
    {//start rollFunc1

        if (diceRollOne == 1) 
        {//start dice one
            d1.src = "images/one.PNG";
            diceVal1 = 1;
        }//end dice one
        else if (diceRollOne == 2)
        {//start dice two
            d1.src = "images/two.PNG";
            diceVal1 = 2;
        }//end dice two
        else if (diceRollOne == 3)
        {//start dice three
            d1.src = "images/three.PNG";
            diceVal1 = 3;
        }//end dice three
        else if (diceRollOne == 4)
        {//start dice four
            d1.src = "images/four.PNG";
            diceVal1 = 4;
        }//end dice four
        else if (diceRollOne == 5)
        {//start dice five
            d1.src = "images/five.PNG";
            diceVal1 = 5;
        }//end dice five
        else
        {//start dice six
            d1.src = "images/six.PNG";
            diceVal1 = 6;
        }//end dice six

    }//end rollFunc1

    rollFunc2();

    function rollFunc2()
    {//start rollFunc2

        diceRollTwo = Math.floor(Math.random() * 6) + 1;

        if (diceTwo == 0)
        {//start dice roll two

            if (diceRollTwo == 1) 
            {//start dice one
                d2.src = "images/one.PNG";
                diceVal2 = 1;
            }//end dice one
            else if (diceRollTwo == 2)
            {//start dice two
                d2.src = "images/two.PNG";
                diceVal2 = 2;
            }//end dice two
            else if (diceRollTwo == 3)
            {//start dice three
                d2.src = "images/three.PNG";
                diceVal2 = 3;
            }//end dice three
            else if (diceRollTwo == 4)
            {//start dice four
                d2.src = "images/four.PNG";
                diceVal2 = 4;
            }//end dice four
            else if (diceRollTwo == 5)
            {//start dice five
                d2.src = "images/five.PNG";
                diceVal2 = 5;
            }//end dice five
            else
            {//start dice six
                d2.src = "images/six.PNG";
                diceVal2 = 6;
            }//end dice six

        }//end dice roll two

        rollFunc3();

    }//end rollFunc2

    function rollFunc3()
    {//start rollFunc3
        diceRollThree = Math.floor(Math.random() * 6) + 1;

        if (diceThree == 0)
        {//start dice roll three 
            if (diceRollThree == 1) 
            {//start dice one
                d3.src = "images/one.PNG";
                diceVal3 = 1;
            }//end dice one
            else if (diceRollThree == 2)
            {//start dice two
                d3.src = "images/two.PNG";
                diceVal3 = 2;
            }//end dice two
            else if (diceRollThree == 3)
            {//start dice three
                d3.src = "images/three.PNG";
                diceVal3 = 3;
            }//end dice three
            else if (diceRollThree == 4)
            {//start dice four
                d3.src = "images/four.PNG";
                diceVal3 = 4;
            }//end dice four
            else if (diceRollThree == 5)
            {//start dice five
                d3.src = "images/five.PNG";
                diceVal3 = 5;
            }//end dice five
            else
            {//start dice six
                d3.src = "images/six.PNG";
                diceVal3 = 6;
            }//end dice six

        }//end dice roll three

        rollFunc4();

    }//end rollFunc3

    function rollFunc4()
    {//start rollFunc4

        diceRollFour = Math.floor(Math.random() * 6) + 1;
    
        if (diceFour == 0)
        {//start dice roll four 
            if (diceRollFour == 1) 
            {//start dice one
                d4.src = "images/one.PNG";
                diceVal4 = 1;
            }//end dice one
            else if (diceRollFour == 2)
            {//start dice two
                d4.src = "images/two.PNG";
                diceVal4 = 2;
            }//end dice two
            else if (diceRollFour == 3)
            {//start dice three
                d4.src = "images/three.PNG";
                diceVal4 = 3;
            }//end dice three
            else if (diceRollFour == 4)
            {//start dice four
                d4.src = "images/four.PNG";
                diceVal4 = 4;
            }//end dice four
            else if (diceRollFour == 5)
            {//start dice five
                d4.src = "images/five.PNG";
                diceVal4 = 5;
            }//end dice five
            else
            {//start dice six
                d4.src = "images/six.PNG";
                diceVal4 = 6;
            }//end dice six
        }//end dice roll four

        rollFunc5();
    
    }//end rollFunc4

    function rollFunc5()
    {//start rollFunc5

        diceRollFive = Math.floor(Math.random() * 6) + 1;

        if (diceFive == 0)
        {//start dice roll five 
            if (diceRollFive == 1) 
            {//start dice one
                d5.src = "images/one.PNG";
                diceVal5 = 1;
            }//end dice one
            else if (diceRollFive == 2)
            {//start dice two
                d5.src = "images/two.PNG";
                diceVal5 = 2;
            }//end dice two
            else if (diceRollFive == 3)
            {//start dice three
                d5.src = "images/three.PNG";
                diceVal5 = 3;
            }//end dice three
            else if (diceRollFive == 4)
            {//start dice four
                d5.src = "images/four.PNG";
                diceVal5 = 4;
            }//end dice four
            else if (diceRollFive == 5)
            {//start dice five
                d5.src = "images/five.PNG";
                diceVal5 = 5;
            }//end dice five
            else
            {//start dice six
                d5.src = "images/six.PNG";
                diceVal5 = 6;
            }//end dice six
        }//end dice roll five

        flag++

    }//end rollFunc5

    rolledDice = [diceVal1, diceVal2, diceVal3, diceVal4, diceVal5];
    sortedDice = rolledDice.sort(function(a, b) {
        if (a > b) 
        {
            return 1;
        }
        else
        {
            return - 1;
        }
    });

    scoreCheck();

}//end roll function



function toggleFunc(diceNum)
{//toggle function start

    if (diceNum == 1)
    {//d1 check start

        if (diceOne == 0)
        {//start change flag 1
            diceOne = 1;
            d1.className = "saved";
        }//end change flag 1
        else
        {//start change flag 0
            diceOne = 0;
            d1.className = "unsaved";
        }//end change flag 0

    }//d1 check end

    else if (diceNum == 2)
    {//d2 check start

        if (diceTwo == 0)
        {//start change flag 1
            diceTwo = 1;
            d2.className = "saved";
        }//end change flag 1
        else
        {//start change flag 0
            diceTwo = 0;
            d2.className = "unsaved";
        }//end change flag 0

    }//d2 check end
    
    else if (diceNum == 3)
    {//d3 check start

        if (diceThree == 0)
        {//start change flag 1
            diceThree = 1;
            d3.className = "saved";
        }//end change flag 1
        else
        {//start change flag 0
            diceThree = 0;
            d3.className = "unsaved";
        }//end change flag 0

    }//d3 check end

    else if (diceNum == 4)
    {//d4 check start
        
        if (diceFour == 0)
        {//start change flag 1
            diceFour = 1;
            d4.className = "saved";
        }//end change flag 1
        else
        {//start change flag 0
            diceFour = 0;
            d4.className = "unsaved";
        }//end change flag 0

    }//d4 check end

    else if (diceNum == 5)
    {//d5 check start
        
        if (diceFive == 0)
        {//start change flag 1
            diceFive = 1;
            d5.className = "saved";
        }//end change flag 1
        else
        {//start change flag 0
            diceFive = 0;
            d5.className = "unsaved";
        }//end change flag 0

    }//d5 check end
    
}//toggle function end



function scoreCheck(){

    chanceScore.addEventListener("click", e => {
        chanceScore.innerHTML = sortedDice.reduce(function(a, b){
            return a + b;
        }, 0);

        resetFunc();
        totalScoreCheck();
    },
    {once: true}
    )

}

function scoreSelect(scoreType){
    if (scoreType == 'Ones')
    {//start ones score
        onesScore.className = "scoreCategoryClicked";
    }//end ones score
    else if (scoreType == 'Twos')
    {//start twos score
        twosScore.className = "scoreCategoryClicked";
    }//end twos score
    else if (scoreType == 'Threes')
    {//start threes score
        threesScore.className = "scoreCategoryClicked";
    }//end threes score
    else if (scoreType == 'Fours')
    {//start fours score
        foursScore.className = "scoreCategoryClicked";
    }//end fours score
    else if (scoreType == 'Fives')
    {//start fives score
        fivesScore.className = "scoreCategoryClicked";
    }//end fives score
    else if (scoreType == 'Sixes')
    {//start sixes score
        sixesScore.className = "scoreCategoryClicked";
    }//end sixes score
    else if (scoreType == 'ThreeOfKind')
    {//start 3 of kind score
        threeOfKindScore.className = "scoreCategoryClicked";
    }//end 3 of kind score
    else if (scoreType == 'FourOfKind')
    {//start 4 of kind score
        fourOfKindScore.className = "scoreCategoryClicked";
    }//end 4 of kind score
    else if (scoreType == 'FullHouse')
    {//start full house score
        fullHouseScore.className = "scoreCategoryClicked";
    }//end full house score
    else if (scoreType == 'SmallStraight')
    {//start sm straight score
        smallStraightScore.className = "scoreCategoryClicked";
    }//end sm straight score
    else if (scoreType == 'LargeStraight')
    {//start lg straight score
        largeStraightScore.className = "scoreCategoryClicked";
    }//end lg straight score
    else if (scoreType == 'Yahtzee')
    {//start yahtzee schore
        yahtzeeScore.className = "scoreCategoryClicked";
    }//end yahtzee score
    else if (scoreType == 'Chance')
    {//start chance score
        chanceScore.className = "scoreCategoryClicked";
    }//end chance score
    else if (scoreType == 'BonusYahtzee')
    {//start bonus yahtzee score
        bonusYahtzeeScore.className == "scoreCategoryClicked";
    }//end bonus yahtzee score
}

function totalScoreCheck(){

    if (subtotal >= 63)
    {
        bonus.innerHTML = 35;
    } 
    else
    {
        bonus.innerHTML = 0;
    }

    lowerTotal2.innerHTML = parseInt(chanceScore.innerHTML, 10);
    grandTotal.innerHTML = parseInt(lowerTotal2.innerHTML, 10);
    
}

function resetFunc()
{//start button reset
    rollButton.style.display = "block";
    flag = 0;
}//end button reset