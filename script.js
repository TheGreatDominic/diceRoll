var diceOne, diceTwo, diceThree, diceFour, diceFive;
var rollButton, diceContainer, flag;
var diceRollOne, diceRollTwo, diceRollThree, diceRollFour, diceRollFive;
var d1, d2, d3, d4, d5;

diceOne = document.getElementById("diceOne");
diceTwo = document.getElementById("diceTwo");
diceThree = document.getElementById("diceThree");
diceFour = document.getElementById("diceFour");
diceFive = document.getElementById("diceFive");
diceRollOne = "";
diceRollTwo = "";
diceRollThree = "";
diceRollFour = "";
diceRollFive = "";
rollButton = document.getElementById("rollButton");
diceContainer = document.getElementsByClassName("diceContainer");
flag = 0;
d1 = 0;
d2 = 0;
d3 = 0;
d4 = 0;
d5 = 0;
flag = 0;


function rollFunc() 
{//start roll function

    if (flag == 2){
        rollButton.disabled = "true";
    }

    diceRollOne = Math.floor(Math.random() * 6) + 1;

    if (d1 == 0)
    {//start rollFunc1

        if (diceRollOne == 1) 
        {//start dice one
            diceOne.src = "images/one.PNG";
        }//end dice one
        else if (diceRollOne == 2)
        {//start dice two
            diceOne.src = "images/two.PNG";
        }//end dice two
        else if (diceRollOne == 3)
        {//start dice three
            diceOne.src = "images/three.PNG";
        }//end dice three
        else if (diceRollOne == 4)
        {//start dice four
            diceOne.src = "images/four.PNG";
        }//end dice four
        else if (diceRollOne == 5)
        {//start dice five
            diceOne.src = "images/five.PNG";
        }//end dice five
        else
        {//start dice six
            diceOne.src = "images/six.PNG";
        }//end dice six

    }//end rollFunc1

    rollFunc2();

    function rollFunc2()
    {//start rollFunc2

        diceRollTwo = Math.floor(Math.random() * 6) + 1;

        if (d2 == 0)
        {//start dice roll two

            if (diceRollTwo == 1) 
            {//start dice one
                diceTwo.src = "images/one.PNG";
            }//end dice one
            else if (diceRollTwo == 2)
            {//start dice two
                diceTwo.src = "images/two.PNG";
            }//end dice two
            else if (diceRollTwo == 3)
            {//start dice three
                diceTwo.src = "images/three.PNG";
            }//end dice three
            else if (diceRollTwo == 4)
            {//start dice four
                diceTwo.src = "images/four.PNG";
            }//end dice four
            else if (diceRollTwo == 5)
            {//start dice five
                diceTwo.src = "images/five.PNG";
            }//end dice five
            else
            {//start dice six
                diceTwo.src = "images/six.PNG";
            }//end dice six

        }//end dice roll two

        rollFunc3();

    }//end rollFunc2

    function rollFunc3()
    {//start rollFunc3
        diceRollThree = Math.floor(Math.random() * 6) + 1;

        if (d3 == 0)
        {//start dice roll three 
            if (diceRollThree == 1) 
            {//start dice one
                diceThree.src = "images/one.PNG";
            }//end dice one
            else if (diceRollThree == 2)
            {//start dice two
                diceThree.src = "images/two.PNG";
            }//end dice two
            else if (diceRollThree == 3)
            {//start dice three
                diceThree.src = "images/three.PNG";
            }//end dice three
            else if (diceRollThree == 4)
            {//start dice four
                diceThree.src = "images/four.PNG";
            }//end dice four
            else if (diceRollThree == 5)
            {//start dice five
                diceThree.src = "images/five.PNG";
            }//end dice five
            else
            {//start dice six
                diceThree.src = "images/six.PNG";
            }//end dice six

        }//end dice roll three

        rollFunc4();

    }//end rollFunc3

    function rollFunc4()
    {//start rollFunc4

        diceRollFour = Math.floor(Math.random() * 6) + 1;
    
        if (d4 == 0)
        {//start dice roll four 
            if (diceRollFour == 1) 
            {//start dice one
                diceFour.src = "images/one.PNG";
            }//end dice one
            else if (diceRollFour == 2)
            {//start dice two
                diceFour.src = "images/two.PNG";
            }//end dice two
            else if (diceRollFour == 3)
            {//start dice three
                diceFour.src = "images/three.PNG";
            }//end dice three
            else if (diceRollFour == 4)
            {//start dice four
                diceFour.src = "images/four.PNG";
            }//end dice four
            else if (diceRollFour == 5)
            {//start dice five
                diceFour.src = "images/five.PNG";
            }//end dice five
            else
            {//start dice six
                diceFour.src = "images/six.PNG";
            }//end dice six
        }//end dice roll four

        rollFunc5();
    
    }//end rollFunc4

    function rollFunc5()
    {//start rollFunc5

        diceRollFive = Math.floor(Math.random() * 6) + 1;

        if (d5 == 0)
        {//start dice roll five 
            if (diceRollFive == 1) 
            {//start dice one
                diceFive.src = "images/one.PNG";
            }//end dice one
            else if (diceRollFive == 2)
            {//start dice two
                diceFive.src = "images/two.PNG";
            }//end dice two
            else if (diceRollFive == 3)
            {//start dice three
                diceFive.src = "images/three.PNG";
            }//end dice three
            else if (diceRollFive == 4)
            {//start dice four
                diceFive.src = "images/four.PNG";
            }//end dice four
            else if (diceRollFive == 5)
            {//start dice five
                diceFive.src = "images/five.PNG";
            }//end dice five
            else
            {//start dice six
                diceFive.src = "images/six.PNG";
            }//end dice six
        }//end dice roll five

        flag++

    }//end rollFunc5

}//end roll function

function toggleFunc1()
{//start toggle function1

if (d1 == 0)

    {//start change flag 1
        d1 = 1;
        diceOne.className = "saved";
    }//end change flag 1
    else
    {//start change flag 0
        d1 = 0;
        diceOne.className = "unsaved";
    }//end change flag 0

}//end toggle function1

function toggleFunc2()
{//start toggle function2

if (d2 == 0)

    {//start change flag 1
        d2 = 1;
        diceTwo.className = "saved";
    }//end change flag 1
    else
    {//start change flag 0
        d2 = 0;
        diceTwo.className = "unsaved";
    }//end change flag 0

}//end toggle function2

function toggleFunc3()
{//start toggle function3

if (d3 == 0)

    {//start change flag 1
        d3 = 1;
        diceThree.className = "saved";
    }//end change flag 1
    else
    {//start change flag 0
        d3 = 0;
        diceThree.className = "unsaved";
    }//end change flag 0

}//end toggle function3

function toggleFunc4()
{//start toggle function4

if (d4 == 0)

    {//start change flag 1
        d4 = 1;
        diceFour.className = "saved";
    }//end change flag 1
    else
    {//start change flag 0
        d4 = 0;
        diceFour.className = "unsaved";
    }//end change flag 0

}//end toggle function4

function toggleFunc5()
{//start toggle function5

if (d5 == 0)

    {//start change flag 1
        d5 = 1;
        diceFive.className = "saved";
    }//end change flag 1
    else
    {//start change flag 0
        d5 = 0;
        diceFive.className = "unsaved";
    }//end change flag 0

}//end toggle function5