// 1. Creare prompt(parseint) per ottenere dati dall'utente
// 2. Verificare che i dati inseriti siano corretti
// 3. Creare calcolo in base ai km percorsi
// 4. Applicare sconto al risultato del calcolo
// 5. Creare l'output del risultato finale

// DATI: 0.21€ al KM -- 20% per minori di 18 -- 40% per i maggiori di 65


const age = parseInt (prompt("Ciao, benvenuto nella nostra biglietteria, abbiamo bisogo di farti alcune domande per farti conoscere il prezzo del biglietto che devi comprare, quindi, quanti anni hai?"))
const km = parseInt (prompt("Quanti km hai intenzione di percorrere con noi?"))



let price;
let message;
let datiValidi = true
let priceUA;
let priceA;


if (isNaN(age && km)) {
  message = "Inserire un numero per favore"
  datiValidi = false
}

if (datiValidi) {
  price = km * 0.21
  console.log(price);
}

if (age < 18) {
  priceUA = price * 80/100 
  console.log (priceUA);
  document.getElementById('output').innerHTML = `Hai meno di 18 anni quindi avrai uno sconto del 20%, invece di pagare ${price}€ pagherai soli ${priceUA}€`
} else if (age > 64) {
  priceA = price * 60/100
  console.log(priceA);

}

console.log(age);
console.log(km);
console.log(message);






