"use strict";
var VRExplorer;
(function (VRExplorer) {
    console.log("MainScript running");
    let firstWeiterButton = document.getElementById("first_weiter_button");
    let iconDiv = document.getElementById("infoIcon");
    let infoIcon = document.createElement("img");
    let firstCommentBox = document.getElementById("firstCommentBox");
    let infoComment = document.getElementById("info-comment");
    let hotspotHuette = document.getElementById("huetteDiv");
    firstWeiterButton.addEventListener("click", firstHotspotClick);
    hotspotHuette.classList.add("invisibleDisabled");
    infoComment.innerHTML = "Schön, dass du dich entschieden hast im Wald spazieren zu gehen!<br><br>Klicke nun auf den ersten Hotspot, um deine Waldtour zu starten.";
    function firstHotspotClick() {
        firstCommentBox.classList.add("invisibleDisabled");
        infoIcon.src = "../ui/UI_icon_help.png";
        infoIcon.classList.add("infoIcon");
        infoIcon.addEventListener("click", enableComment);
        iconDiv.appendChild(infoIcon);
        console.log(infoIcon);
    }
    function enableComment() {
        firstCommentBox.classList.remove("invisibleDisabled");
        infoIcon.remove();
    }
    function enableHotspots() {
        console.log("Second Hotspot enabled");
        let currentPickerNumber = location.hash;
        console.log(location.hash);
        if (currentPickerNumber == "#1") {
            hotspotHuette.classList.remove("invisibleDisabled");
            infoComment.innerHTML = "Super, du deinen ersten Spot geschafft und den Pilz gefunden!<br><br>Klicke nun auf den zweiten Hotspot, um deine Waldtour fortzuführen.";
            enableComment();
        }
    }
    enableHotspots();
})(VRExplorer || (VRExplorer = {}));
//# sourceMappingURL=Main.js.map