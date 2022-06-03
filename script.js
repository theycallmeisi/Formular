

// --== Variabeln/Konstanten deklarieren und initialisieren ==--

const form = document.getElementById("form")

/* Vorname */
const vornameInput = document.getElementById("vorname_input")
const messageContainerVorname = document.getElementById("message-container-vorname")

/* Nachname */
const nachnameInput = document.getElementById("nachname_input")
const messageContainerNachname = document.getElementById("message-container-nachname")

/* Geburtstag */
const geburtstagInput = document.getElementById("geburtstag_input")
const messageContainerGeburtstag = document.getElementById("message-container-geburtstag")

/* Email */
const emailInput = document.getElementById("email_input")
const messageContainerEmail = document.getElementById("message-container-email")

/* Telefon */
const phoneInput = document.getElementById("phone_input")
const messageContainerPhone = document.getElementById("message-container-phone")

/* Adresse */
const adresseInput = document.getElementById("adresse_input")
const messageContainerAdresse = document.getElementById("message-container-adresse")

/* PLZ */
const plzInput = document.getElementById("plz_input")
const messageContainerPLZ = document.getElementById("message-container-plz")

/* Ort */
const ortInput = document.getElementById("ort_input")
const messageContainerOrt = document.getElementById("message-container-ort")

/* Captcha */
const captchaInput = document.getElementById("captcha_input")











/**
 * Funktion die prüft ob alle Funktionen keinen Fehler melden.
 */
form.addEventListener("input", (e) => {

    let vorname = vornameInput.value
    console.log(vorname)
    let errorsVorname = findErrorsVorname(vorname)

    let nachname = nachnameInput.value
    console.log(nachname)
    let errorsNachname = findErrorsNachname(nachname)

    let geburtstag = geburtstagInput.value
    console.log(geburtstag)
    let errorsGeburtstag = findErrorsGeburtstag(geburtstag)

    let email = emailInput.value
    console.log(email)
    let errorsEmail = findErrorsEmail(email)

    let phone = phoneInput.value
    console.log(phone)
    let errorsPhone = findErrorsPhone(phone)

    let adresse = adresseInput.value
    console.log(adresse)
    let errorsAdresse = findErrorsAdresse(adresse)

    let plz = plzInput.value
    console.log(plz)
    let errorsPLZ = findErrorsPLZ(plz)

    let ort = ortInput.value
    console.log(ort)
    let errorsOrt = findErrorsOrt(ort)

    let  captchaInputValue = captchaInput.value
    console.log( captchaInputValue)

    let errorsSum = 0


    // Vorname
    /* Wenn in Vorname Funktionen ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsVorname.length > 0) {
        e.preventDefault()
        messageContainerVorname.classList.remove("green-message")
        messageContainerVorname.innerText = errorsVorname.join('. \n')
        messageContainerVorname.classList.add("red-error-message")
        vornameInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Vorname (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    vornameInput.addEventListener("input", () => {
        messageContainerVorname.classList.remove("red-error-message")
        vornameInput.classList.remove("red-input")
        messageContainerVorname.innerText = 'Korrekte Eingabe'
        messageContainerVorname.classList.add("green-message")
    })


    // Nachname
    /* Wenn in Nachname Funktione ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsNachname.length > 0) {
        e.preventDefault()
        messageContainerNachname.classList.remove("green-message")
        messageContainerNachname.innerText = errorsNachname.join('. \n')
        messageContainerNachname.classList.add("red-error-message")
        nachnameInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Nachname (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    nachnameInput.addEventListener("input", () => {
        nachnameInput.classList.remove("red-input")
        messageContainerNachname.innerText = 'Korrekte Eingabe'
        messageContainerNachname.classList.add("green-message")
    })


    // Geburtstag
    /* Wenn in Geburtstag Funktione ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsGeburtstag.length > 0) {
        e.preventDefault()
        messageContainerGeburtstag.classList.remove("green-message")
        messageContainerGeburtstag.innerText = errorsGeburtstag.join('. \n')
        messageContainerGeburtstag.classList.add("red-error-message")
        geburtstagInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Geburtstag (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    geburtstagInput.addEventListener("input", () => {
        geburtstagInput.classList.remove("red-input")
        messageContainerGeburtstag.innerText = 'Korrekte Eingabe'
        messageContainerGeburtstag.classList.add("green-message")
    })


    // Email
    /* Wenn in Email Funktion ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsEmail.length > 0) {
        e.preventDefault()
        messageContainerEmail.classList.remove("green-message")
        messageContainerEmail.innerText = errorsEmail.join('. \n')
        messageContainerEmail.classList.add("red-error-message")
        emailInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Email (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    emailInput.addEventListener("input", () => {
        emailInput.classList.remove("red-input")
        messageContainerEmail.innerText = 'Korrekte Eingabe'
        messageContainerEmail.classList.add("green-message")
    })


    // Phone
    /* Wenn in Phone Funktione ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsPhone.length > 0) {
        e.preventDefault()
        messageContainerPhone.classList.remove("green-message")
        messageContainerPhone.innerText = errorsPhone.join('. \n')
        messageContainerPhone.classList.add("red-error-message")
        phoneInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Phone (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    phoneInput.addEventListener("input", () => {
        phoneInput.classList.remove("red-input")
        messageContainerPhone.innerText = 'Korrekte Eingabe'
        messageContainerPhone.classList.add("green-message")
    })


    // Adresse
    /* Wenn in Adresse Funktione ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsAdresse.length > 0) {
        e.preventDefault()
        messageContainerAdresse.classList.remove("green-message")
        messageContainerAdresse.innerText = errorsAdresse.join('. \n')
        messageContainerAdresse.classList.add("red-error-message")
        adresseInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Adresse (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    adresseInput.addEventListener("input", () => {
        adresseInput.classList.remove("red-input")
        messageContainerAdresse.innerText = 'Korrekte Eingabe'
        messageContainerAdresse.classList.add("green-message")
    })


    // PLZ
    /* Wenn in PLZ Funktione ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsPLZ.length > 0) {
        e.preventDefault()
        messageContainerPLZ.classList.remove("green-message")
        messageContainerPLZ.innerText = errorsPLZ.join('. \n')
        messageContainerPLZ.classList.add("red-error-message")
        plzInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler PLZ  (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    plzInput.addEventListener("input", () => {
        plzInput.classList.remove("red-input")
        messageContainerPLZ.innerText = 'Korrekte Eingabe'
        messageContainerPLZ.classList.add("green-message")
    })


    // Ort
    /* Wenn in Ort Funktion ein Fehler gemacht wird CSS hinzufügen (rote Anzeige). */
    if (errorsOrt.length > 0) {
        e.preventDefault()
        messageContainerOrt.classList.remove("green-message")
        messageContainerOrt.innerText = errorsOrt.join('. \n')
        messageContainerOrt.classList.add("red-error-message")
        ortInput.classList.add("red-input")
        errorsSum += 1
    }

    /* Beendet Fehler Ort (rote Anzeige) sobald wieder etwas getippt wird und fügt grüner Text hinzu. */
    ortInput.addEventListener("input", () => {
        ortInput.classList.remove("red-input")
        messageContainerOrt.innerText = 'Korrekte Eingabe'
        messageContainerOrt.classList.add("green-message")
    })


    // Captcha
    /* Wenn in Captcha Funktion ein Fehler gemacht wird.. */
    console.log(" captchaInputValue: " +  captchaInputValue);
    /* captcha_input = document.getElementById('captcha_input').value; */
   /*  console.log("captcha_input: " + captcha_input); */
    if (captchaInputValue == captchaRandomValue) {
        /* getCaptcha(); */
        document.getElementById('captcha_input').value = "";
        getFormData();

    } else {
        /* alert("falsches Captcha eingegeben"); */
        errorsSum += 1
        /* getCaptcha(); */
    }




    console.log('errorsSum ist: ' + errorsSum)

    /* Prüft ob es Null Fehler hat, wenn ja -> Wird das Grau (ID) und "onclick" entfernt */
    if (errorsSum == 0) {
        const submitButton = document.getElementById('submitButtonGrey');

        // ID attribute entfernen
        submitButton.removeAttribute('id');
        submitButton.disabled = false;

    }

})







