/*
Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.


Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare
del preventivo per le ore di lavoro richieste.

Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€


L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e
il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana”
(con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :cara_ligeramente_sonriente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul
bottone Send che è di tipo submit (type=submit).
*/

document.getElementById("buttonSend").addEventListener("click", function () {
  let hoursrequested = document.getElementById("inputHoursRequested").value;
  let typeOfWork = document.getElementById("inputTypeOfWork").value;
  let PricePreventive = 0;

  let prezzoPreventivo = preventivoLavoro(hoursrequested, typeOfWork, PricePreventive);

  function preventivoLavoro(oreRichieste, tipolavoro, preventivo) {
    if (tipolavoro === "backend") preventivo = oreRichieste * 20.5;
    if (tipolavoro === "frontend") preventivo = oreRichieste * 15.3;
    if (tipolavoro === "analysis") preventivo = oreRichieste * 33.6;
    console.log(`Il prezzo del Preventivo è: ${preventivo}`);
  }
});
