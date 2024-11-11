// Oppgave 1

function myFunction() {
    var numbero = (document.getElementById("number1").value);
    var numbert = (document.getElementById("number2").value);
    var shortcut = document.getElementById("demo");

    shortcut.innerHTML = numbero + " " + numbert;
}

// Oppgave 2

function myPhonktion() {
    var tall1 = parseFloat(document.getElementById("tall1").value);
    var shortcut = document.getElementById("demo2");
    
    if (tall1>0) {
        shortcut.innerHTML = tall1 + " er positivt";
    } else if (tall1<0) {
        shortcut.innerHTML = tall1 + " er negativt";
    }
}

// Oppgave 3

function mySigtion() {
    var tall2 = parseFloat(document.getElementById("tall2").value);
    var tall3 = parseFloat(document.getElementById("tall3").value);
    var shortcut = document.getElementById("demo3");

    if (tall2 > tall3) {
        shortcut.innerHTML = tall2 + " er størst";
    } else if (tall2 < tall3) {
        shortcut.innerHTML = tall3 + " er størst";
    }
}

// Oppgave 4

function myBalktion() {
    var tall4 = parseFloat(document.getElementById("tall4").value);
    var tall5 = parseFloat(document.getElementById("tall5").value);
    var tall6 = parseFloat(document.getElementById("tall6").value);
    var shortcut = document.getElementById("demo4");

    // if (tall4 > tall5 && tall6) {
    //     shortcut.innerHTML = tall4 + " er størst";
    // } 
    // else if (tall5 > tall4 && tall6) {
    //     shortcut.innerHTML = tall5 + " er størst";
    // }
    // else if (tall6 > tall4 && tall5) {
    //     shortcut.innerHTML = tall6 + " er størst";
    // }
    var svar = Math.max(tall4, tall5, tall6)
    shortcut.innerHTML = svar + " " + "er størst"
}

// Oppgave 5 

function myStilltion() {
    var tall7 = parseFloat(document.getElementById("tall7").value);
    var shortcut = document.getElementById("demo5")

    if (tall7>=50) {
        shortcut.innerHTML = "Bestått";
    }
    else {
        shortcut.innerHTML = "Ikke bestått";
    }
}

// Oppgave 6

function myMangtion() {
    var tall8 = parseFloat(document.getElementById("tall8").value);
    var shortcut = document.getElementById("demo6");

    if (tall8==1) {
        shortcut.innerHTML = "Det er mandag"
    }
    else if (tall8==2) {
        shortcut.innerHTML = "Det er tirsdag"
    }
    else if (tall8==3) {
        shortcut.innerHTML = "Det er onsdag"
    }
    else if (tall8==4) {
        shortcut.innerHTML = "Det er torsdag"
    }
    else if (tall8==5) {
        shortcut.innerHTML = "Det er fredag"
    }
    else if (tall8==6) {
        shortcut.innerHTML = "Det er lørdag"
    }
    else if (tall8==7) {
        shortcut.innerHTML = "Det er søndag"
    }

}

// Oppgave 7 

function myWinterarc() {
    var tall9 = parseFloat(document.getElementById("tall9").value);
    var shortcut = document.getElementById("demo7")

    shortcut.innerHTML = tall9 *1.8 + 32 + " " + "Fahrenheit"
}

// Oppgave 8 

function myAdrenaline() {
    var tall10 = parseFloat(document.getElementById("tall10").value)
    var tall11 = parseFloat(document.getElementById("tall11").value)
    var shortcut = document.getElementById("demo8")
    var shortcut2 = document.getElementById("demo9")
    
    var answer = (tall10+tall11)/2;

    shortcut.innerHTML = answer;
    if (answer>=50) {
        shortcut2.innerHTML = "Din karakter: Bestått"
    }
    else {
        shortcut2.innerHTML = "Din karakter: Ikke bestått"
    }
}

// Oppgave 9 

function myNonadrenaline() {
    var tall12 = parseInt(document.getElementById("tall12").value)
    var tall13 = parseInt(document.getElementById("tall13").value)
    var tall14 = parseInt(document.getElementById("tall14").value)
    shortcut = document.getElementById("demo10")

    if (tall12<tall13 && tall14) {
        shortcut.innerHTML = tall12 + " er minst"
    }
    else if (tall13<tall12 && tall14) {
        shortcut.innerHTML = tall13 + " er minst"
    }
    else if (tall14<tall12 && tall13) {
        shortcut.innerHTML = tall14 + " er minst"
    }
}

// Oppgave 10

function myDigitalfootprint() {
    var tall15 = (document.getElementById("tall15").value)
    var shortcut = document.getElementById("demo11")
    var ans = "Bokstaven er en vokal";
    
    if (tall15 == "a") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "e") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "i") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "o") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "u") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "y") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "æ") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "ø") {
        shortcut.innerHTML = ans
    }
    else if (tall15 == "å") {
        shortcut.innerHTML = ans
    }
    else {
        shortcut.innerHTML = "Bokstaven er en konsonant"
    }
}

// Oppgave 11 

function myHoodirony() {
    var tall16 = (document.getElementById("tall16").value)
    var shortcut = document.getElementById("demo12")

    shortcut.innerHTML = tall16
    shortcut.style.color = tall16
}
