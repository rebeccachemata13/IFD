const relPos = [
    {
        xPos: 0.25,
        yPos: 0.40,
    },
    {
        xPos: 0.40,
        yPos: 0.70,
    }

];

console.log("hi");
const card = document.body;
 console.log(card.offsetHeight + "");
 console.log(card.offsetWidth + "");

let cardWidth = card.offsetWidth;
let cardHeight = card.offsetHeight;

let hotspotHerbstwald = document.getElementById("herbstwaldDiv");
let imageSpotHerbstwald = document.getElementById("herbstwaldHotspotImg");
let hotspotHuette = document.getElementById("huetteDiv");
let imageSpotHuette = document.getElementById("huetteHotspotImg");


function positionHotspots(){
hotspotHerbstwald.style.position = "absolute";
hotspotHerbstwald.style.marginLeft = (cardWidth * relPos[0].xPos) + "px";
hotspotHerbstwald.style.marginTop = (cardHeight * relPos[0].yPos) + "px";
console.log(hotspotHerbstwald.style.marginTop);

hotspotHuette.style.position = "absolute";
hotspotHuette.style.marginLeft = (cardWidth * relPos[1].xPos) + "px";
hotspotHuette.style.marginTop = (cardHeight * relPos[1].yPos) + "px";
console.log(hotspotHuette.style.marginTop);

RepositionHotspots();

}

function RepositionHotspots(){
	hotspotHerbstwald.style.marginLeft = (card.offsetWidth * relPos[0].xPos) + "px";
    hotspotHerbstwald.style.marginTop = (card.offsetHeight * relPos[0].yPos) + "px";
    // imageSpotHerbstwald.style.width = (card.offsetWidth * 0.08) + "px";
    hotspotHuette.style.marginLeft = (card.offsetWidth * relPos[1].xPos) + "px";
    hotspotHuette.style.marginTop = (card.offsetHeight * relPos[1].yPos) + "px";
    // imageSpotHuette.style.width = (card.offsetWidth * 0.08) + "px";

}

setTimeout(positionHotspots, 1000);

window.addEventListener('resize', function(event) {
    hotspotHerbstwald.style.marginLeft = (card.offsetWidth * relPos[0].xPos) + "px";
    hotspotHerbstwald.style.marginTop = (card.offsetHeight * relPos[0].yPos) + "px";
    // imageSpotHerbstwald.style.width = (card.offsetWidth * 0.1) + "px";
    hotspotHuette.style.marginLeft = (card.offsetWidth * relPos[1].xPos) + "px";
    hotspotHuette.style.marginTop = (card.offsetHeight * relPos[1].yPos) + "px";
    // imageSpotHuette.style.width = (card.offsetWidth * 0.1) + "px";
}, true);
