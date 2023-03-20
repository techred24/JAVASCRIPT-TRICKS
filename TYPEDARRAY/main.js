// Resource: https://youtu.be/9X8ImwdmikU
fetch('https://randomuser.me/api/')
    .then(response => response.body.getReader().read())
    .then(({value}) => {
        console.log(new TextDecoder().decode(value));
        console.log(JSON.parse(new TextDecoder().decode(value)));
    })
    .catch(e => console.log(e))