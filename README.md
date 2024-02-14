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

## Tweede versie
### Menu


#### HTML:
Ik wilde de semantiek beter maken door onder andere <header> te gebruiken om aan te tonen dat het om de header gaat en <nav> om aan te tonen dat het om een navigatie gaat.
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