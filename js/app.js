const listFun = () => {
  // table listItem
  const listItem = document.getElementById('listItem');

  let tr = document.createElement('tr');
  tr.style.width = 'full';
  tr.style.textAlign = 'center';
    tr.innerHTML = `<td>one</td><td>one</td>`;
    listItem.appendChild(tr);

}




// monitor data
const monitorBtn = () => {

  const monitor = document.getElementById('monitor');
  const monitorValue = Number(monitor.value);
  const totalQuantity = 12000 * monitorValue;
  
  console.log(totalQuantity)

  monitor.value = '';
}

// desktop data
const desktopBtn = () => {

  const desktop = document.getElementById('desktop');
  const desktopValue = Number(desktop.value);
  const totalQuantity = 4000 * desktopValue;
  console.log(totalQuantity)

  desktop.value = '';
}

// keyboard data
const keyboardBtn = () => {

  const keyboard = document.getElementById('keyboard');
  const keyboardValue = Number(keyboard.value);
  const totalQuantity = 1800 * keyboardValue;
  console.log(totalQuantity)

  keyboard.value = '';
}

// mouse data
const mouseBtn = () => {

  const mouse = document.getElementById('mouse');
  const mouseValue = Number(mouse.value);
  const totalQuantity = 1200 * mouseValue;
  console.log(totalQuantity)

  mouse.value = '';
}

// mouse data
const mousepadBtn = () => {

  const mousepad = document.getElementById('mousepad');
  const mousepadValue = Number(mousepad.value);
  const totalQuantity = 800 * mousepadValue;
  console.log(totalQuantity)

  mousepad.value = '';
}

// mouse data
const headphoneBtn = () => {

  const headphone = document.getElementById('headphone');
  const headphoneValue = Number(headphone.value);
  const totalQuantity = 2800 * headphoneValue;
  console.log(totalQuantity)

  headphone.value = '';
}

// mouse data
const microphoneBtn = () => {

  const microphone = document.getElementById('microphone');
  const microphoneValue = Number(microphone.value);
  const totalQuantity = 2000 * microphoneValue;
  console.log(totalQuantity)

  microphone.value = '';
}


// mouse data
const webcamBtn = () => {

  const webcam = document.getElementById('webcam');
  const webcamValue = Number(webcam.value);
  const totalQuantity = 3200 * webcamValue;
  console.log(totalQuantity)

  webcam.value = '';
}