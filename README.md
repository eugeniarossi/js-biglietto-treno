CONSEGNA

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca!

----------------------------------------

// Chiedo all'utente i km che vuole percorrere e li salvo nella variabile km

// Chiedo all'utente l'età e la salvo nella variabile userAge 

// Definisco la variabile priceKm = 0.21

// Calcolo il prezzo del biglietto (km * priceKm) e lo salvo nella variabile ticketPrice 

// Definisco una variabile finalPrice per il prezzo già scontato

// Calcolo lo sconto: SE (userAge < 18) {finalPrice = ticketPrice - (20% di ticketPrice)}
                            ALTRIMENTI SE (userAge > 65) {finalPrice = ticketPrice - (40% di ticketPrice)}
                            ALTRIMENTI {finalPrice = ticketPrice}

// Trasformo il prezzo in forma umana, lo salvo nella variabile finalRoundedPrice

// Mostro finalRoundedPrice in console
