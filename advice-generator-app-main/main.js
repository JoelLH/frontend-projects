
let idEl= document.getElementById("id");
let quoteEl= document.getElementById("quote");
let diceEl= document.getElementById("dice");
let quote;

diceEl.addEventListener("click",function(){
    fetch('https://api.adviceslip.com/advice')          
    .then(response => response.json())
    .then(function(data) {
    const{advice, id} = data.slip;
    quoteEl.textContent = `"${advice}"`
    idEl.textContent = `ADVICE #${id}`
    } );
    
})