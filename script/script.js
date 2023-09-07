// 1. Creare prompt(parseint) per ottenere dati dall'utente
// 2. Verificare che i dati inseriti siano corretti
// 3. Creare calcolo in base ai km percorsi
// 4. Applicare sconto al risultato del calcolo
// 5. Creare l'output del risultato finale


const age = parseInt (prompt("Ciao, benvenuto nella nostra biglietteria, abbiamo bisogo di farti alcune domande per farti conoscere il prezzo del biglietto che devi comprare, quindi, quanti anni hai?"))

const km = parseInt (prompt("Quanti km hai intenzione di percorrere con noi?"))

let message;


if (isNaN(age && km)) {
  message = "Inserire un numero per favore"
}





console.log(age);
console.log(km)
console.log(message);