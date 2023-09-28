if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")

let player={
    name:"Sabi",
    chips:208
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

function getRandomCard(){
    let randomNewCard=Math.floor(Math.random()*13)+1
    if(randomNewCard===1){return 11}
    else if(randomNewCard>10){return 10}
    else{return randomNewCard}
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
if(sum<21){
    message="Do you want to draw a new card ?"
}
else if(sum===21){
    message="Congrats! You've got Blackjack!"
    hasBlackJack=true
}
else{
    message="You're out of the game!"
    isAlive=false
}
messageEl.textContent=message
sumEl.textContent="Sum: "+sum
cardsEl.textContent="Cards: "
for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
}
}
function newCard(){
    if(isAlive===true&&hasBlackJack===false){
    console.log("Drawing a new card from the deck!")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
}}