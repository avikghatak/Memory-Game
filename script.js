const cards = document.querySelectorAll('.memory-card');
let hasflippedcard = false;
let lockboard = false;
let firstcard , secondcard;
function flipcard(){
    if (lockboard) return;
    if( this == firstcard) return;
    this.classList.toggle('flip');
    if(!hasflippedcard){
        hasflippedcard=true;
        firstcard =this;
        
    }
    else{
        hasflippedcard =false;
        secondcard =this;
        checkformatch();
    }
}
function checkformatch(){
    if(firstcard.dataset.framework == secondcard.dataset.framework){
       disablecards()   }

else{
   unflipcards();
}}

function disablecards(){
    firstcard.removeEventListener('click', flipcard)        
        secondcard.removeEventListener('click', flipcard)
}

function unflipcards(){
    lockboard=true;
    setTimeout( ()=>{
        firstcard.classList.remove('flip')
        secondcard.classList.remove('flip')
        lockboard =false;
        },1500)
}
function resetboard(){
    [hasflippedcard , lockboard] = [false,false];
    [firstcard,secondcard] = [null,null];
}
(function shuffle(){
    cards.forEach(card=>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card=> card.addEventListener('click',flipcard))