const inputText=document.getElementById('inputText');

const generate=document.getElementById('GenerateButton');
const image=document.getElementById('img');


let inputValue=null;
generate.addEventListener('click',()=>{

inputValue=inputText.value 
if(!inputValue)
{
    alert('babu kai text hala yar yetikai kasari qr code generate garne hmmm')
}
else{
    
image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
}

})
