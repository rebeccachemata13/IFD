"use strict";
console.log("MainScript running");
let imageSpot = document.getElementById("herbstwaldHotspotImg");
let firstWeiterButton = document.getElementById("first_weiter_button");
let iconDiv = document.getElementById("infoIcon");
let infoIcon = document.createElement("img");
let firstCommentBox = document.getElementById("firstCommentBox");
let marker = document.getElementById("tour_link");
console.log(marker);
firstWeiterButton.addEventListener("click", firstHotspotClick);
function firstHotspotClick() {
    marker.classList.remove("disabled");
    firstCommentBox.classList.add("invisibleDisabled");
    infoIcon.src = "../ui/UI_icon_help.png";
    infoIcon.classList.add("infoIcon");
    infoIcon.addEventListener("click", enableComment);
    iconDiv.appendChild(infoIcon);
    console.log(infoIcon);
}
function enableComment() {
    marker.classList.add("disabled");
    firstCommentBox.classList.remove("invisibleDisabled");
    infoIcon.remove();
}
//# sourceMappingURL=Main.js.map