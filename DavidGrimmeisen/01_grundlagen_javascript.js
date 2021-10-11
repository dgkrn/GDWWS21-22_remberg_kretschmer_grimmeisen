// Aufgabenblatt 1 \\


// Aufgabe 1. Meinen Namen auf der Konsole ausgeben 
let myName = "David";
console.log(myName);
// oder
console.log("Hallo mein Name ist David");

console.log("\n-------------------------------------\n");

// Aufgabe 2.
const maxRating = 5;
var ratingCount; 
var ratingStore; 

ratingStore = 0;
ratingCount = 10;

ratingStore = createRandomRating(ratingStore,ratingCount);
console.log(ratingStore);

// ratingStore = "Ich bin jetzt ein String";
// console.log(ratingStore);
// Da JS keine typisierte Sprache ist, lassen sich alle Typen jeder Variable zuweisen --> Dynamisch typisiert
// Bei der Deklaration wird ebenfalls kein Typ übergeben

// maxRating = 5+1;
// Konstanten lassen sich nicht neu zuweisen. 
// --> TypeError: Assignment to constant variable

// Aufgabe 3


const readline = require('readline');   // Require the Module
const rl = readline.createInterface({   // Create Instance of readline interface by using 
    input: process.stdin,               // createInterface method and save in constant
    output: process.stdout
});                                     
// Wenn die Methode ausgeführt wird returned sie unser readline interface Objekt (gespeichert int rl)

userInput();


/****************************************************************************************************************************/

function userInput(){

    rl.question("Bitte geben Sie eine Bewertung für die App ein.\n",
    (userInput) => {
        if (userInput <= maxRating){
            console.log(`Ihre Bewertung beträgt ${userInput}`)

            ratingStore = (ratingStore * ratingCount + Number(userInput)) / ++ratingCount;
            ratingStore = ratingStore.toFixed(2) // Runden auf 2 Nachkommstellen

            console.log("Die Bewertung der App liegt nun bei: "+ratingStore+"\n");
            rl.close();
        } else {
            rl.setPrompt(`Leider war Ihre Eingabe von ${userInput} ungültig.\nVersuchen Sie es erneut.\n`);
            rl.prompt();
            rl.close();
        }
    });   
}

// Random Ratings generieren
function createRandomRating(store, count){
    for (let x = 0; x < count; x++){
        store += Math.floor(Math.random()*maxRating);
    } 

    store = store/count; // Ergebnis in ratingStore speichern
    return store

}




















