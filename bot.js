let wuerfelBot1;
let wuerfelBot2;
let punktebot = 0;
let versuchebot = 0;
let x = 0


function wuerfelbot() {
    document.getElementById("w2").disabled = true
    while (x==0) {
    wuerfelBot1 = Math.round(Math.random() * 5 + 1)
    wuerfelBot2 = Math.round(Math.random() * 5 + 1)
    versuchebot = versuchebot + 1

    punktebot = punktebot + wuerfelBot1 + wuerfelBot2

    document.getElementById("Würfel1").innerHTML = "Würfel 1: " + wuerfelBot1
    document.getElementById("Würfel2").innerHTML = "Würfel 2: " + wuerfelBot2
    document.getElementById("Versuchebot").innerHTML = "Anzahl Würfe Bot: " + versuchebot

        if (wuerfelBot1 + wuerfelBot2 == 7) {
            x = x + 1
            punktebot = punktebot - 7
            document.getElementById("Ergebnis").innerHTML = "Spiel ist zu ende!"
            if (punkte1<punktebot) {
                document.getElementById("Ergebnis2").innerHTML = " Der Bot hat gewonnen!"
            }else if (punkte1==punktebot) {
                document.getElementById("Ergebnis2").innerHTML = "Unentschieden!"
            }else if (punkte1>punktebot) {
                document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 1. Du hast gewonnen!"
            }

        }else if (versuche1 == versuchebot) {
            x = x + 1
            document.getElementById("Ergebnis").innerHTML = "Versuche verbraucht. Spiel ist zu ende!!"
            document.getElementById("w2").disabled = true
            if (punkte1<punktebot) {
                document.getElementById("Ergebnis2").innerHTML = "Der Bot hat gewonnen!"
            }else if (punkte1==punktebot) {
                document.getElementById("Ergebnis2").innerHTML = "Unentschieden!"
            }else if (punkte1>punktebot) {
                document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 1. Du hast gewonnen!"
            }

        }
        document.getElementById("Punktebot").innerHTML = "Summe Bot: " + punktebot
//
    console.log(wuerfelBot1)
    console.log(wuerfelBot2)
    console.log(punktebot)
    console.log(versuchebot)
//
        }
}

