let video = document.querySelector('#video');

document.querySelector('#boton').addEventListener('click', function (ev) {
    // Solicitando permisos al usuario para grabar audio y video
    navigator.mediaDevices.getUserMedia({ audio: true, video: true})
        .then(record)
        .catch(err => console.log(err))
});

let chunks = [];

function record(stream) {
    video.srcObject = stream;
    let options = {
        mimeType: 'video/webm;codecs=h264'
    }
    if (!MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
        options = {
            mimeType: 'video/webm;codecs=vp8'
        }
    }

    let mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.start();

    mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
    }
    mediaRecorder.onstop = function() {
        let blob = new Blob(chunks, {type: 'video/webm'});
        // Inicializando por si vuelven a grabar
        chunks = [];
        download(blob);
    }
    setTimeout(() => mediaRecorder.stop(), 5000);
}

function download(blob) {
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'vide_recorded.webm');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    link.remove();
}