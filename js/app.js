const listFun = (name, price = 0) => {
  // table listItem
  const listItem = document.getElementById('listItem');

  let tr = document.createElement('tr');
  tr.style.width = 'full';
  tr.style.textAlign = 'center';
  tr.innerHTML = `<td>${name}</td><td>${price}</td>`;
  listItem.appendChild(tr);

}


// monitor data
const monitorBtn = () => {

  const monitor = document.getElementById('monitor');
  const monitorValue = Number(monitor.value);
  const totalQuantity = 12000 * monitorValue;
  listFun("HP Monitor",totalQuantity);
  monitor.value = '';
}

// desktop data
const desktopBtn = () => {

  const desktop = document.getElementById('desktop');
  const desktopValue = Number(desktop.value);
  const totalQuantity = 4000 * desktopValue;
  listFun("Desktop PC",totalQuantity);

  desktop.value = '';
}

// keyboard data
const keyboardBtn = () => {

  const keyboard = document.getElementById('keyboard');
  const keyboardValue = Number(keyboard.value);
  const totalQuantity = 1800 * keyboardValue;
  listFun("RGB KeyBoard",totalQuantity);

  keyboard.value = '';
}

// mouse data
const mouseBtn = () => {

  const mouse = document.getElementById('mouse');
  const mouseValue = Number(mouse.value);
  const totalQuantity = 1200 * mouseValue;
  listFun("RGB Mouse",totalQuantity);

  mouse.value = '';
}

// mouse data
const mousepadBtn = () => {

  const mousepad = document.getElementById('mousepad');
  const mousepadValue = Number(mousepad.value);
  const totalQuantity = 800 * mousepadValue;
  listFun("RGB Mouse Pad",totalQuantity);
  
  mousepad.value = '';
}

// mouse data
const headphoneBtn = () => {

  const headphone = document.getElementById('headphone');
  const headphoneValue = Number(headphone.value);
  const totalQuantity = 2800 * headphoneValue;
  listFun("Head Phone",totalQuantity);

  headphone.value = '';
}

// mouse data
const microphoneBtn = () => {

  const microphone = document.getElementById('microphone');
  const microphoneValue = Number(microphone.value);
  const totalQuantity = 2000 * microphoneValue;
  listFun("Microphone",totalQuantity);

  microphone.value = '';
}


// mouse data
const webcamBtn = () => {

  const webcam = document.getElementById('webcam');
  const webcamValue = Number(webcam.value);
  if(webcamValue > 0){
    const totalQuantity = 3200 * webcamValue;
  listFun("WebCam",totalQuantity);
  webcam.value = '';
  }else{
    alert('no')
  }
  
}