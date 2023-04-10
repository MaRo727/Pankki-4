

class Pankki {
    constructor (tilinumero, saldo, historia, paivays) {
        this.tilinumero = tilinumero;
        this.saldo = saldo;
        this.historia = historia;
        this.paivays = paivays;
        }
    
    tiliNumeronSyotto() {
        var tiliNumeroTarkastus = 0;
        this.tilinumero = prompt("Syötä tilinumerosi");
            var regex = /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{2} ?[\d]{0,0}/;
            if(regex.test(this.tilinumero)){
                tiliNumeroTarkastus = 1;
            } else {
                tiliNumeroTarkastus = 0
            }
            if(tiliNumeroTarkastus == 1) {
                alert("Tilinumero on kelvollinen")
            } else {
                alert("Tilinumero on epäkelvollinen")
            }
        }      
    talletus() {
        this.historia.push(this.saldo)
        this.saldo += Number(prompt("Paljonko haluat tallettaa?"))
        this.paivays = new Date()
    }
    nosto() {
        var nostoSumma = Number(prompt("Paljonko haluat nostaa?"))
        if(this.saldo - nostoSumma < 0) {
            document.getElementById("eiVoiNostaa").innerHTML = "Et voi nostaa yli saldosi!";
        }
        this.historia.push(this.saldo)
        this.saldo -= nostoSumma;

    }
    tiliTiedot() {
        document.getElementById("tiliNumeroLinkki").innerHTML = "Tilinumerosi on: " + this.tilinumero;
        document.getElementById("saldonMaara").innerHTML = "Saldosi on: " + this.saldo + "€";
    }
    historiaLista() {
        document.getElementById("paivaysmerkinta").innerHTML = "Viimeisin talletus aikasi" + this.paivays;
        console.log(this.historia)
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen viimeisintä tapahtumaa: " + this.historia[this.historia.length-1] + "€";
    }

}
var jorma = new Pankki ("", 0, [], "")

