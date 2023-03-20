
document.querySelector('#pdffile').addEventListener('change', function(event) {
    if (this.files[0].type !== 'application/pdf') {
        this.value = ''
        alert('Solo puedes seleccionar archivos PDF')
        return
    }
    let pdffile = this.files[0];

    let pdf = new Blob([pdffile], { type: pdffile.type });
    const pdfURL = URL.createObjectURL(pdf)+'#toolbar=0';
    const embed = document.querySelector('embed');
    // embed.src = pdfURL
    embed.setAttribute('src', pdfURL);
});