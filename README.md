# Process persoonlijke app Max Strikkers

## Intro
Ik wilde met mijn persoonlijke app vooral dingen uitproberen op het gebied van JavaScript, waar ik nog geen ervaring mee had voor deze minor. Uiteindelijk heb ik gekozen om een app te maken die een klein beetje over mij vertelt en die muziek die ik leuk vind ophaalt via Soundcloud.

## Eerste versie
### Menu
Ik wilde eerst een menubalk maken die uiteindelijk zou linken naar mijn homepage, muziek en favoriet eten. Dat menu-item zag er als volgt uit:

#### HTML
Toen ik hiermee begon, wist ik niet wat semantiek was en waarom het belangrijk was. Al snel werd het mij duidelijk dat als ik zoiets maak, het heel lastig is voor screenreaders om te lezen. Daarom heb ik alles in divs gezet, dat was ongeveer alles wat ik er van wist. Na enige tijd met een groepsgenoot gezeten te hebben die schrok van hoe ongelooflijk slecht dit eruit zag, ben ik mijn best gaan doen om de code wat semantischer te maken. (Dat is dus niet de code die je hieronder ziet.)
```
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<div class="navBar">
    <div><a href="index.html">Home</a></div>
    <div><a href="muziek.html">Muziek</a></div>
    <div><a href="eten.html">Eten</a></div>
</div>
<div class="menuIcon">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
</div>
```


#### CSS:
Ik had al enige ervaring met CSS (op het Media College, dus waarschijnlijk niet op de manier zoals het hoort). Ik maak hier geen gebruik van enige structuur om de code makkelijk leesbaar te maken, dit omdat ik het altijd eerst werkend wil hebben voordat ik iets van een indeling maak. Na enige tijd met een groepsgenoot gezeten te hebben, werd mij al snel duidelijk dat dit absoluut niet de manier is om aan het werk te gaan. Hierna ben ik ook alles gaan sorteren en opschonen.
```
hamburger .bar {
    opacity: 1;
    margin: 0 0;
    transform: translateY(0);
    width: 3px;
    background-color: #333;
    transition: color 20px;
}
hamburger .bar div {
    color: white;
    background-color: #ccc;
    text-decoration: none;
    transition: all 0.3s;
}
.bar:hover {
    color: #fff;
}
hamburger .navBar {
    float: right;
    padding: 20px;
    background-color: white;
}
div .navBar {
    margin-right: 20px;
    float: left;
}
.navBar a {
    transition: none;
    color: black;
}
a .navBar:hover {
    color: #333;
}

```

#### JavaScript:
Hier heb ik aan Co-Pilot gevraagd hoe ik iets kan selecteren op basis van een ID en ook hoe ik een class moest aan- of uitzetten. Ik wilde een class aan- en uitzetten om zo met de CSS elementen te laten veranderen.
```
`document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.navBar').classList.toggle('change');
`});
```

### Over mij container
Ik wilde een container maken met daarin informatie over mezelf ik wilde links mijn foto en mijn naam en rechts de text over mij met daaronder wat dingen over mij. Deze versie heeft nog dummy text.

#### HTML:
Ik ben gaan werken met divs. Ik kwam er al snel achter dat er een veel betere manier is om dit te doen zodat het semantischer is. Een grote struggle voor mij was altijd om items op de juiste plek te krijgen met CSS. Ik ging het vaak opzoeken en plakte alles erin zonder dat ik precies wist waar het over ging. Dat is hier ook het geval geweest. Ik vroeg namelijk aan Co-Pilot het volgende: "Maak een container waarin informatie over mij komt. In die container moeten nog 2 containers zitten (Links en rechts) en op basis daarvan moet alles gesorteerd worden." Dit was het resultaat in HTML en CSS.
```
 <div class="aboutMeContainer">
        <div class="links">
            <h1>Max Strikkers</h1>
            <img class="profielFoto" src="./files/img/Max Strikkers.png" alt="profielfoto">
        </div>
        <div class="rechts">
            <h1>Over mij</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque lorem, pharetra id placerat quis, placerat ac massa.</p>
        </div>
    </div>
```
#### CSS:
```
.aboutMeContainer{
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: auto;
}

.links{
    align-items: center;
    padding: 50px;
}

.rechts{
    padding: 50px;
    float: right;
```

## Tweede versie
### Menu


