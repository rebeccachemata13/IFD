"use strict";
var VRExplorer;
(function (VRExplorer) {
    console.log("MainScript running");
    let firstWeiterButton = document.getElementById("first_weiter_button");
    let iconDiv = document.getElementById("infoIcon");
    let infoIcon = document.createElement("img");
    let firstCommentBox = document.getElementById("firstCommentBox");
    let marker = document.getElementById("tour_link");
    console.log(marker);
    let hotspotHuette = document.getElementById("huetteDiv");
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
    function enableHotspots(hotspotNumber) {
        if (hotspotNumber == 1) {
            hotspotHuette.classList.remove("invisibleDisabled");
            firstHotspotClick();
        }
    }
})(VRExplorer || (VRExplorer = {}));
//# sourceMappingURL=Main.js.map