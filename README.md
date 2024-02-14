# Process persoonlijke app Max Strikkers

## Intro
Ik wilde met mijn persoonlijke app vooral dingen uitproberen op het gebied van JavaScript waar ik nog geen ervaring mee had voor deze minor. Uiteindelijk heb ik gekozen om een app te maken die een klein beetje over mij verteld en die muziek die ik leuk vind ophaalt via Soundcloud

## Eerste versie
### Menu
Ik wilde eerst een menu bar maken die uiteindelijk zou gaan linken naar mijn home pagine, muziek en favorite eten dat menu item zag er als volgd uit. Ik heb uiteindelijk d

HTML:
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<div class="navBar">
    <div><a href="index.html">Home</a></div>
    <div><a href="muziek.html">Muziek</a></div>
    <div><a href="eten.html">Eten</a></div>
</div>
<div class="hamburger">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
</div>

CSS:
.navBar {
    background-color: #333;
    padding: 20px;
}
.navBar div {
    float: left;
    margin-right: 20px;
}
.navBar div a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}
.navBar div a:hover {
    color: #ccc;
}
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}
.bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: transform 0.4s;
}
.change .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.change .bar:nth-child(2) {
    opacity: 0;
}
.change .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}
@media screen and (max-width: 768px) {
    .navBar div {
        display: none;
    }
    .hamburger {
        display: flex;
    }
    .nav-toggle:checked + .navBar div {
        display: block;
    }
}

JavaScript:
`document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.navBar').classList.toggle('change');
`});