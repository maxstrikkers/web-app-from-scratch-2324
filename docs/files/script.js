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


async function siteInfo(){
    const siteInfo = "https://github.com/maxstrikkers/web-app-from-scratch-2324/blob/main/docs/files/app.json" //Maakt van het JSON bestand een constante

    fetch(siteInfo)
        .then(response => {
            if (response.ok){
                console.log(siteInfo.json())
            }
        })
        console.log(siteInfo)
}

siteInfo()