namespace VRExplorer {

    console.log("MainScript running");
    let firstWeiterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("first_weiter_button");
    let iconDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("infoIcon");
    let infoIcon: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    let firstCommentBox: HTMLDivElement = <HTMLDivElement>document.getElementById("firstCommentBox");
    let marker: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("tour_link");
    console.log(marker);


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

}

