'use strict'

// Chiedo all'utente i km che vuole percorrere e li salvo nella variabile km

const km = Number(prompt('Quanti km vuoi percorrere?'));

// Chiedo all'utente l'età e la salvo nella variabile userAge 

const userAge = Number(prompt('Inserisci la tua età'));

// Definisco la variabile priceKm = 0.21

const priceKm = 0.21;

// Calcolo il prezzo del biglietto (km * priceKm) e lo salvo nella variabile ticketPrice 

const ticketPrice = km * priceKm;

console.log('Prezzo senza sconto: €', ticketPrice);

// Definisco una variabile finalPrice per il prezzo già scontato

let finalPrice;

// Calcolo il prezzo scontato

if (userAge < 18) {
    finalPrice = (ticketPrice * 0.8);
} else if (userAge > 65) {
    finalPrice = (ticketPrice * 0.6);
} else {
    finalPrice = ticketPrice;
}

// Trasformo il prezzo in forma umana, lo salvo nella variabile finalRoundedPrice e lo mostro in console

const finalRoundedPrice = finalPrice.toFixed(2);
console.log('Prezzo finale del biglietto: €', finalRoundedPrice);