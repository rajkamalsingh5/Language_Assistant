
let speech=new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
voices=window.speechSynthesis.getVoices();
speech.voice=voices[0];
voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
var icon=document.getElementById("chand");
icon.onclick=function(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        icon.src="https://cdn-icons-png.flaticon.com/128/2489/2489765.png";
    }else{
        icon.src="https://cdn-icons-png.flaticon.com/128/2490/2490148.png";
    }
}

var loader=document.getElementById("loader");
window.addEventListener("load",function(){
    loader.style.display="none";
})