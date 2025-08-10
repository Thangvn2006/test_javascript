function upDate(previewPic) {
    console.log("Mouse over image:", previewPic.alt);
    let displayDiv = document.getElementById("image");


    displayDiv.innerHTML = previewPic.alt;


    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    console.log("Mouse left image");
    let displayDiv = document.getElementById("image");


    displayDiv.style.backgroundImage = "url('')";

    displayDiv.innerHTML = "Hover over an image below to display here.";
}
