
let qrText = document.getElementById("qr-text");
let sizes = document.getElementById("sizes");
let generateBtn = document.getElementById("generateBtn");
let downloadBtn = document.getElementById("downloadBtn");
let bodyContainer = document.querySelector(".qr-body"); // if qr-body is a class
let size = sizes.value;


generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener("change", (e)=>{
    size = e.target.value;
    isEmpty();
});

downloadBtn.addEventListener("click",()=>{
    let  img = document.querySelector(".qr-body img");

    if(img != null){
        let imgSrc = img.getAttribute("src");
        downloadBtn.setAttribute("href",imgSrc);
    }
    else{
        downloadBtn.setAttribute("herf", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmpty(){
     (qrText.value.length > 0)? generateQr():alert("Please Enter some text or URL");
}

function generateQr(){
    bodyContainer.innerHTML = "";
    new QRCode(bodyContainer, {
        text:qrText.value,
        height: size,
        width: size,
        colorDark: "#000",
        colorLight: "#fff",
    });
}