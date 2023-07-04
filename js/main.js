/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. La stampa può essere fatta ovviamente in console.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare passo dopo passo
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" anche su un foglietto
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
COME BONUS:
BONUS 1
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta, così come fatto in classe questa mattina.
BONUS 2
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.*/

//dichiarazione di variabile
let a = "Fizz";
let b = "Buzz";
let c = "FizzBuzz";
//stampo i numeri da 1 a 100 usando un ciclo for
for (let i = 1; i <= 100; i++) {
 //stampo Fizz per i multipli di 3
    if (i % 3 == 0) {

        console.log(a);
// stampo buzz per i multipli di 5
    } else if (i % 5 == 0) {
        console.log(b);
    }

    else { console.log(i); }
// stampo fizzbuzz per multipli di 3 e 5
 if (i % 3 == 0 && i % 5 == 0) {
        console.log(c);
    }

}
