// declaring generic variables

const button = document.getElementById("form-btn");
const imputName = document.getElementById("name");
const imputSurname = document.getElementById("surname");
const imputAge = document.getElementById("age");
const travelLenght = document.getElementById("km");

// calcolo il prezzo del biglietto senza sconti


// put a listener to the button 

button.addEventListener("click", function () {
    const imputName = nome.value;
    const imputSurname = surname.value;
    const imputAge = parseInt(age.value);
    const TLenght = parseInt(travelLenght.value);

    console.log(imputName, imputSurname, imputAge, TLenght)
    // calcolo del costo per intero del biglietto 
    let ticketPrice = 0.21 * TLenght;
    console.log(ticketPrice)

    // ciclo if per determinare se l'eta e maggiore di 64 oppure di 18 oppure compresa tra i 2 valori 

    if (imputAge < 18) {
        ticketPrice *= 0.8;
    }
    else if (imputAge > 65) {
        ticketPrice *= 0.6;
    }

    console.log(ticketPrice);

    // faccio visualizzare il risultato a schermo
    const result = document.getElementById("result");
    document.getElementById("result").innerHTML = `<p> Il prezzo del suo biglietto &egrave; ${ticketPrice} &euro; ! </p>`
})