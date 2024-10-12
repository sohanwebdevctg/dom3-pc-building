// monitor data
const monitorBtn = () => {

  const monitor = document.getElementById('monitor');
  const monitorValue = Number(monitor.value);
  const totalQuantity = 12000 * monitorValue;
  console.log(totalQuantity)

  monitor.value = '';
}