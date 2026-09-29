
function kereses() {
    let szoveg = document.getElementById("kereses").value.toLowerCase();
    let marka = document.getElementById("marka").value;
    let ev = document.getElementById("evjarat").value;
    let ar = document.getElementById("ar").value;

    let autok = document.querySelectorAll(".auto");

    autok.forEach(function(auto) {
        let nev = auto.innerText.toLowerCase();
        let autoMarka = auto.dataset.marka;
        let autoEv = Number(auto.dataset.ev);
        let autoAr = Number(auto.dataset.ar);

        let megfelel = true;

        if (szoveg != "" && !nev.includes(szoveg)) {
            megfelel = false;
        }

        if (marka != "" && autoMarka != marka) {
            megfelel = false;
        }

        if (ev != "" && autoEv < Number(ev)) {
            megfelel = false;
        }

        if (ar != "" && autoAr > Number(ar)) {
            megfelel = false;
        }

        if (megfelel) {
            auto.style.display = "block";
        } else {
            auto.style.display = "none";
        }
    });
}

function mutatAutok() {
    let jarmuvek = document.querySelectorAll(".auto");

    jarmuvek.forEach(function(auto) {
        if (auto.dataset.tipus == "auto") {
            auto.style.display = "block";
        } else {
            auto.style.display = "none";
        }
    });
}

function mutatMotorok() {
    let jarmuvek = document.querySelectorAll(".auto");

    jarmuvek.forEach(function(auto) {
        if (auto.dataset.tipus == "motor") {
            auto.style.display = "block";
        } else {
            auto.style.display = "none";
        }
    });
}

function mutatMindet() {
    let jarmuvek = document.querySelectorAll(".auto");

    jarmuvek.forEach(function(auto) {
        auto.style.display = "block";
    });
}

function kedvenc(gomb) {
    if (gomb.innerText == "Kedvencekhez") {
        gomb.innerText = "Kedvencekben";
    } else {
        gomb.innerText = "Kedvencekhez";
    }
}

function bejelentkezes() {
    alert("A bejelentkezés funkció hamarosan elérhető.");
}

function hirdetes() {
    alert("A hirdetés feladása funkció hamarosan elérhető.");
}

