

class Pankki {
    constructor (tilinumero, saldo, historia, paivays) {
        this.tilinumero = tilinumero;
        this.saldo = saldo;
        this.historia = historia;
        this.paivays = paivays;
        }
    // Käyttää regexiä tarkistaakseen että syötetty tilinumero on muodossa 2kir, 2num, 4num, 4num, 4num, 2num.
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
    // Työntää talletuksen mukaisen summan historiaan, lisää varat ja ilmoittaa talletuksen päivämäärän.
    talletus() {
        this.historia.push(this.saldo)
        this.saldo += Number(prompt("Paljonko haluat tallettaa?"))
        this.paivays = new Date()
    }
    // if lause tarkistaa onko sinulla tarpeeksi varoja nostaa tietty summa ja laskee lopulta varasi. Pushhaa myös historiaan saldon.
    nosto() {
        var nostoSumma = Number(prompt("Paljonko haluat nostaa?"))
        if(this.saldo - nostoSumma < 0) {
            document.getElementById("eiVoiNostaa").innerHTML = "Et voi nostaa yli saldosi!";
        } else {
            this.historia.push(this.saldo)
            this.saldo -= nostoSumma;
        }

    }
    // tiliTiedoissa ei ihan hirveen kummallista ole, ilmoittaa saldon ja tilinumerosi.
    tiliTiedot() {
        document.getElementById("tiliNumeroLinkki").innerHTML = "Tilinumerosi on: " + this.tilinumero;
        document.getElementById("saldonMaara").innerHTML = "Saldosi on: " + this.saldo + "€";
    }
    // "paivaysmerkintä" ilmoittaa viimeisimmän talletuksen ajankohdan, "saldoEnnen" ilmoittaa saldon ennen viimeisintä tapahtumaa. 
    historiaLista() {
        document.getElementById("paivaysmerkinta").innerHTML = "Viimeisin talletus aikasi" + this.paivays;
        console.log(this.historia)
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen viimeisintä tapahtumaa: " + this.historia[this.historia.length-1] + "€";
    }
    // Kysyy nettotulosi ja laskee maksimi luoton, jonka saat. Laskee myös luoton määrän perusteella korkoprosentin, mitä lähempänä maksimia, sitä korkeampi prosentti. (maksimi 10%)
    luotto() {
        var nettoTulot = Number(prompt("Paljonko ovat nettotulosi?"))
        var maksimiLuotto = nettoTulot / 4;
        var otettuLuotto = Number(prompt("Voit ottaa luottoa korkeintaan " + maksimiLuotto + "€"))
        if(otettuLuotto > maksimiLuotto) {
            alert("Voit ottaa luottoa vain 0 - " + maksimiLuotto + "€ väliltä.")
        }
        else {
            var korkoProsentti = otettuLuotto / maksimiLuotto / 10;
            var luottoKorolla = Number(otettuLuotto + otettuLuotto * korkoProsentti);
            document.getElementById("takaisinMaksettavaLuotto").innerHTML = "Sinulla on " + luottoKorolla + "€ luottoa maksettavana.";
        }
    }

}
var jorma = new Pankki ("", 0, [], "")

