document.getElementById('apply').addEventListener('change', function (event) {
    event.preventDefault();
    console.log("Du bist ein Hurensohn");
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
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