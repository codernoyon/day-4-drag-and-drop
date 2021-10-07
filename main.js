const dragArea = document.querySelector(".imageBox");
const dragText = dragArea.querySelector("h2");
const button = dragArea.querySelector("button");
const input = dragArea.querySelector("input");


let myFiles;

const forOutput = button.onclick = () => {
    input.click()
}

input.addEventListener("change", function(){
    myFiles = this.files[0];
    dragArea.classList.add("active");

    showMe();
});

dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Relese to Upload File";
});

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop";
});

dragArea.addEventListener("drop", (event) => {
    event.preventDefault();
    myFiles = event.dataTransfer.files[0];

    showMe();
});

function showMe(){
    let fileType = myFiles.type;
    let validEx = ["image/jpeg", "image/jpg", "image/png"];
    
    if(validEx.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imageUrl = fileReader.result;
            let image = `<img src="${imageUrl}" alt="">`;

            dragArea.innerHTML = image;
        }
        fileReader.readAsDataURL(myFiles);
    }else{
        alert("This file is not Valid");
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop";
    } 
}