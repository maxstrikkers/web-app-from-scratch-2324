const menuItems = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");

['grimmigButton', 'minderGrimmitButton'].forEach(function(id){ //loopt door de array heen met de id's van de buttons
    document.getElementById(id).addEventListener("click", function(){ //voegt een eventlistener toe aan de buttons
        ['grimmigButton', 'minderGrimmitButton'].forEach(function(curentButton){ //Haalt bij alle buttons de class active weg als er op een van de 2 geklikt word
            document.getElementById(curentButton).classList.remove("active");
        });
        this.classList.toggle("active"); //Voegt de class active toe aan de button waar op geklikt is
        if (this.classList.contains('active')) {
            if(this.id === 'grimmigButton'){
                const grimmigPlaylist = document.querySelector('.grimmigPlaylist');
                const minderGrimmigPlaylist = document.querySelector('.minderGrimmigPlaylist');
                
                grimmigPlaylist.classList.remove('inactivePlaylist');
                grimmigPlaylist.classList.add('activePlaylist');
                
                minderGrimmigPlaylist.classList.remove('activePlaylist');
                minderGrimmigPlaylist.classList.add('inactivePlaylist');
                
                console.log(`${this.id} heeft de klasse active`);
            } else if (this.id === 'minderGrimmitButton'){
                const minderGrimmigPlaylist = document.querySelector('.minderGrimmigPlaylist');
                const grimmigPlaylist = document.querySelector('.grimmigPlaylist');
                
                minderGrimmigPlaylist.classList.remove('inactivePlaylist');
                minderGrimmigPlaylist.classList.add('activePlaylist');
                
                grimmigPlaylist.classList.remove('activePlaylist');
                grimmigPlaylist.classList.add('inactivePlaylist');
                
                console.log(`${this.id} heeft de klasse active`);
            }
        }
    });
});


// Functie om het menu te laten zien en te verbergen
function toggleMenu(){
    menuItems.classList.toggle("open"); //Voegt de class open toe aan de constante menuItems

    if (menu.classList.contains("hidden")){ //Kijkt of de constante menu .hidden classnaam heeft
        menu.classList.remove("hidden"); //Haalt de classnaam .hidden weg uit te constante menu
        menu.classList.add("shown"); //Voegt de classnaam .shown toe aan de constante menu
    } else if (menu.classList.contains("shown")){ //Kijkt of menu niet de classnaam .hidden heeft of hij wel de classnaam .shown heeft
        menu.classList.remove("shown"); //Haalt de classnaam .shown weg uit de constante menu
        menu.classList.add("hidden") //Voegt de classnaam .hidden toe aan de constante menu
    }
}

menuItems.addEventListener("click", toggleMenu); //Wacht tot er op menuItems geklikt word en roept daarna de functie toggleMenu op

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./info.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    document.getElementById('namePlaceholder').innerText = siteJson.firstName + ' ' + siteJson.lastName; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
    document.getElementById('aboutMeInformation').innerText = siteJson.bio;
    document.getElementById('profielFoto').src = siteJson.avatar_url;
  }

siteInfo() //Voert de functie uit 

