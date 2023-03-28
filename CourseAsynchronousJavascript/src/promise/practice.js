/*
export function delay(time, message) {
  // Tu código aquí 👈
  return new Promise((resolve) => {
    if(time >= 0 && message != ""){
        window.setTimeout(()=>resolve(message), time)
    } else {
        reject("Error en los parametros de la función")
    }
  })
}
*/

function delay(time, message) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
        if(time >= 0 && message != ""){
            setTimeout(()=>resolve(message), time)
        } else {
            reject("Error en los parametros de la función")
        }
    })
}

delay(2000, "Diego")
.then((m) => {
    console.log(m)
})
.catch(e => {
    console.log(e)
})