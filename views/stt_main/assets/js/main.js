document.getElementById('apply').addEventListener('change', async function (event) {
    event.preventDefault();
    document.getElementById('spin-container-overlay').style.display = 'block'
    console.log("Du bist ein Hurensohn");
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    const url = '/api/stt'
    let data = new FormData()
    data.append('sttfile', file)
    const response = await fetch(url, {
        method: 'POST',
        body: data
    })
    let datajson = await response.json()
    console.log(datajson)
    document.getElementsByName('outputTextBox')[0].value = datajson.text
    document.getElementById('spin-container-overlay').style.display = 'none'
}, false);

async function dropupload(event) {
    event.preventDefault();
    document.getElementById('spin-container-overlay').style.display = 'block'
    console.log("Du bist ein Hurensohn");
    const input = event.dataTransfer.files
    const file = input[0];
    const url = '/api/stt'
    let data = new FormData()
    data.append('sttfile', file)
    const response = await fetch(url, {
        method: 'POST',
        body: data
    })
    let datajson = await response.json()
    console.log(datajson)
    document.getElementsByName('outputTextBox')[0].value = datajson.text
    document.getElementById('spin-container-overlay').style.display = 'none'
}

var ul = $('#upload ul');

$('#drop a').click(function(){
    // Simulate a click on the file input button
    // to show the file browser dialog
    $(this).parent().find('input').click();
});


// Prevent the default action when a file is dropped on the window
$(document).on('drop dragover', function (e) {
    e.preventDefault();
});


// initialize new SpeechSynthesisUtterance object 
let tts = new SpeechSynthesisUtterance(); 
 
// Setting the Speech Language 
tts.lang = "de"; 
 
//dropdown with the list of available voices on Web Speech API 
let speechvoices = []; // global array of available voices 
 
window.speechSynthesis.onvoiceschanged = () => { 
  // get the list of voices 
  speechvoices = window.speechSynthesis.getVoices(); 
  tts.voice = speechvoices[0]; 
 
  let select_voice = document.getElementById("voices"); 
  speechvoices.forEach((voice, i) => (select_voice.options[i] = new Option(voice.name, i))); 
}; 
 
//SETTING THE CONTROLS - SPEAK, PLAY, PAUSE AND RESUME 
//SPEAK 
//first we get the value of the textarea or document 
document.getElementById("speak").addEventListener("click", () => { 
  tts.text = document.getElementById("outputTextBox").value; 
  //then we implement the speechsynthesis instance 
  window.speechSynthesis.speak(tts); 
}); 
 
//PAUSE 
document.getElementById("pause").addEventListener("click", () => { 
  // Pause the speechSynthesis instance 
  window.speechSynthesis.pause(); 
}); 
 
//RESUME 
document.getElementById("resume").addEventListener("click", () => { 
  // Resume the paused speechSynthesis instance 
  window.speechSynthesis.resume(); 
}); 
 
//CANCEL 
document.getElementById("cancel").addEventListener("click", () => { 
// Cancel the speechSynthesis instance 
  window.speechSynthesis.cancel(); 
}); 
 
//Volume  
document.getElementById("volume").addEventListener("input", () => { 
  const vol = document.getElementById("volume").value; 
  // Set volume property of the SpeechSynthesisUtterance instance 
  tts.volume = vol; 
  // Updating the volume label 
  document.getElementById("vol-label").innerHTML = vol; 
}); 

document.getElementById("voices").addEventListener("change", () => { 
    tts.voice = speechvoices[document.getElementById("voices").value]; 
}); 