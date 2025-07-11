// ETAPE 1 :
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList.
//  Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, 
// et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]



// function getLatinCharacterList(texte) {
//     let letters = texte.split("");   // pour transformer le texte en tableau de caractères
//     return letters;
// }
// let message= getLatinCharacterList ("hello, world")
// console.log(message)


//ETAPE 2:
//À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance 
// entre les caractères alphabets latin et l’alphabet morse.
//Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
//Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

// import { latinToMorse } from './annexe1.js'

// function translateLatinCharacter(character){

//   const upperChar = character.toUpperCase();// il sert a convertir le caractère reçu en majuscule
//   return latinToMorse[upperChar] || null;
// }

// console.log(translateLatinCharacter("A"));
   


//ETAPE 3:
 //Ajouter une nouvelle fonction encode qui prend en paramètre du texte et 
 // qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
//Attention: la table de correspondance ne contient que des caractères majuscules


// function encode(texte) {

// let letters = texte.split("");   
//  const upperChar = character.toUpperCase()

// for (let i = 0; i < letters.length; i++) {
// console.log(i)
//  }

// }
// let message= encode("hello, world")
//  console.log(message)

//ETAPE 4:
//Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. 
// Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait 
// pour le encode pour créer une fonction decode. Dans cet exercice, on admettra
//  que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.
 
 import { morseToLatin } from './annexe2.js'


 function getMorseCharacterList(morsecode){
   return morsecode.split(" / ")

}
 console.log(getMorseCharacterList())


function translateMorseCharacter(morsecharacter) {

}
//     const morseToLatin = {}
//        }

// let morsetoletters = getMorseCharacterList(code)



function decode(morseText){

}
