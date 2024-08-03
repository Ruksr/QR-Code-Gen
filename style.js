const qrText=document.getElementById('qr-text');
const Sizes=document.getElementById('Sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrContainer=document.getElementById('qrContainer');
let size=Sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});



Sizes.addEventListener('change', (e)=>{
    size=e.target.value;
    isEmptyInput();
})
  
function isEmptyInput(){
    // if(qrText.value.length>0)
    // {
    //     generateQRCode();
    // } else{
    //     alert("Enter the text or URL to generate your QR code");
    // }

    qrText.value.length>0?generateQRCode():alert("Enter the text or URL to generate your QR code");
}
downloadBtn.addEventListener('click', ()=>{
  let img=document.getElementById('qrContainer img');
  if(img !==null){
   let imgAtrr=img.getAttribute('src');
   downloadBtn.setAttribute("href", imgAtrr);
  }
  else{
    downloadBtn.setAttribute("href", `${document.getElementById('canvas').toDataURL()}`)
  }
})


function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
       text:qrText.value,
       height:size,
       width:size,
       colorLight:"#fff",
       colorDark:"#000",

    })
}