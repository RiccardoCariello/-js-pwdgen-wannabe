console.log(`
#######################################################
Benvenuto nel nostro affidabilissimo Password-Generator
#######################################################

>Ti verrà chiesto di inserire una serie di informazioni 
>con lo scopo di calcolare una password sicura ed affidabile
>che ti verrà comunicata all'interno della tua card

#######################################################
`);

let nome = prompt("Inserisci il tuo nome.");

let cognome = prompt("Inserisci il tuo cognome.");

let colore = prompt("Inserisci il tuo colore preferito.");

let primonumero = prompt("Inserisci un numero a tua scelta. " , "0");
primonumero = parseFloat(primonumero);

let secondonumero = prompt("Inserisci un'altro numero a tua scelta, possibilmente più piccolo del precedente.", "0");
secondonumero = parseFloat(secondonumero);

let pwcode = primonumero / secondonumero;
pwcode = parseInt(pwcode);

let randonum = Math.random() * 99;
randonum = parseInt(randonum);

const password = nome + cognome + colore + pwcode + randonum;

console.log(`
#######################################
Eccellente, ecco qui la tua password
#######################################

${password}

#######################################


`);






