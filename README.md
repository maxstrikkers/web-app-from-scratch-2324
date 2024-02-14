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