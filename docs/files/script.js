const menuItems = document.querySelector(".menuIcon"); //Maakt een constante  aan menuItems van het item wat .menuIcon als class heeft
const menu = document.querySelector(".menu");


// Functie om het menu te laten zien en te verbergen
function toggleMenu(){
    menuItems.classList.toggle("open"); //Voegt de class open toe aan de constante menuItems

    if (menu.classList.contains("hidden")){ //Kijkt of de constante menu .hidden classnaam heeft
        menu.classList.remove("hidden"); //Haalt de classnaam .hidden weg uit te constante menu
        menu.classList.add("shown"); //Voegt de classnaam .shown toe aan de constante menu
    } else if (menu.classList.contains("shown")){ //Kijkt of als de constante menu niet de classnaam .hidden heeft of hij wel de classnaam .shown heeft
        menu.classList.remove("shown"); //Haalt de classnaam .shown weg uit de constante menu
        menu.classList.add("hidden") //Voegt de classnaam .hidden toe aan de constante menu
    }
}

menuItems.addEventListener("click", toggleMenu); //Wacht tot er op de constante menuItems geklikt word en roept daarna de functie toggleMenu op

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./files/siteInfo.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    document.getElementById('namePlaceholder').innerText = siteJson.name; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
  }

siteInfo() //Voert de functie uit

const playButton = document.getElementById("playButton");
const pauzeButton = document.getElementById("pauzeButton")
const meerVreten = document.getElementById("meerVreten")

function playAudio(){
    meerVreten.currentTime = 8;
    meerVreten.play();
    }

function pauzeAudio(){
    meerVreten.pause()
}

playButton.addEventListener("click", playAudio);
pauzeButton.addEventListener("click", pauzeAudio)

document.querySelector(".dropDownContainer").addEventListener("click", function(){
    this.classList.toggle("open");
});
