// Kommentare sehen so aus 
// Konstatnte für PI 

const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;

console.log(PI);

/*
*
*  Nimm die Variable
*  Message entgegen und gibt diese
*  auf der Konsole aus
*
*/

let message = "Hallo David";
console.log(message);  // Konsolenausgabe über console.log() obvi

// Dynamisch typisierte Sprache
// Bei der Deklaration einer Variable wird kein DatenTyp übergeben 

let radius = 17; 
console.log(radius); // Integer
radius = "17";
console.log(radius); // String

/*
Variablen deklarieren mit var let und const 
var -> global
let und const -> lokale sichtbarkeit begrenzt auf Funktionsblock
*/

var x = 0; // Globally sichtbar

if (0 == 0) { 
    console.log(x);
    let a = 0;
    console.log(a);
}
// console.log(a); // geht ned 
// const ist obviously konstant und let variable like var und val

/*
DatenTypen in JS: <
Boolean, Null, Undefined, Number, Sring später --> Symbol und Object
Eine Variable der noch kein Wert zugewiesen wurde ist undefined

*/

console.log("\nAb hier kommen Schleifen\n");
// SCHLEIFEN

for (let x = 0; x < 10; x++){
    //console.log(x);
}

let y = 0; 
while (y < 10){
    //console.log(y);
    y++;
}

// FUNKTIONEN werden über das Schlüsselwort function definiert










