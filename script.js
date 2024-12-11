
function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector("#day").textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);

function rollSingleDice() {
    return Math.floor(Math.random() * 6) + 1;
}


function rollDice() {
    const result1 = rollSingleDice();
    const result2 = rollSingleDice();

    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

   
    dice1.textContent = result1;
    dice2.textContent = result2;

   
    dice1.classList.add("roll");
    dice2.classList.add("roll");

   
    setTimeout(() => {
        dice1.classList.remove("roll");
        dice2.classList.remove("roll");
    }, 500);

 
    function setDiceImage1(dice1, result1) {
    
    if (result1 === 1) {
        dice1.src = "./dice-1.svg";
    } else if (result1 === 2) {
        dice1.src = "./dice-2.svg";
    } else if (result1 === 3) {
        dice1.src = "./dice-3.svg";
    } else if (result1 === 4) {
        dice1.src = "./dice-4.svg";
    } else if (result1 === 5) {
        dice1.src = "./dice-5.svg";
    } else if (result1 === 6) {
        dice1.src = "./dice-6.svg";
    }
    
  }
  function setDiceImage2(dice2, result2) {
    if (result2 === 1) {
        dice2.src = "./dice-1.svg";
    } else if (result2 === 2) {
        dice2.src = "./dice-2.svg";
    } else if (result2 === 3) {
        dice2.src = "./dice-3.svg";
    } else if (result2 === 4) {
        dice2.src = "./dice-4.svg";
    } else if (result2 === 5) {
        dice2.src = "./dice-5.svg";
    } else if (result2 === 6) {
        dice2.src = "./dice-6.svg";
    }
    
}
setDiceImage1(dice1,result1);
setDiceImage2(dice2,result2);
  
    const total = result1 + result2;
    const resultMessage = document.getElementById('total');

    if (total >= 8) {
        resultMessage.textContent = `Total: ${total}\nMore than 8: Win\nYou Win!`;
    } else {
        resultMessage.textContent = `Total: ${total}\nLess than 8: Lose\nYou didn't win: Try Again!`;
    }
}


const rollButton = document.getElementById("btn");
rollButton.addEventListener("click", rollDice);
