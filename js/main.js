

console.log(`
#######################################################
Benvenuto nel nostro affidabilissimo Password-Generator
#######################################################

>Ti verrà chiesto di inserire una serie di informazioni 
>con lo scopo di calcolare una password sicura ed affidabile
>che ti verrà comunicata all'interno della tua card

#######################################################
`);

let nome = prompt("Inserisci il tuo nome.", "Pinco");
document.getElementById("nomejs").innerHTML = nome; 

let cognome = prompt("Inserisci il tuo cognome.", "Pallino");
document.getElementById("cognomejs").innerHTML = cognome; 

let colore = prompt("Inserisci il tuo colore preferito.", "giallo");
document.getElementById("colorejs").innerHTML = colore; 

let primonumero = prompt("Inserisci un numero a tua scelta. " , "0");
primonumero = parseFloat(primonumero);
document.getElementById("num1js").innerHTML = primonumero; 
console.log(primonumero);

let secondonumero = prompt("Inserisci un'altro numero a tua scelta, possibilmente più piccolo del precedente.", "0");
secondonumero = parseFloat(secondonumero);
document.getElementById("num2js").innerHTML = secondonumero; 
console.log(secondonumero);

let pwcode = primonumero / secondonumero;
pwcode = parseInt(pwcode);
console.log(pwcode);

let randonum = Math.random() * 99;
randonum = parseInt(randonum);
console.log(randonum);

const password = nome + cognome + colore + pwcode + randonum;
document.getElementById("passwordjs").innerHTML = password;  

console.log(`
#######################################
Eccellente, ecco qui la tua password
#######################################

${password}

#######################################


`);