#### HTML:
Ik wilde de semantiek beter maken door onder andere ```<header>``` te gebruiken om aan te tonen dat het om de header gaat en ```<nav>``` om aan te tonen dat het om een navigatie gaat.
```
<header>
    <div class="menuIcon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <nav class="menu hidden">
        <a href="muziek.html" class="menuItem">Muziek</a>
        <a href="#" class="menuItem">Films</a>
        <a href="#" class="menuItem">Eten</a>
    </nav>
</header>
```

#### CSS: 
Ook heb ik de CSS helemaal omgegooid onder andere om het netter te maken en ik maak gebruik van variabele voor de kleur (Ik wist niet dat dat kon) Ook ben ik gaan onderzoeken hoe een flexbox werkt en dat heb ik gedaan met behulp van deze site: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```
/* HEAD */
header{
  background-color: var(--color--background-containers);
  border-radius: 5px;
  max-width: 95%;
  height: 200%;
  margin: auto; /* Centreert de header horizontaal */
  padding: 15px;
  margin-top: 15px;
  position: relative; /* Zorgt ervoor dat de positie van de header relatief is aan de partent container */
  z-index: 1;
}

.menuIcon{
  width: 30px;
  height: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar{
  background-color: var(--color-text);
  width: 30px;
  height: 3px;
  transition: transform 0.3s ease;
  }

.menuIcon.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menuIcon.open .bar:nth-child(2) {
  opacity: 0;
}

.menuIcon.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.menu{
  display: flex;
  flex-direction: column;
}

.hidden{
  position: absolute;
  opacity: 0;
  top: -100%;
  transition: 0.4s ease;
} 

.shown{
  position: absolute;
  opacity: 1;
  top: 100%;
  transition: 0.4s ease;
  background-color: var(--color--background-containers);
}
```

## Derde versie (Het inladen van de playlist):
Ik wilde gebruik maken van de SoundCloud API om zo mijn favoriete afspeellijst in te laden. Alleen, daarvoor moest je een ontwikkelaar zijn en namen ze niemand meer aan. Ik heb verder ook geen Spotify, maar gebruik Apple Music, waarvoor je €100 per jaar moet betalen om toegang te krijgen tot de API. Dus heb ik via RapidAPI.com een SoundCloud API ingesteld. Omdat ik maar 50 verzoeken per maand heb (gratis), heb ik de dataset gekopieerd die zij als testdata kregen en die in mijn app gebruikt om nummers van mijn afspeellijst in te laden.

### HTML
```
<li class="songContainer toggleMusicPopup">
    <div class="song">
        <div>
            <h3>Vendex @ Wonderland Festival Indoor 2023</h3>
            <p>Wonderland Festival</p>
        </div>
        <img class="songCover" src="https://i1.sndcdn.com/artworks-VPMVzyfb7H9aCyoe-k4RpGw-original.jpg" alt="song cover">
    </div>
    <div class="musicplayerPopup">
        <button class="closeMusicPopup">
            <svg width="2rem" height="2rem" viewBox="0 0 15 15">
                <path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"></path>
            </svg>
        </button>
        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1695085485&amp;sharing=false&amp;color=%230e1321&amp;"></iframe>
    </div>
</li>
```

### JavaScript
Voor deze JavaScript ben ik eerst een structuurtje gaan maken in HTML over hoe uiteindelijk de lijst met nummers eruit komt te zien. Ik heb voornamelijk Co-Pilot gebruikt om de JavaScript-syntax kloppend te maken, omdat ik daar nog heel weinig ervaring mee heb.

Hier heb ik geleerd wat een async function is en wat je er allemaal mee kunt doen, vooral met het gebruik van await. Ik was me er ook van bewust dat je met .innerHTML gewoon HTML kunt toevoegen en dan de variabele kunt toewijzen, maar ik vond het leuk om de wat lastigere weg te nemen en een beetje te puzzelen over welk item waar moest worden geplaatst. Ook heb ik de widget (```<iframe>```) van SoundCloud ingeladen, zodat ik elk nummer volledig kon afspelen.
```
async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./files/info.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
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

    // Voegt de naam van de playlist toe aan de html
    document.getElementById("playlistName").innerText = playlistInfoJSON.name;

    // Voegt de src toe aan de image (de cover van de playlist)
    const img = document.getElementById("playlistCover");
    img.src = playlistInfoJSON.playlistCoverUrl;

    playlistInfoJSON.tracks.items.forEach(element => {
        const songName = element.title;
        const artistName = element.user.name;
        const albumCoverUrl = element.artworkUrl;
        const songList = document.getElementById('songList')
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
}

updatePlaylist()
```

## Vierde versie (Het managen van de pop-up):