// --== ReCaptcha ==--

/**
 * Funktion des ReCaptchas 
 * @param {*} maxLength Länge des Captchas
 * @returns             Alert Correct / Incorrect 
 */

 function getRandIndex(maxLength) {
    return Math.floor(Math.random() * maxLength);
}



var captchaRandomValue;


function getCaptcha() {
    var canvas = document.getElementById('canvas');
    var pen = canvas.getContext('2d');
    var captch = Math.random().toString(36).substring(2, 10);

    pen.font = "30px Grape Nuts";
    pen.fillStyle = "white";
    pen.fillRect(0, 0, 400, 400);
    pen.fillStyle = "black";
    maxLength = captch.length;
    index1 = getRandIndex(maxLength);
    index2 = getRandIndex(maxLength);

    captch = captch.substring(0, index1 - 1) + captch[index1].toUpperCase() + captch.substring(index1 + 1, maxLength);

    captch = captch.substring(0, index2 - 1) + captch[index2].toUpperCase() + captch.substring(index2 + 1, maxLength);

    captchaRandomValue = captch;
    captch = captch.split('').join(' ');
    pen.fillText(captch, 40, 40);
}

/* function checkIt() {
    console.log("captchaValue: " + captchaValue);
    captcha_input = document.getElementById('captcha_input').value;
    console.log("captcha_input: " + captcha_input);
    if (captcha_input == captchaRandomValue) {
        getCaptcha();
        document.getElementById('captcha_input').value = "";
        getFormData();

    } else {
        alert("falsches Captcha eingegeben");
        getCaptcha();
    }
}
 */













// --== Popup ==--

/**
 * Funktion die Popup abfüllt mit Feld Inputs 
 */
