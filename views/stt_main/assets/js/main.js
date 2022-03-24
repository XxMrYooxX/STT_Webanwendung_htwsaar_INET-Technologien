document.getElementById('apply').addEventListener('change', async function (event) {
    event.preventDefault();
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
}, false);

function auswahl(event){
    event.stopPropagation();
    event.preventDefault();

    var file = event.dataTansfer.files;

}

function handleDragOver(event){
    event.stopPropagation();
    event.preventDefault();
    event.dataTansfer.dropEffect = 'copy';
}

var dropZone = document.getElementById('drop');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', auswahl, false);