let wuerfel1;
let wuerfel2;
let punkte1 = 0;
let punkte2 = 0;
let versuche1 = 0;
let versuche2 = 0;

function wuerfeln() {

    wuerfel1 = Math.round(Math.random() * 5 + 1)
    wuerfel2 = Math.round(Math.random() * 5 + 1)
    versuche1 = versuche1 + 1

    punkte1 = punkte1 + wuerfel1 + wuerfel2

    document.getElementById("Würfel1").innerHTML = "Würfel 1: " + wuerfel1
    document.getElementById("Würfel2").innerHTML = "Würfel 2: " + wuerfel2
    document.getElementById("Versuche1").innerHTML = "Anzahl Würfe Spieler 1: " + versuche1

    if (wuerfel1 + wuerfel2 == 7) {
        punkte1 = punkte1 - 7
        document.getElementById("Ergebnis").innerHTML = "Spieler 2 ist dran! Oder teste dein Glück gegen einen Bot!"
        document.getElementById("w1").disabled = true

    }
    document.getElementById("Punkte1").innerHTML = "Summe Spieler 1: " + punkte1
//
    console.log(wuerfel1)
    console.log(wuerfel2)
    console.log(punkte1)
    console.log(versuche1)
//
}
function wuerfeln2() {

    wuerfel1 = Math.round(Math.random() * 5 + 1)
    wuerfel2 = Math.round(Math.random() * 5 + 1)
    versuche2 = versuche2 + 1

    punkte2 = punkte2 + wuerfel1 + wuerfel2

    document.getElementById("Würfel1").innerHTML = "Würfel 1: " + wuerfel1
    document.getElementById("Würfel2").innerHTML = "Würfel 2: " + wuerfel2
    document.getElementById("Versuche2").innerHTML = "Anzahl Würfe Spieler 2: " + versuche2

    if (wuerfel1 + wuerfel2 == 7) {
        punkte2 = punkte2 - 7
        document.getElementById("Ergebnis").innerHTML = "Spiel ist zu ende!!"
        document.getElementById("w2").disabled = true
        if (punkte1<punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 2. Du hast gewonnen!"
        }else if (punkte1==punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Unentschieden!"
        }else if (punkte1>punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 1. Du hast gewonnen!"
        }

    }else if (versuche1 == versuche2) {
        document.getElementById("Ergebnis").innerHTML = "Versuche verbraucht. Spiel ist zu ende!!"
        document.getElementById("w2").disabled = true
        if (punkte1<punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 2. Du hast gewonnen!"
        }else if (punkte1==punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Unentschieden!"
        }else if (punkte1>punkte2) {
            document.getElementById("Ergebnis2").innerHTML = "Glückwunsch Spieler 1. Du hast gewonnen!"
        }

    }
    document.getElementById("Punkte2").innerHTML = "Summe Spieler 2: " + punkte2
//
    console.log(wuerfel1)
    console.log(wuerfel2)
    console.log(punkte2)
    console.log(versuche2)
//

}
function beenden() {
    document.getElementById("w1").disabled = true
    document.getElementById("Ergebnis").innerHTML = "Spieler 2 ist dran! Oder teste dein Glück gegen einen Bot!"
}

function reset() {
    location.reload()
}