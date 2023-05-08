let randomDiceOne = Math.floor(Math.random()*6)+1;
let randomDiceTwo = Math.floor(Math.random()*6)+1;

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
dice1.setAttribute('src',`images/dice${randomDiceOne}.png`);
dice2.setAttribute('src',`images/dice${randomDiceTwo}.png`);
let heading = document.querySelector('h1');
if(randomDiceOne>randomDiceTwo){
    heading.innerHTML='Player 1 wins';
}else if(randomDiceOne===randomDiceTwo){
    heading.innerHTML='Draw';
}else{
    heading.innerHTML ='Player 2 wins';
}

