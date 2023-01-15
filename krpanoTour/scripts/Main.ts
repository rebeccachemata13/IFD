namespace VRExplorer {

    console.log("MainScript running");
    let firstWeiterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("first_weiter_button");
    let iconDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("infoIcon");
    let infoIcon: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let firstCommentBox: HTMLDivElement = <HTMLDivElement>document.getElementById("firstCommentBox");
    let infoComment: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("info-comment");

    let hotspotHuette: HTMLImageElement = <HTMLImageElement>document.getElementById("huetteDiv");


    firstWeiterButton.addEventListener("click", firstHotspotClick);
    hotspotHuette.classList.add("invisibleDisabled");
    infoComment.innerHTML = "Schön, dass du dich entschieden hast im Wald spazieren zu gehen!<br><br>Klicke nun auf den ersten Hotspot, um deine Waldtour zu starten.";

    function firstHotspotClick(): void {
        firstCommentBox.classList.add("invisibleDisabled");
        infoIcon.src = "../ui/UI_icon_help.png";
        infoIcon.classList.add("infoIcon");
        infoIcon.addEventListener("click", enableComment);
        iconDiv.appendChild(infoIcon);
        console.log(infoIcon);
    }

    function enableComment(): void {
        firstCommentBox.classList.remove("invisibleDisabled");
        
        infoIcon.remove();
    }

    function enableHotspots(): void {
        console.log("Second Hotspot enabled");
        let currentPickerNumber: string = location.hash;
        console.log(location.hash);
        
        if (currentPickerNumber == "#1") {
            hotspotHuette.classList.remove("invisibleDisabled");
            infoComment.innerHTML = "Super, du deinen ersten Spot geschafft und den Pilz gefunden!<br><br>Klicke nun auf den zweiten Hotspot, um deine Waldtour fortzuführen.";
            enableComment();
        }
    }

    enableHotspots();
}

