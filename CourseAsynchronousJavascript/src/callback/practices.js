/*
export function execCallback(callback) {
  // Tu código aquí 👈
  window.setTimeout(callback, 2000)
}
*/
function execCallback(callback) {
    // Tu código aquí 👈
    setTimeout(callback, 2000)
}

const myFunc = () => { console.log('Log after 2 seconds') }
execCallback(myFunc)