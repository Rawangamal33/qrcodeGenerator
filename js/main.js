const inputText=document.querySelector("#qrText");
const imgBox=document.querySelector("#imgBox");
const img=document.querySelector("#imageQr");
const btn=document.querySelector(".button");



function generateQR(input){
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
}

btn.addEventListener("click",()=>{
    generateQR(inputText.value);
},false);
