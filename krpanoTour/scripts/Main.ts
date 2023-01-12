namespace VRExplorer {

    console.log("MainScript running");
    let firstWeiterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("first_weiter_button");
    let iconDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("infoIcon");
    let infoIcon: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let firstCommentBox: HTMLDivElement = <HTMLDivElement>document.getElementById("firstCommentBox");
    let marker: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("tour_link");
    console.log(marker);

    let hotspotHuette: HTMLImageElement = <HTMLImageElement>document.getElementById("huetteDiv");


    firstWeiterButton.addEventListener("click", firstHotspotClick);


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

    function enableHotspots(hotspotNumber: number): void {
        if (hotspotNumber == 1) {
            hotspotHuette.classList.remove("invisibleDisabled");
            firstHotspotClick();
        }
    }

}

