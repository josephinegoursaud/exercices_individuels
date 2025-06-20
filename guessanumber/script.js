let numberToGuess = 22;

//PARTIE 1
function asknumber (){
    let givenNumber = parseInt(prompt ("what is the number"));
return givenNumber
}

// PARTIE 2
function didIWin (givenNumber, numberToGuess){ 
    
    if (givenNumber < numberToGuess){
        alert("plus grand")
        return false
    } 
    else if( givenNumber > numberToGuess){
        alert("plus petit")
        return false
    }
    else if (givenNumber === numberToGuess){
        alert("Bravo ! Vous avez deviné le nombre")
        return true
    } 
}


function gamePlay(givenNumber) {
    while (!didIWin(givenNumber, numberToGuess) !== true) {
       
   }
   return
}
gamePlay(asknumber())

//   PARTIE 3  

// function didIWin(){numberToGuess}
// let userfindnumber= true; 
// let notfind = false, 

// if userfindnumber{
//     console.log( "l'utilisateur a trouvé le bon chiffre")
//     if notfind {
//         console.log( "l'utilisateur n'a pas trouve le bon chiffre")
//     }
// }
   


//while (!didIWin(asknumber)) {
  //       numberToGuess = givenNumber()

//}

//}
//gamePlay();
//         let givenNumber = asknumber()

//         while (!didIWin(givenNumber)) {
//         givenNumber = asknumber()
//     }
// }

//gamePlay();






