//let message = "Bonjour !";
//console.log(message);

//let firstname = "Beyoncé"
//console.log(firstname)

//let firstname = "Beyoncé";
//let message = `Bonjour ! ${firstname} !`;
//console.log(message)

//function sayhello(firstname){
 //let message = `Bonjour ! ${firstname} !`;   
//console.log(message)
//}
//sayhello()
//sayhello("Beyoncé")

function sayhello(firstname, hour){

if (hour >= 18)
    return `bonsoir ${firstname} !`

else {
    return `bonjour ${firstname} !`
}
}


console.log(sayhello(`Beyonce`, 11));
console.log(sayhello(`Beyonce`, 18));
console.log(sayhello(`Beyonce`, 17));