function getFormData() {
    alert(
        'Vorname: ' + vornameInput.value + '\n' +
        'Nachname: ' + nachnameInput.value + '\n' +
        'Geburtstag: ' + geburtstagInput.value + '\n' +
        'E-Mail: ' + emailInput.value + '\n' +
        'Telefonnummer: ' + phoneInput.value + '\n' +
        'Adresse: ' + adresseInput.value + '\n' +
        'PLZ: ' + plzInput.value + '\n' +
        'Ort: ' + ortInput.value + '\n'
    )
}
//}














// --== Find Errors ==--

/**
 * Vorname Funktion die Vornamen prüft. 
 * @param {*} vorname   Vorname
 * @returns             Error Message des Vornamens
 */
function findErrorsVorname(vorname) {
    let errorMessagesVorname = []
    if (vorname == '' || vorname == null) {
        errorMessagesVorname.push("Keinen Vornamen eingegeben")
    }
    if (vorname.includes("1") || vorname.includes("2") || vorname.includes("3") || vorname.includes("4") || vorname.includes("5") || vorname.includes("6") || vorname.includes("7") || vorname.includes("8") || vorname.includes("9")) {
        errorMessagesVorname.push("Keine Ziffern erlaubt")
    }
    return errorMessagesVorname
}


/**
 * Nachnamen Funktion die Nachname prüft.
 * @param {*} nachname Nachnamen
 * @returns            Error Message des Nachnamens
 */
function findErrorsNachname(nachname) {
    let errorMessagesNachname = []
    if (nachname == '' || nachname == null) {
        errorMessagesNachname.push("Keinen Nachnamen eingegeben")
    }
    if (nachname.includes("1") || nachname.includes("2") || nachname.includes("3") || nachname.includes("4") || nachname.includes("5") || nachname.includes("6") || nachname.includes("7") || nachname.includes("8") || nachname.includes("9")) {
        errorMessagesNachname.push("Keine Ziffern erlaubt")
    }
    return errorMessagesNachname
}


/**
 * Geburtstag Funktion die Geburtstag prüft.
 * @param {*} geburtstag Geburtstag
 * @returns              Error Messages Geburtstages
 */
function findErrorsGeburtstag(geburtstag) {
    let errorMessagesGeburtstag = []
    if (geburtstag == '' || geburtstag == null) {
        errorMessagesGeburtstag.push("Keinen Geburtstag eingegeben")
    }
    return errorMessagesGeburtstag
}


/**
 * Email Funktion die Email prüft.
 * @param {*} email Email
 * @returns         Error Messages Emails
 */
function findErrorsEmail(email) {
    let errorMessagesEmail = []
    if (email == '' || email == null) {
        errorMessagesEmail.push("Keine E-Mail Adresse eingegeben")
    }
    console.log(email.includes("@"))
    if (!(email.includes("@"))) {
        errorMessagesEmail.push("Kein @-Zeichen vorhanden")
    }
    return errorMessagesEmail
}


/**
 * Phone Funktion die Telefonnummer prüft.
 * @param {*} phone Phone
 * @returns         Error Messages Phone
 */
function findErrorsPhone(phone) {
    let errorMessagesPhone = []
    if (phone == '' || phone == null) {
        errorMessagesPhone.push("Keine Telefonnummer eingegeben")
    }
    if (phone.length != 10) {
        errorMessagesPhone.push("Falsche Zeichenanzahl!")
    }
    return errorMessagesPhone
}


/**
 * Adresse Funktion die Adresse prüft.
 * @param {*} adresse Adresse
 * @returns           Error Messages Adresse
 */
function findErrorsAdresse(adresse) {
    let errorMessagesAdresse = []
    if (adresse == '' || adresse == null) {
        errorMessagesAdresse.push("Keine Adresse eingegeben")
    }
    return errorMessagesAdresse
}


/**
 * PLZ Funktion die PLZ prüft.
 * @param {*} plz PLZ
 * @returns       Errors Messages PLZ
 */
function findErrorsPLZ(plz) {
    let errorMessagesPLZ = []
    if (plz == '' || plz == null) {
        errorMessagesPLZ.push("Keine PLZ eingegeben")
    } else if (plz.length != 4) {
        errorMessagesPLZ.push("Falsche Zeichenanzahlplz!")
    } else if (isNaN(plz)) {
        errorMessagesPLZ.push("In Nummern angeben")
    }
    return errorMessagesPLZ
}


/**
 * Ort Funktion die Ort prüft.
 * @param {*} ort Ort
 * @returns       Error Messages Ort
 */
function findErrorsOrt(ort) {
    let errorMessagesOrt = []
    if (ort == '' || ort == null) {
        errorMessagesOrt.push("Keinen Ort eingegeben")
    }
    if (ort.includes("1") || ort.includes("2") || ort.includes("3") || ort.includes("4") || ort.includes("5") || ort.includes("6") || ort.includes("7") || ort.includes("8") || ort.includes("9")) {
        errorMessagesOrt.push("Keine Ziffern erlaubt")
    }
    return errorMessagesOrt
}


















