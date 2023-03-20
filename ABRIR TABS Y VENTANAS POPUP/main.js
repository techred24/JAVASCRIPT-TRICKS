// Source: https://youtu.be/Snsd5O9pLlc

document.getElementById('btnTab').addEventListener('click', this.openTab);
document.getElementById('btnWin').addEventListener('click', this.openWin);

function openTab(ev) {
  console.log('open a tab');
  let win = window.open('tab.html', null);
  win.onload = (ev) => {
    win.document.body.style.backgroundColor = '#999';
    setTimeout(() => {
      win.close();
    }, 2500);
  };
}

function openWin(ev) {
  console.log('open a popup window');

    //   Window.opener
    // The Window interface's opener property returns a reference to the window that opened the window, either with open(), or by navigating a link with a target attribute.
    // In other words, if window A opens window B, B.opener returns A

  // let win = window.open(
  //   'win.html',
  //   null,
  //   'popup,width=400,height=400,left=300,top=500, noopener'
  // );
  let win = window.open(
    '',
    null,
    'popup,width=400,height=400,left=300,top=500'
  );
  win.document.write(
    '<html><head><title>Sample</title></head><body>Sample</body></html>'
  );
  // win.onload = () => {
  let timmy = setInterval(() => {
    let w = Math.random() * parseInt(window.screen.availWidth);
    let h = Math.random() * parseInt(window.screen.availHeight);
    win.resizeTo(w, h);
  }, 1000);

  setTimeout(() => {
    clearInterval(timmy);
    win.close();
  }, 6000);
  // };
}