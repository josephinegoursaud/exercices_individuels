const COLORS = ['R', 'G', 'B', 'Y']; // red, green, blue, yellow
const PAWN = ['R', 'G']; // red and green
const ATTEMPTS = 12; //12 essais pour trouver la bonne combinaison.


function validatecolors(playerGuess){
        for (let i = 0; i < playerGuess.length; i++) {
        if (!COLORS.includes(playerGuess[i])) {
            return false; 
        }
    }
    return true; 
}
    
    
function combinationFound(playerGuess, secretCombination) {
    if (playerGuess.length !== secretCombination.length) {
        return false;
    }
     for (let i = 0; i < playerGuess.length; i++) {
        if (playerGuess[i] !== secretCombination[i]) {
            return false; 
        }
    }
    return true; 
}


function playgame (){

}


//Etape 2 :
