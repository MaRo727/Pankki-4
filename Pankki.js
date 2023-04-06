
var numeroDeTili = prompt("tilinumerosi");

class Pankki {
    constructor (tilinumero, saldo, historia, paivays, x) {
        this.tilinumero = tilinumero;
        this.saldo = saldo;
        this.historia = historia;
        this.paivays = paivays;
        this.x = x;
    }
    talletus() {
        this.historia.push(this.saldo)
        this.saldo += Number(prompt("Paljonko haluat tallettaa?"))
        this.paivays = new Date()
        this.x += 1;
    }
    tiliTiedot() {
        document.getElementById("tiliNumeroLinkki").innerHTML = "Tilinumerosi on: " + this.tilinumero;
        document.getElementById("saldonMaara").innerHTML = "Saldosi on: " + this.saldo + "€";
    }
    historiaLista() {
        document.getElementById("paivaysmerkinta").innerHTML = "Viimeisin talletus aikasi" + this.paivays;
        console.log(this.historia)
        console.log(this.x)
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen viimeisintä tapahtumaa: " + this.historia[this.x];
    }
}
var jorma = new Pankki (numeroDeTili, 0, [], "", 0)