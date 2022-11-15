
let MKA = document.querySelector('.MKA')
let texte= document.querySelector('.texte')
const SPB= document.querySelector('.SPB')

function changePosition() {
  const rndInt = Math.floor(Math.random() * 900
  ) + 1
    console.log(rndInt)
    MKA.style.top = `${rndInt}px`
    MKA.style.left = `${rndInt}px`
    
}

MKA.addEventListener("click", function(){
  MKA.style.backgroundColor= "white"
  setInterval(changePosition, 2000)
  
});

function reactionSPB(event2) {
  event2.target.style.backgroundColor="purple"
}

SPB.addEventListener("click", reactionSPB);


 texte.addEventListener("click",function(event) {
     event.target.style.color= "purple";
    console.log('Truc')
}  ) 
