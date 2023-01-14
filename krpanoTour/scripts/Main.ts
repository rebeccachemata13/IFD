namespace VRExplorer {

    console.log("MainScript running");
    let firstWeiterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("first_weiter_button");
    let iconDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("infoIcon");
    let infoIcon: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let firstCommentBox: HTMLDivElement = <HTMLDivElement>document.getElementById("firstCommentBox");
    let marker: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("tour_link");
    let infoComment: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("info-comment");

    let hotspotHuette: HTMLImageElement = <HTMLImageElement>document.getElementById("huetteDiv");


    firstWeiterButton.addEventListener("click", firstHotspotClick);
    hotspotHuette.classList.add("invisibleDisabled");
    infoComment.innerHTML = "Schön, dass Sie sich entschieden haben im Wald spazieren zu gehen!<br><br>Klicken Sie nun auf den ersten Hotspot, um Ihre Waldtour zu starten.";

    function firstHotspotClick(): void {
        marker.classList.remove("disabled");
        firstCommentBox.classList.add("invisibleDisabled");
        infoIcon.src = "../ui/UI_icon_help.png";
        infoIcon.classList.add("infoIcon");
        infoIcon.addEventListener("click", enableComment);
        iconDiv.appendChild(infoIcon);
        console.log(infoIcon);
    }

    function enableComment(): void {
        marker.classList.add("disabled");
        firstCommentBox.classList.remove("invisibleDisabled");
        
        infoIcon.remove();
    }

    function enableHotspots(): void {
        console.log("Second Hotspot enabled");
        let currentPickerNumber: string = location.hash;
        console.log(location.hash);
        
        if (currentPickerNumber == "#1") {
            hotspotHuette.classList.remove("invisibleDisabled");
            infoComment.innerHTML = "Super, sie haben Ihren ersten Spot geschafft und den Pilz gefunden!<br><br>Klicken Sie nun auf den zweiten Hotspot, um Ihre Waldtour fortzuführen.";
            enableComment();
        }
    }

    enableHotspots();

}