// Functie om alle items uit de json file toe te voegen aan de pagina
async function updatePlaylist(){
    const response = await fetch("./files/playlistInfo.json");
    const playlistInfoJSON = await response.json();
    const playlistsClassNames = ["activePlaylist", "inactivePlaylist", "grimmigPlaylist", "minderGrimmigPlaylist"];
    const playlistUL = document.getElementById("playlistInfo");

    playlistInfoJSON.playlists.forEach((playlist, index) => {
        const songList = document.createElement("ul");
        songList.classList.add(playlistsClassNames[index]);
        songList.classList.add(playlistsClassNames[index + 2]);

        //maakt de h2 aan waar de naam van de playlist in komt
        const playListName = document.createElement("h2");
        playListName.textContent = playlist.name;

        const playlistNameLi = document.createElement("li");
        playlistNameLi.appendChild(playListName);
        playlistNameLi.classList.add("playlistName");
        
        //maakt het img element aan en voegt de src en alt toe
        const playlistCover = document.createElement("img");
        playlistCover.src = playlist.playlistCoverUrl;

        const playlistCoverLi = document.createElement("li");
        playlistCoverLi.appendChild(playlistCover);
        playlistCoverLi.classList.add("playlistCover");

        songList.appendChild(playlistNameLi);
        songList.appendChild(playlistCoverLi);

        playlistUL.appendChild(songList);

        playlist.tracks.items.forEach(element => {
            const songName = element.title;
            const artistName = element.user.name;
            const albumCoverUrl = element.artworkUrl;
            const songId = element.id;

    
            // Maakt het list item aan die uiteindelijk de song gaat bevatten en voegt een classnaam toe
            const songContainer = document.createElement("li");
            songContainer.classList.add('songContainer', 'toggleMusicPopup');
            
            // Maakt de div aan die de song gaat bevatten en voegt een classnaam toe
            const song = document.createElement("div");
            song.classList.add('song');
            
            // Maakt de div aan waar de titel en artiest in komen te staan en maakt vervolgens een h3 (song titel) en een p (artiest naam) aan
            const songNameAndArtist = document.createElement("div");
            const titleOfTheSong = document.createElement("h3");
            const nameOfTheArtist = document.createElement("p");

            // Maakt de afbeelding aan, voedt een classnaam toe en voegt de src en alt toe
            const songCoverImg = document.createElement("img");
            songCoverImg.classList.add("songCover");
            songCoverImg.src = albumCoverUrl;
            songCoverImg.alt = "song cover";

            // Zorgt ervoor dat de song titel en de artiest naam de juiste waarde krijgen
            titleOfTheSong.textContent = songName;
            nameOfTheArtist.textContent = artistName;
            
            // Zorgt ervoor dat de titel van het nummer en de artiest in de div met de classnamen song en songContainer komen
            songNameAndArtist.appendChild(titleOfTheSong);
            songNameAndArtist.appendChild(nameOfTheArtist);

            // Zorgt ervoor dat de div met de song titel en de artiest naam in de div met de classnaam songContainer komt en dat de cover er in komt
            song.appendChild(songNameAndArtist);
            song.appendChild(songCoverImg);

            // Maakt de div aan die uiteindelijk het popup element wordt en voegt een classnaam toe
            musicPlayerPopup = document.createElement("div");
            musicPlayerPopup.classList.add("musicplayerPopup");

            // Maakt de knop aan om de popup te sluiten en voegt een classnaam toe
            const button = document.createElement("button");
            button.classList.add("closeMusicPopup");
            constSVGForButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            constSVGForButton.setAttributeNS(null, "width", "2rem");
            constSVGForButton.setAttributeNS(null, "height", "2rem");
            constSVGForButton.setAttributeNS(null, "viewBox", "0 0 15 15");

            // Maak het path-element
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttributeNS(null, "fill", "currentColor");
            path.setAttributeNS(null, "d", "M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27");

            // Maakt de iframe aan en haalt de juiste id op
            const soundcloudIframe = document.createElement("iframe");
            soundcloudIframe.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${songId}&sharing=false&color=%230e1321&`;
            
            // Voeg het path-element toe aan het SVG-element
            constSVGForButton.appendChild(path);
            // Voeg het SVG-element toe aan het button-element
            button.appendChild(constSVGForButton);
            // Voeg het button-element toe aan de div met de classnaam musicplayerPopup
            musicPlayerPopup.appendChild(button);
            // Voegt de soundcloudIframe toe aan de div met de classnaam musicplayerPopup
            musicPlayerPopup.appendChild(soundcloudIframe);

            // zorgt ervoor dat de title, artiest en afbeelding toe worden gevoegd aan het list item songContainer
            songContainer.appendChild(song);
            songContainer.appendChild(musicPlayerPopup);

            // Voegt het list item toe aan de ul met de id songList
            songList.appendChild(songContainer);        
        });    
    });
};

// Functie om de pop-up te verwerken
async function toggleMusicPopup(){
    await updatePlaylist();
    const songPopupButtonOpen = document.querySelectorAll(".songContainer");

    songPopupButtonOpen.forEach(function(currentButton) {
        const songPopupButtonClose = currentButton.querySelector(".closeMusicPopup");
        const musicPopup = currentButton.querySelector(".musicplayerPopup");
        const waas = document.querySelector(".waas");

        currentButton.addEventListener('click', function(){
            musicPopup.classList.add("musicOpen");
            waas.classList.add("musicOpen");
        });

        function closeMenu(){
            let iframeElement = currentButton.querySelector('iframe');
            let widget = SC.Widget(iframeElement);
            widget.pause();
            musicPopup.classList.remove("musicOpen");
            waas.classList.remove("musicOpen");
        }
        songPopupButtonClose.addEventListener('click', function(event) {
            event.stopPropagation();
            closeMenu();
        });
        waas.addEventListener('click', closeMenu);
    });
}

toggleMusicPopup();


