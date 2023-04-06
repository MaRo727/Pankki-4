
var numeroDeTili = prompt("tilinumerosi");

class Pankki {
    constructor (tilinumero, saldo, historia, paivays) {
        this.tilinumero = tilinumero;
        this.saldo = saldo;
        this.historia = historia;
        this.paivays = paivays;
    }
    talletus() {
        this.historia.push(this.saldo)
        this.saldo += Number(prompt("Paljonko haluat tallettaa?"))
        this.paivays = new Date()
    }
    nosto() {
        this.historia.push(this.saldo)
        this.saldo -= Number(prompt("Paljonko haluat nostaa?"))
    }
    tiliTiedot() {
        document.getElementById("tiliNumeroLinkki").innerHTML = "Tilinumerosi on: " + this.tilinumero;
        document.getElementById("saldonMaara").innerHTML = "Saldosi on: " + this.saldo + "€";
    }
    historiaLista() {
        document.getElementById("paivaysmerkinta").innerHTML = "Viimeisin talletus aikasi" + this.paivays;
        console.log(this.historia)
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen viimeisintä tapahtumaa: " + this.historia[this.historia.length-1];
    }
}
var jorma = new Pankki (numeroDeTili, 0, [], "")